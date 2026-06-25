// components/Gallery.tsx

import Image from "next/image";

const galleryImages = [
  "/gallery1.avif",
  "/gallery2.avif",
  "/gallery3.avif",
  "/gallery4.avif",
  "/gallery5.webp",
  "/gallery6.webp",
];

export function Galleryy() {
  return (
    <section className="bg-[#f5f5f5] py-6" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-xl md:text-3xl font-semibold mb-6">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-[120px] md:h-[240px] object-cover transition-all duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}