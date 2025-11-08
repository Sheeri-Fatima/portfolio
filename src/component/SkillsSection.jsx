import React from "react";

export default function SkillsSection() {
  const skills = [
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" className="w-20 h-20" fill="#61DAFB">
          <circle cx="12" cy="12" r="2" />
          <ellipse
            cx="12"
            cy="12"
            rx="8"
            ry="3"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="8"
            ry="3"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="8"
            ry="3"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1"
            transform="rotate(120 12 12)"
          />
        </svg>
      ),
    },
    {
      name: "React Native",
      icon: (
        <svg viewBox="0 0 24 24" className="w-20 h-20" fill="#61DAFB">
          <circle cx="12" cy="12" r="2.5" />
          <circle cx="6" cy="8" r="1.5" />
          <circle cx="18" cy="8" r="1.5" />
          <circle cx="6" cy="16" r="1.5" />
          <circle cx="18" cy="16" r="1.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="8"
            ry="4"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="8"
            ry="4"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="8"
            ry="4"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1"
            transform="rotate(120 12 12)"
          />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <div className="w-20 h-20 bg-yellow-400 flex items-center justify-center">
          <span className="text-5xl font-bold text-black">JS</span>
        </div>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <div className="w-20 h-20 bg-blue-500 flex items-center justify-center">
          <span className="text-5xl font-bold text-white">TS</span>
        </div>
      ),
    },
    {
      name: "HTML",
      icon: (
        <svg viewBox="0 0 24 24" className="w-20 h-20">
          <path
            fill="#E34F26"
            d="M4 2l1.5 17L12 21l6.5-2L20 2H4zm3 4h10l-.5 5.5h-6l.2 2h5.8l-.3 3.5L12 18l-4.2-1.5-.3-3h2l.2 1.5L12 16l2.3-.5.2-2.5H9.5l-.5-5h7l.2-2H7l.2 2z"
          />
        </svg>
      ),
    },
    {
      name: "CSS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-20 h-20">
          <path
            fill="#1572B6"
            d="M4 2l1.5 17L12 21l6.5-2L20 2H4zm3 4h10l-.5 5.5h-6l.2 2h5.8l-.3 3.5L12 18l-4.2-1.5-.3-3h2l.2 1.5L12 16l2.3-.5.2-2.5H9.5l-.5-5h7l.2-2H7l.2 2z"
          />
        </svg>
      ),
    },
    {
      name: "Node JS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-20 h-20" fill="#8CC84B">
          <path d="M12 1.5c-.4 0-.8.1-1.1.3L3.5 6.2c-.7.4-1.1 1.1-1.1 1.9v7.8c0 .8.4 1.5 1.1 1.9l7.4 4.4c.3.2.7.3 1.1.3.4 0 .8-.1 1.1-.3l7.4-4.4c.7-.4 1.1-1.1 1.1-1.9V8.1c0-.8-.4-1.5-1.1-1.9l-7.4-4.4c-.3-.2-.7-.3-1.1-.3zm0 2c.1 0 .3 0 .4.1l7.4 4.4c.2.1.3.3.3.5v7.8c0 .2-.1.4-.3.5l-7.4 4.4c-.1.1-.3.1-.4.1-.1 0-.3 0-.4-.1l-7.4-4.4c-.2-.1-.3-.3-.3-.5V8.1c0-.2.1-.4.3-.5l7.4-4.4c.1-.1.3-.1.4-.1z" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <svg viewBox="0 0 24 24" className="w-20 h-20" fill="#47A248">
          <path d="M12 2c-.3 0-.5.1-.7.2-.2.2-.3.4-.3.7v.3c0 .2 0 .4-.1.6-.1.4-.3.8-.5 1.1-.5.8-1.1 1.5-1.8 2.1-.7.6-1.5 1.1-2.4 1.4-.2.1-.4.1-.6.2h-.3c-.3 0-.5.1-.7.3-.2.2-.2.4-.2.7v.8c0 .3.1.5.2.7.2.2.4.3.7.3h.3c.2 0 .4 0 .6.1.9.2 1.7.7 2.4 1.4.7.6 1.3 1.3 1.8 2.1.2.3.4.7.5 1.1.1.2.1.4.1.6v.3c0 .3.1.5.3.7.2.2.4.2.7.2s.5-.1.7-.2c.2-.2.3-.4.3-.7v-.3c0-.2 0-.4.1-.6.1-.4.3-.8.5-1.1.5-.8 1.1-1.5 1.8-2.1.7-.6 1.5-1.1 2.4-1.4.2-.1.4-.1.6-.2h.3c.3 0 .5-.1.7-.3.2-.2.2-.4.2-.7v-.8c0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.7-.3h-.3c-.2 0-.4 0-.6-.1-.9-.2-1.7-.7-2.4-1.4-.7-.6-1.3-1.3-1.8-2.1-.2-.3-.4-.7-.5-1.1-.1-.2-.1-.4-.1-.6v-.3c0-.3-.1-.5-.3-.7-.2-.1-.4-.2-.7-.2z" />
        </svg>
      ),
    },
    {
      name: "C++",
      icon: (
        <svg viewBox="0 0 24 24" className="w-20 h-20" fill="#00599C">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.1 0 2.09.45 2.83 1.17l-1.42 1.42c-.35-.35-.84-.59-1.41-.59-1.1 0-2 .9-2 2s.9 2 2 2c.57 0 1.06-.24 1.41-.59l1.42 1.42c-.74.72-1.73 1.17-2.83 1.17zm6-3h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zm3 0h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1z" />
        </svg>
      ),
    },
    {
      name: "TailwindCSS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-20 h-20" fill="#06B6D4">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-22 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <div className="relative inline-block">
            <div className="inline-block mb-6 bg-[#854FEE] text-white px-6 py-2 rounded-md rotate-[-5deg] font-semibold text-lg ">
               SKILLS
            </div>
            
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer border border-slate-700/50 hover:border-blue-500/50"
            >
              {/* Skill Icon */}
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-white text-base sm:text-lg font-semibold text-center">
                {skill.name}
              </h3>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
