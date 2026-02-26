import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    title: "Estate FTTH Deployment",
    image: "/estateImg.png",
  },
  {
    title: "Corporate Office Fiber Network",
    image: "/officeImg.png",
  },
  {
    title: "Campus Fiber Installation",
    image: "/campusImg.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll animation="animate-fadeUp">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">
              Our Project Experience
            </h2>
            <p className="mt-4 text-gray-600">
              A snapshot of fiber optic infrastructure projects delivered across
              estates, corporate environments, and campuses.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimateOnScroll key={index} animation="animate-fadeUp">
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90" />

                {/* Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
