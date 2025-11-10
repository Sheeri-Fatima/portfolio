import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth Scroll Handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-gray-300 py-10 text-center">
      {/* Name / Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
        Sheeri Fatima
      </h2>

      {/* Divider Line */}
      <div className="w-1/3 md:w-1/4 mx-auto border-t border-gray-500 mb-6"></div>

      {/* Navigation Links */}
      <div className="flex justify-center flex-wrap gap-6 md:gap-10 text-lg font-medium mb-4">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="hover:text-[#854FEE] transition"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => handleScroll(e, "#about")}
          className="hover:text-[#854FEE] transition"
        >
          About
        </a>
        <a
          href="#services"
          onClick={(e) => handleScroll(e, "#services")}
          className="hover:text-[#854FEE] transition"
        >
          Services
        </a>
        <a
          href="#projects"
          onClick={(e) => handleScroll(e, "#projects")}
          className="hover:text-[#854FEE] transition"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          className="hover:text-[#854FEE] transition"
        >
          Contact
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">
        © {currentYear} · Made with by Sheeri Fatima
      </p>
    </footer>
  );
};

export default Footer;
