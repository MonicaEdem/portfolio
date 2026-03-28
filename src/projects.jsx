import React from "react";
import helicimush from "./assets/helicimush.png";
import portfolio from "./assets/portfolio.png";
import news from "./assets/news.png";
import repo from "./assets/repo.png";
import movie from "./assets/movie.png";
import games from "./assets/games.png";

const projects = [
  {
    title: "A Client's website",
    description:
      "A responsive website for a local business linked to a paystack store. Built with React and Tailwind CSS.",
    image: helicimush,
    live: "https://testing-landing1.netlify.app/",
    github: "https://github.com/MonicaEdem/landingpage1",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and experience. Built with React and Tailwind CSS.",
    image: portfolio,
    live: "https://monica-edem-kokovena.netlify.app/",
    github: "https://github.com/MonicaEdem/portfolio",
  },
  {
    title: "HTLM/CSS/JS Game",
    description:
      "An Insect catching game built with vanilla JavaScript, HTML, and CSS.",
    image: games,
    live: "https://insect-catching-game-sooty.vercel.app/",
    github: "https://github.com/MonicaEdem/insect-catching-game",
  },
  {
    title: "Movie Search App",
    description:
      "A simple movie search application built with HTML/CSS/Javascript and The Movie DB API.",
    image: movie,
    live: "https://movie-search-app-lyart-psi.vercel.app/",
    github: "https://github.com/MonicaEdem/movie-search-app",
  },

  {
    title: "Reusable News Components",
    description:
      "A collection of reusable React components for modern news platforms.Built with React and Tailwind CSS.",
    image: news,
    live: "https://reusablecomponents.netlify.app/",
    github: "https://github.com/Mest-Immersion1/reusable-components-frontend",
  },
  {
    title: "Github Profile Search",
    description:
      "A simple application to search and view Github profiles. Built with HTML, CSS, and JavaScript alongside the Github API.",
    image: repo,
    live: "https://github-profile-search-lac.vercel.app/",
    github: "https://github.com/MonicaEdem/github-profile-search",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-gradient-to-b from-black via-neutral-900 to-black text-white px-6 md:px-16 py-20"
    >
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
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition"
                    >
                      Live
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
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
