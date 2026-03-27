import React from "react";

const projects = [
  {
    title: "DIGY News Platform",
    description: "A news aggregation platform with reusable components and dynamic content display.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    live: "#",
    github: "#",
  },
  {
    title: "Food Ordering App",
    description: "A responsive food ordering system designed for demo day with improved UX.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects, skills, and experience.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    live: "#",
    github: "#",
  },
  {
    title: "Reusable News Components",
    description: "A collection of reusable React components for modern news platforms.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    live: "#",
    github: "#",
  },
  {
    title: "Advanced Search Component",
    description: "A customizable search system with filters and dynamic dropdown functionality.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-gradient-to-b from-black via-neutral-900 to-black text-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <p className="uppercase tracking-[0.4em] text-sm text-gray-400 mb-4">
          Projects
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-20">
          Selected Work
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-3xl cursor-pointer"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">

                {/* Content Wrapper */}
                <div className="transform translate-y-10 group-hover:translate-y-0 transition duration-500">

                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition duration-500 delay-200">
                    <a
                      href={project.live}
                      className="text-xs uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition"
                    >
                      Live
                    </a>

                    <a
                      href={project.github}
                      className="text-xs uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition"
                    >
                      Code
                    </a>
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;