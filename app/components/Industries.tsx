import AnimateOnScroll from "./AnimateOnScroll";

const industries = [
  "Internet Service Providers (ISPs)",
  "Residential Estates & Communities",
  "Corporate Offices",
  "Government & Public Projects",
  "Schools, Campuses & Hospitals",
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll animation="animate-fadeUp">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">
              Industries We Serve
            </h2>
            <p className="mt-4 text-gray-600">
              We deliver reliable fiber optic infrastructure across diverse
              sectors and environments.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <AnimateOnScroll key={index} animation="animate-fadeUp">
              <div className="rounded-xl bg-white p-6 border hover:shadow-md transition">
                <p className="font-medium text-gray-800">
                  {industry}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
