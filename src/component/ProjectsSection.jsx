import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Delicio - Food Delivery",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "FitFactory - Gym Website",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Tiger Den Club & Resort",
      image:
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div
      className="bg-black py-16 px-4 sm:px-6 lg:px-8"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-10">
          <div className="relative inline-block">
            <div className="inline-block bg-[#854FEE] text-white px-6 py-2 rounded-md rotate-[-5deg] font-semibold text-lg">
              MY PROJECTS
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
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
            </div>
          ))}
        </div>

        {/* Titles Below Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
          {projects.map((project) => (
            <div key={project.id} className="text-center">
              <h3 className="text-white text-lg font-semibold">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
