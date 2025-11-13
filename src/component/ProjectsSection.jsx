import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "ISO Certification",
      image: "/images/project1.png",
      url: "https://isoo-nu.vercel.app/",
      github: "https://github.com/Sheeri-Fatima/portfolio.git",
    },
    {
      id: 2,
      title: "Rosewood International School",
      image: "/images/project3.png",
      url: "https://www.rosewoodinternationalschool.com/",
      github: "https://github.com/squareit760/rosewood.git",
    },
    {
      id: 3,
      title: "Eaglecabs",
      image: "/images/project2.png",
      url: "https://www.eaglecabs.co.in/",
      github: "https://github.com/squareit760/eaglecabs.git",
    },
  ];

  return (
    <div className="bg-black py-20 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-block">
            <div className="inline-block bg-[#854FEE] text-white px-6 py-2 rounded-md rotate-[-5deg] font-semibold text-lg">
              MY PROJECTS
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer transform transition-transform hover:scale-[1.02]"
            >
              {/* Card Container */}
              <div className="bg-gradient-to-br from-purple-700 to-purple-500 rounded-xl p-[2px]">
                <div className="bg-gray-900 rounded-xl overflow-hidden h-[210px] sm:h-[230px] flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#854FEE]/0 group-hover:bg-[#854FEE]/10 transition-colors duration-300 rounded-xl"></div>
            </a>
          ))}
        </div>

        {/* Titles + GitHub Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
          {projects.map((project) => (
            <div key={project.id} className="text-center">
              <h3 className="text-white text-lg font-semibold mb-2">
                {project.title}
              </h3>
              {/* <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#854FEE] hover:underline text-sm"
              >
                View Source Code
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
