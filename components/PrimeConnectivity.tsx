export default function PrimeConnectivity() {
  const connectivity = [
  "Metro Access within 10 mins (Kalena Agrahara)",
  "Close to IIM Bangalore – 15 mins",
  "Royal Meenakshi Mall – 15 mins",
  "Electronic City – 20 mins",
  "Greenwood High International School – 1 min",
];

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Prime Connectivity
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {connectivity.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow"
            >
              <span className="text-blue-600 text-xl">📍</span>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}