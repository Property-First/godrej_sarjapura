"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EnquiryPopup } from "./enquiry-popup";

export function ProjectTable() {
    const [showPopup, setShowPopup] = useState(false)
  return (
    <div className="flex justify-center p-6">
      <Card className="w-full max-w-5xl p-6 shadow-lg rounded-2xl bg-white">

        {/* Title */}
        <h1 className="text-xl md:text-3xl font-semibold text-center uppercase">
          Highlights
        </h1>

        {/* <p className="text-center text-gray-600 mt-0">
          Highlights
        </p> */}

        {/* <p className="text-center text-sm text-gray-500">
          By Godrej Properties
        </p> */}

        {/* TABLE */}
        <div className="mt-2 border rounded-lg overflow-hidden">

          <table className="w-full text-sm text-left">

            <tbody>

              <tr className="border-b">
                <td className="p-3 font-medium bg-gray-50 w-1/2 md:text-[14px] text-[12px]">
                  Land Parcel
                </td>
                <td className="p-3 md:text-[15px] text-[11px]">7.9 Acres</td>
              </tr>

              <tr className="border-b">
                <td className="p-3 font-medium bg-gray-50 md:text-[14px] text-[12px]">
                  Total Units
                </td>
                <td className="p-3 md:text-[15px] text-[11px]">518 Units</td>
              </tr>

              <tr className="border-b">
                <td className="p-3 font-medium bg-gray-50 md:text-[14px] text-[12px]">
                  Units Per Floor
                </td>
                <td className="p-3 md:text-[15px] text-[11px]">8 Units Per Floor</td>
              </tr>

              <tr>
                <td className="p-3 font-medium bg-gray-50 md:text-[14px] text-[12px]">
                  Structure
                </td>
                <td className="p-3 md:text-[15px] text-[11px]">3B + G + 33 Floors</td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* HIGHLIGHTS */}
        

        {/* Pricing */}
        {/* <div className="text-center mt-6">
          <p className="text-gray-600">Premium 2 & 3 BHK Apartments Starts From</p>
          <h2 className="text-2xl font-bold mt-1">₹ 1.44 CR Onwards</h2>
        </div> */}

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <Button className="px-6 bg-black hover:bg-gray-800" onClick={() => setShowPopup(true)}>
            Enquire Now
          </Button>
        </div>

      </Card>
      <EnquiryPopup open={showPopup} onOpenChange={setShowPopup} />
    </div>
  );
}