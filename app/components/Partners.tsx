import Image from "next/image";

const partners = [
  { src: "/luliLogo.jpeg", alt: "Partner 1" },
  { src: "/jpLogo.jpeg", alt: "Partner 2" },
  { src: "/telesupLogo.jpeg", alt: "Partner 3" },
  { src: "/wtesLogo.jpeg", alt: "Partner 4" },
];

export default function Partners() {
  return (
    <section className=" py-14">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold tracking-wide text-gray-500 uppercase">
          Trusted by our partners
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
