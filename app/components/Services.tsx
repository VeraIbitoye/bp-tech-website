import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Fiber Optic Sales",
    description:
      "High-quality single-mode and multi-mode fiber optic cables and accessories for all network types.",
  },
  {
    title: "Installation & Deployment",
    description:
      "Professional fiber network design, installation, splicing, testing, and commissioning.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Fiber fault diagnosis, emergency repairs, OTDR testing, and preventive maintenance.",
  },
  {
    title: "Consultation & Project Management",
    description:
      "End-to-end fiber project planning, supervision, and technical documentation.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll animation="animate-fadeUp">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">
              Our Core Services
            </h2>
            <p className="mt-4 text-gray-600">
              Professional fiber optic solutions designed to meet modern
              connectivity demands.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={index}
              animation="animate-fadeUp"
            >
              <div className="h-full rounded-xl border p-6 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
