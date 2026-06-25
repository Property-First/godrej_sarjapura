"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { EnquiryPopup } from "./enquiry-popup";

export function ProjectCard() {
    const [showPopup, setShowPopup] = useState(false)
  return (
    <>
    <div className="flex justify-center items-center p-2" id="overview">
      <Card className="max-w-7xl w-full p-6 rounded-2xl shadow-lg">
        
        {/* Title */}
        <h1 className="text-xl md:text-3xl font-semibold text-center uppercase">
          Overview
        </h1>

        {/* Subtitle */}
        {/* <p className="text-center text-gray-500 mt-1">
          Overview
        </p> */}

        {/* Content */}
        <p className="mt-2 text-[12px] md:text-[14px] text-gray-700 leading-relaxed text-justify">
          The Godrej Sarjapur Road project in Bengaluru is a premium residential
          development spread across a sprawling 7.9-acre land parcel. The property
          is designed with two high-rise towers, each soaring 33 floors high above
          a ground level and three basement parking tiers (3B+G+33). It offers an
          exclusive community experience with a total of exactly 518 units.
          Prospective buyers have a variety of spacious layouts to choose from,
          including 256 units of 2 BHK apartments (spanning approximately 1,200 sq. ft.),
          126 units of 3 BHKs with 2 toilets (around 1,500 sq. ft.), and 136 units
          of larger 3 BHKs with 3 toilets (about 1,800 sq. ft.). The development
          also promises modern lifestyle amenities, highlighted by a dedicated
          four-story (G+3) clubhouse.
        </p>

        {/* Read More */}
        

        {/* Button */}
        <div className="mt-2 flex justify-center">
          <Button className="px-6" onClick={() => setShowPopup(true)}>
            Download Brochure
          </Button>
        </div>

      </Card>
      {/* <EnquiryPopup open={showPopup} onOpenChange={setShowPopup} /> */}
    </div>
    <EnquiryPopup open={showPopup} onOpenChange={setShowPopup} />
    </>
  );
}