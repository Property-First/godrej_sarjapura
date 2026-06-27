"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"
import Image from "next/image"

interface EnquiryPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EnquiryPopup({ open, onOpenChange }: EnquiryPopupProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry")
      }

      // setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: ""})
      router.push("/thankyou")
      // Reset after 3 seconds
      setTimeout(() => {
        // setIsSubmitted(false)
        onOpenChange(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
     <DialogContent className="max-w-[280px] p-0 bg-white">
  <div className="p-6">
    {/* Logo */}

   <div className="flex justify-center">
  <Image
    src="/godrej_sarjapur_logo.png"
    alt="Logo"
    width={140}
    height={50}
    priority
  />
</div>
    {/* <div className="text-center">
      <h1 className="text-4xl font-bold">
        <span className="text-teal-500">GODREJ</span>{" "}
        <span className="text-black">SARJAPUR</span>
      </h1>

      <div className="inline-block border border-gray-400 px-4 py-1 mt-1">
        <p className="text-[12px] tracking-wide text-gray-700">
          AUTHORISED MARKETING PARTNER
        </p>
      </div>
    </div> */}

    {/* Heading */}
    <h2 className="text-center font-semibold text-[14px] mt-6 mb-6">
      Register Here And Avail The{" "}
      <span className="text-red-500">Best Offers!!</span>
    </h2>

    {/* Form */}
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full border-b border-gray-300 bg-transparent px-1 py-1 outline-none text-[12px]"
        />

        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter Phone"
          required
          className="w-full border-b border-gray-300 bg-transparent px-1 py-1 outline-none text-[12px]"
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-Mail Address"
          required
          className="w-full border-b border-gray-300 bg-transparent px-1 py-1 outline-none text-[12px]"
        />
      </div>

      {/* Terms */}
      <div className="flex items-start gap-3 mt-4">
        <input
          type="checkbox"
          required
          className="mt-1 h-2 w-2"
          checked
        />

        <p className="text-center text-[12px] text-gray-700">
          I agree to the Terms & Conditions and Privacy
          Policy.
        </p>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-3">
          {error}
        </p>
      )}

      {/* Submit */}
      <div className="flex justify-center mt-8">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-black hover:bg-black text-white rounded-sm px-10 py-2 text-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submit...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </form>
  </div>
</DialogContent>
    </Dialog>
  )
}
