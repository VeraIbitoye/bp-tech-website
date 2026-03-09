"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function About() {

  const images = [
    "/fiber cables.png",
    "/Fiber optic installation.png",
    "/fiber splicing.png",
    "/fiber team.png",
  ];

  const [current, setCurrent] = useState(0);

  // Previous Image
  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Next Image
  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            About BP Tech & Resources Nigeria Limited
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            BP Tech and Resources Nigeria Limited is a registered Nigerian company established in 2025,
            specializing in fiber optic infrastructure development, telecommunications engineering, and
            technology resource solutions. We are committed to delivering high-quality, reliable, and
            cost-effective solutions tailored to meet the growing demands of Nigeria’s digital landscape.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* IMAGE SLIDER */}
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-lg">

            <Image
              src={images[current]}
              alt="Fiber Optic Work"
              fill
              className="object-cover transition-opacity duration-700"
            />

            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black px-3 py-2 rounded-full shadow"
            >
              ◀
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black px-3 py-2 rounded-full shadow"
            >
              ▶
            </button>

          </div>

          {/* Text Content */}
          <div>

            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Who We Are
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              At BP Tech and Resources Nigeria Limited, we are committed to
              delivering reliable, scalable, and future-ready fiber optic
              infrastructure. Our team provides professional services ranging
              from fiber optic cable supply to full network installation,
              testing, maintenance, and optimization.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With industry-standard tools, skilled technicians, and strong
              project management practices, we help businesses and service
              providers build communication networks that support the growing
              demand for high-speed internet and digital connectivity.
            </p>

          </div>
        </div>

        {/* Mission Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-white shadow-lg p-10 rounded-xl">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To provide reliable, high-quality, and cost-effective fiber optic
              solutions that empower businesses, communities, and service
              providers with fast and secure communication networks.
            </p>
          </div>

          <div className="bg-white shadow-lg p-10 rounded-xl">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To become a trusted leader in fiber optic infrastructure
              development in Nigeria and beyond by delivering innovative,
              dependable, and industry-standard telecommunications solutions.
            </p>
          </div>

        </div>

        {/* Core Values */}
        <div>

          <h3 className="text-3xl font-bold text-center text-blue-900 mb-10">
            Our Core Values
          </h3>

          <div className="flex flex-wrap justify-center gap-6">

            <span className="bg-white shadow px-8 py-4 rounded-lg">
              Quality & Professionalism
            </span>

            <span className="bg-white shadow px-8 py-4 rounded-lg">
              Integrity & Transparency
            </span>

            <span className="bg-white shadow px-8 py-4 rounded-lg">
              Customer Satisfaction
            </span>

            <span className="bg-white shadow px-8 py-4 rounded-lg">
              Innovation & Growth
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}