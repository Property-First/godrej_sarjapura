"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { EnquiryPopup } from "./enquiry-popup"

export function Hero() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-16" id="home">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sarapur_banner.avif"
            alt="Godrej Aveline luxury apartments"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl">
            <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm text-white">  At Kada Agrahara, South Bangalore</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
           Godrej Sarjapur
            </h1>
            <p className="text-white">Premium 2 & 3 BHK Apartments Starts From</p>
            <p className="text-2xl md:text-3xl text-white/90 mb-2">
              Starting ₹ 1.44 CR Onwards
            </p>
            
            <div className=" text-white justify-center items-center gap-4 text-sm md:text-base">
  <span>Grand 18,400 Sqft Clubhouse (G+3)</span>
  <span className="text-gray-400"> | </span>

  <span>85% Open Space</span>
  <span className="text-gray-400"> | </span>

  <span>5 High-Speed Lifts + 2 Staircases</span>
  <span className="text-gray-400"> | </span>

  <span>Close to Major IT Parks, Schools & Hospitals</span>
</div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                size="lg" 
                className="bg-gray-700 hover:bg-gray-800 text-[13px] text-primary-foreground px-6 py-4"
                onClick={() => setShowPopup(true)}
              >
                Enquire Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Download Brochure
              </Button> */}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <EnquiryPopup open={showPopup} onOpenChange={setShowPopup} />
    </>
  )
}
