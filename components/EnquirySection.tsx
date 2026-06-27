// components/EnquirySection.tsx

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EnquirySection() {
  const router = useRouter();

const [isSubmitting, setIsSubmitting] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    setIsSubmitting(true);

    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    router.push("/thankyou");
  } catch (error) {
    console.error(error);
    alert("Failed to submit enquiry");
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/gallery2.avif"
        alt="Building"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h2 className="text-xl md:text-3xl font-semibold mb-8">
          For More Enquiry
        </h2>

        <div className="text-center mb-6">
          <p className="text-xl mb-1">Call :</p>
          <a
  href="tel:+918050563570"
  className="text-2xl mb-4 block hover:text-orange-400"
>
  +91 8050563570
</a>

          <p className="text-xl mb-1">WhatsApp :</p>
          <a
  href="https://wa.me/918971140300?text=Hi%20I%20am%20interested%20in%20the%20Godrej%20Sarjapur%20project.%20Please%20share%20brochure,%20price%20details,%20floor%20plans,%20and%20site%20visit%20information."
  target="_blank"
  rel="noopener noreferrer"
  className="text-2xl block hover:text-green-400"
>
  +91 8050563570
</a>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-2 p-4">
          <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Name"
  required
  className="h-8 px-2 text-black bg-white outline-none"
/>

         <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Enter Phone"
  required
  className="h-8 px-2 text-black bg-white outline-none"
/>

          <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="E-Mail Address"
  required
  className="h-8 px-2 text-black bg-white outline-none"
/>

          <label className="flex items-start gap-2 mt-1 text-sm text-center">
            <input
              type="checkbox"
              className="mt-1"
              checked
            />
            <span>
              I agree to the Terms & Conditions and Privacy Policy.
            </span>
          </label>

          <button
  type="submit"
  disabled={isSubmitting}
  className="mx-auto mt-2 bg-black px-8 py-2 text-white hover:bg-gray-900 transition disabled:opacity-50"
>
  {isSubmitting ? "Submitting..." : "Submit"}
</button>
        </form>
      </div>
    </section>
  );
}