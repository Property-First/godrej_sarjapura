"use client"

import { useState } from "react";
import { EnquiryPopup } from "./enquiry-popup";

export function PriceSection() {

    const [showPopup, setShowPopup] = useState(false)
  const plans = [
    {
      type: "2 BHK",
      area: "1200 Sq.Ft.",
      price: "₹ 1.44 CR* Onwards",
    },
    {
      type: "3 BHK Premium",
      area: "1550 Sq.Ft.",
      price: "₹ On Request",
    },
    {
      type: "3 BHK LUXE",
      area: "1880 Sq.Ft.",
      price: "₹ On Request",
    },
  ];

  return (
    <section className="w-full py-12 bg-white" id="price">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-xl md:text-3xl font-semibold text-center mb-6">
          Price
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-200 rounded-md p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-800 mb-3 md:text-[14px] text-[13px]">
                <span className="font-medium">Type :</span> {plan.type}
              </p>

              <p className="text-gray-800 mb-3 md:text-[14px] text-[13px]">
                <span className="font-medium">Area :</span> {plan.area}
              </p>

              <p className="text-gray-800 mb-5">
                <span className="font-medium">Price :</span> {plan.price}
              </p>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm text-gray-700">Costsheet :</span>
                <button className="bg-black text-white text-sm px-4 py-1 rounded hover:bg-gray-800" onClick={() => setShowPopup(true)}>
                  Price Breakup
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <EnquiryPopup open={showPopup} onOpenChange={setShowPopup} />
    </section>
  );
}