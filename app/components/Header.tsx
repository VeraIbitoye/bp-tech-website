"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/bplogo.png"
          alt="BP Tech and Resources Nigeria Limited"
          width={100}
          height={40}
          priority
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Home", "About", "Services", "Projects", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[var(--bp-orange)] transition"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Desktop WhatsApp */}
        <a
          href="https://wa.me/2348070719088"
          target="_blank"
          className="hidden md:inline-flex rounded-md bg-[var(--bp-orange)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
        >
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t animate-slideDown">
          <nav className="flex flex-col px-6 py-6 gap-4 text-sm font-medium">
            {["Home", "About", "Services", "Products", "Projects", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-[var(--bp-orange)]"
                >
                  {item}
                </Link>
              )
            )}

            <a
              href="https://wa.me/2348070719088"
              target="_blank"
              className="mt-4 inline-flex justify-center rounded-md bg-[var(--bp-orange)] px-4 py-2 text-sm font-semibold text-white"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
