// components/Location.tsx

const locations = [
  "Located on Sarjapur Road",
  "Behind RGA Tech Park",
  "Excellent Connectivity to IT Hubs",
  "Located Near by Upcoming SWIFT City",
  "Excellent Connectivity to Electronic City",
];

export function LocationSarjaPur() {
  return (
    <section className="bg-[#f5f5f5] py-16" id="location">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-center text-xl md:text-3xl font-semibold text-black mb-6">
          Location
        </h2>

        <div className="space-y-0">
          {locations.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-2"
            >
              <p className="text-[14px] text-gray-800 md:text-[15px] ">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}