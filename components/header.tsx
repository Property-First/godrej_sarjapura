"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { EnquiryPopup } from "./enquiry-popup"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Overview", href: "#overview" },
  { label: "Price", href: "#price" },
  { label: "Site & Floor Plan", href: "#floor-plan" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100 border-b border-gray-300">
  {/* <div className="max-w-6xl mx-auto flex items-center justify-between h-14"> */}
<div className="max-w-6xl mx-auto flex items-center justify-between h-14 px-1 overflow-hidden">
    {/* Logo */}
    <Link href="/" className="flex items-center px-4 border-gray-300 h-full">
      <Image
  src="/godrej_sarjapur_logo.png"
  alt="Logo"
  width={140}
  height={50}
  className="w-auto h-8 md:h-10"
  priority
/>
    </Link>

    {/* Desktop Nav */}
   <nav className="hidden lg:flex items-center h-full text-sm">
  <span className="text-gray-400 px-2 ">|</span>

  {navItems.map((item) => (
    <div key={item.href} className="flex items-center">
      <Link
        href={item.href}
        className="px-4 text-gray-700 hover:text-black"
      >
        {item.label}
      </Link>

      <span className="text-gray-400">|</span>
    </div>
  ))}
</nav>

    {/* Right Section */}
    <div className="hidden sm:flex items-center h-full border-gray-300 px-6">
      <Link href="tel:+918971140300" className="text-sm text-orange-600 font-medium">
        +91 8050563570
      </Link>
    </div>

    {/* Mobile Menu */}
    <div className="lg:hidden px-4">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-72">
          <nav className="flex flex-col gap-4 mt-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>

  </div>
</header>
<EnquiryPopup open={showPopup} onOpenChange={setShowPopup} />
    </>
    
  )
}
