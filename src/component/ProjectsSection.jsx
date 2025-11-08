import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Delicio - Food Delivery",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
      mockupImage:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "FitFactory - Gym Website",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      mockupImage:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Tiger Den Club & Resort",
      image:
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop",
      mockupImage:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-block">
            <div className="inline-block mb-6 bg-[#854FEE] text-white px-6 py-2 rounded-md rotate-[-5deg] font-semibold text-lg ">
              MY PROJECTS
            </div>
           
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="relative group cursor-pointer">
              {/* Card Container with Border */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-lg p-1 h-full">
                <div className="bg-gray-800 rounded-lg overflow-hidden h-full">
                  {/* Project Screenshot */}
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Hover Overlay - Optional */}
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Optional: Project Titles Below Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
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
