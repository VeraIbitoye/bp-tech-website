import Header from "./components/Header";
import Partners from "./components/Partners";
import AnimateOnLoad from "./components/AnimateOnLoad";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Header />
     {/* HERO SECTION */}
{/* HERO SECTION */}
<section
  className="relative text-white overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/hero-fiber.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[var(--bp-blue)]/80"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

    <AnimateOnLoad animation="animate-fadeUp">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
        Reliable Fiber Optic Solutions for <br className="hidden sm:block" />
        High-Speed Connectivity
      </h1>

      <p className="mt-6 text-base sm:text-lg text-blue-100 max-w-2xl">
        BP Tech and Resources Nigeria Limited delivers end-to-end fiber optic
        solutions from product supply to network deployment and long-term
        maintenance for ISPs, estates, corporate organizations, and public
        infrastructure.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="https://wa.me/2348070719088"
          target="_blank"
          className="rounded-md bg-[var(--bp-orange)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
        >
          WhatsApp Us
        </a>

        <a
          href="#contact"
          className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white hover:text-[var(--bp-blue)] transition"
        >
          Contact Us
        </a>
      </div>
    </AnimateOnLoad>

  </div>
</section>
<About />
      <Partners />
      <Services />
<Industries />
<Projects />
<Contact />
<Footer />


    </>
  );
}
