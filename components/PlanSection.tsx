// app/page.tsx
import Image from "next/image";
import { EnquiryPopup } from "./enquiry-popup";
import { useState } from "react";

export function PlanSection() {
    const [showPopup, setShowPopup] = useState(false)
  const floorPlans = [
  {
    image: "/floor_1.avif",
    title: "2 BHK"
  },
  {
    image: "/floor_2.avif",
    title: "3 BHK (2T)"
  },
  {
    image: "/floor_3.avif",
    title: "3 BHK (3T)"
  },
];

  return (
    <main className="bg-white min-h-screen py-10" id="floor-plan">
      <div className="container mx-auto px-4">
        
        {/* Master Plan */}
        <section className="text-center mb-16">
          <h2 className="text-xl md:text-3xl font-medium mb-6">
            Master Plan
          </h2>

          <div className="flex justify-center">
            <div className="border border-gray-300 p-2 group relative overflow-hidden" onClick={() => setShowPopup(true)}>
              <Image
                src="/master.avif"
                alt="Master Plan"
                width={500}
                height={350}
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

            </div>
          </div>
        </section>

        {/* Floor Plan */}
        <section>
          <h2 className="text-xl md:text-3xl font-medium text-center mb-8">
            Floor Plan
          </h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {floorPlans.map((plan, index) => (
    <div
      key={index}
      className="border border-gray-300 p-2 cursor-pointer"
      onClick={() => setShowPopup(true)}
    >
      <div className="group relative overflow-hidden">
        <Image
          src={plan.image}
          alt={plan.title}
          width={350}
          height={250}
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
      </div>

      <h3 className="text-center font-medium text-lg mt-4">
        {plan.title}
      </h3>
    </div>
  ))}
</div>
        </section>

      </div>
      <EnquiryPopup open={showPopup} onOpenChange={setShowPopup} />
    </main>
  );
}