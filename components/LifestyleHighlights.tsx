export default function LifestyleHighlights() {
 const highlights = [
  "Premium 2, 3 & 4.5 BHK Residences",
  "Spread Across 27 Acres",
  "11 Towers | 30 Floors Each",
  "High Capital Appreciation Potential",
  "45,000 sq.ft Large Clubhouse",
  "55+ Luxury Amenities with Pool & Multipurpose Court",
  "5 mins to Kalena Agrahara Metro Station",
  "10 mins to JP Nagar",
  "15 mins to Royal Meenakshi Mall",
];

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Lifestyle Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow"
            >
              <span className="text-green-600 text-xl">✔</span>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}