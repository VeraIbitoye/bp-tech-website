
"use client";
console.log("Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
console.log("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
console.log("Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const form = e.currentTarget;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  form,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          form.reset();
          setLoading(false);
        },
        () => {
          setSuccess("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll animation="animate-fadeUp">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="mt-4 text-gray-600">
              Contact BP Tech and Resources Nigeria Limited for reliable
              fiber optic and telecommunications solutions.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-start">
          
          {/* Contact Info */}
          <AnimateOnScroll animation="animate-fadeUp">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">
                  BP Tech and Resources Nigeria Limited
                </h3>
                <p className="mt-2 text-gray-600">
                  185, Ikorodu Road, Palmgroove, Lagos.
                </p>
              </div>

              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Phone:</strong> 08087410061, 08070719088
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:bptechandresourcesltd@gmail.com"
                    className="text-[var(--bp-orange)] hover:underline"
                  >
                    bptechandresourcesltd@gmail.com
                  </a>
                </p>
              </div>

              <a
                href="https://wa.me/2348070719088"
                target="_blank"
                className="inline-flex rounded-md bg-[var(--bp-orange)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll animation="animate-fadeUp">
            <form
              onSubmit={sendEmail}
              className="bg-white p-8 rounded-xl shadow-md space-y-6"
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--bp-orange)]"
              />

              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--bp-orange)]"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--bp-orange)]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-[var(--bp-blue)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-center text-sm mt-4">
                  {success}
                </p>
              )}
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}