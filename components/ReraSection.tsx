// components/ReraSection.tsx

export default function ReraSection() {
  return (
    <section className="bg-[#f5f5f5] py-6 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Cards */}
        <div className="grid md:grid-cols-2 gap-3 mb-5">
          <div className="bg-[#f7f7f7] border border-gray-300 rounded p-4">
            <p className="text-[12px] text-gray-500 mb-1">
              Project RERA:
            </p>
            <p className="text-[11px] text-[#8a6a45]">
              Godrej Park Retreat. PRM/KA/RERA/1251/446/PR/280222/004736
            </p>
          </div>

          <div className="bg-[#f7f7f7] border border-gray-300 rounded p-4">
            <p className="text-[12px] text-gray-500 mb-1">
              Marketed By:
            </p>
            <p className="text-[11px] text-[#8a6a45]">
              Authorised Channel Partner
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3 text-[12px] text-gray-700 mb-5">
          <div className="flex">
            <span className="mr-2">•</span>
            <p>
              <strong>Agent Rera No:</strong>{" "}
              PRM/KA/RERA/1251/446/AG/171201/001619
            </p>
          </div>

          <div className="flex">
            <span className="mr-2">•</span>
            <p>
              <strong>Site Address:</strong> Godrej Vardantra,
              Bannerghatta, Bangalore, Karnataka Corporate Office:
              Godrej Properties: Unit No. 5C, 5th Floor,
              Godrej One, Pirojshanagar, Vikhroli East,
              Mumbai - 400 079.
            </p>
          </div>

          <div className="flex">
            <span className="mr-2">•</span>
            <p>
              <strong>Corporate Office:</strong> ART ARCADE,
              NO.107, 4TH FLOOR, 80 FT ROAD,
              KORAMANGALA 4TH BLOCK, BENGALURU,
              BENGALURU URBAN, KARNATAKA - 560034
            </p>
          </div>
        </div>

        {/* Disclaimer Box */}
        <div className="border border-gray-300 bg-[#fafafa] p-4 text-[11px] leading-5 text-gray-500 mb-5">
          Disclaimer: This website is owned and operated by Property First LLP
          (RERA Registration No. PRM/KA/RERA/1251/446/AG/171201/001619),
          an authorized channel partner of Godrej Properties, on behalf of
          Supreme Enterprises. The information, images, specifications,
          and details provided on this website are for representational
          and informational purposes only and are subject to change without
          prior notice. Prospective buyers are advised to verify all project
          details, specifications, approvals, and availability directly with
          the developer before making any purchase decision.
        </div>

        {/* Footer Links */}
        <div className="flex justify-center items-center gap-4 text-[11px] text-gray-500">
          <a href="privacy-policy" className="hover:underline">
            Disclaimer & Privacy Policy
          </a>

          <span>|</span>

          <a href="terms-conditions" className="hover:underline">
            Terms & Condition
          </a>
        </div>
      </div>
    </section>
  );
}