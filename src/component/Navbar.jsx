import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll"; // ✅ for smooth scroll

export default function PortfolioNavbarHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="ml-2">
                  <img
                    src="/images/logo2.png"
                    className="w-full h-12 lg:h-16 object-cover"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-[#854FEE] transition-colors"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-[#854FEE] transition-colors"
              >
                About
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-[#854FEE] transition-colors"
              >
                Services
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-[#854FEE] transition-colors"
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-[#854FEE] transition-colors"
              >
                Contact
              </Link>

              {/* ✨ Hire Me Button */}
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#854FEE] hover:bg-[#6d38d8] text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-md hover:shadow-[#854FEE]/40"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#854FEE] transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className="block px-3 py-2 hover:bg-[#854FEE]/10 rounded transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="block px-3 py-2 hover:bg-[#854FEE]/10 rounded transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-70}
                className="block px-3 py-2 hover:bg-[#854FEE]/10 rounded transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="block px-3 py-2 hover:bg-[#854FEE]/10 rounded transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="block px-3 py-2 hover:bg-[#854FEE]/10 rounded transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* ✨ Hire Me Button (Mobile) */}
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="w-full mt-3 bg-[#854FEE] hover:bg-[#6d38d8] text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-2 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#854FEE] via-black to-black opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slideInRight">
              <div className="space-y-2">
                <p className="text-[#854FEE] text-lg font-medium">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  Sheeri Fatima
                  <span
                    className="block mt-2 "
                    style={{ color: "#854FEE", fontSize: 48 }}
                  >
                    Web Developer
                  </span>
                </h1>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Full-stack developer specializing in React, Node.js, and
                JavaScript. I build clean, responsive, and performant web
                applications with modern tools and best practices.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "React",
                  "Node.js",
                  "JavaScript",
                  "Tailwind CSS",
                  "Bootstrap",
                  "HTML",
                  "CSS",
                  "Firebase",
                  "Mongo DB",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#854FEE]/10 border border-[#854FEE] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* ✨ Single CTA Button */}
              <div className="pt-6">
                <a
                  href="/resume.pdf" // <-- replace with your resume file path
                  download
                  className="inline-block px-8 py-3 bg-[#854FEE] hover:bg-[#6d38d8] text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-[#854FEE]/40"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative animate-slideInRight delay-200">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                <div className="bg-gradient-to-br from-gray-900 to-black p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-gray-400 text-sm">
                      sheeri.dev — bash
                    </span>
                  </div>

                  <div className="font-mono text-sm space-y-4">
                    <div>
                      <span className="text-green-400">$</span>
                      <span className="text-white ml-2">npm run skills</span>
                    </div>

                    <div className="text-cyan-400">→ Loading expertise...</div>

                    <div className="border-l-4 border-[#854FEE] pl-4 space-y-2">
                      <div>
                        <span className="text-white">Frontend:</span>
                        <span className="text-gray-400">
                          {" "}
                          React, HTML, JavaScript
                        </span>
                      </div>
                      <div>
                        <span className="text-white">Backend:</span>
                        <span className="text-gray-400"> Node.js</span>
                      </div>
                      <div>
                        <span className="text-white">Database:</span>
                        <span className="text-gray-400">
                          {" "}
                          MySQL, MongoDB
                        </span>
                      </div>
                      <div>
                        <span className="text-white">Styling:</span>
                        <span className="text-gray-400">
                          {" "}
                          CSS, Bootstrap, Tailwind CSS
                        </span>
                      </div>
                      <div>
                        <span className="text-white">Tools:</span>
                        <span className="text-gray-400"> Git, Vite</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <span className="text-green-400">$</span>
                      <span className="text-gray-600 ml-2">
                        // Ready for new challenges
                      </span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Labels */}
                <div className="bg-black border-t border-gray-800 px-6 py-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-white font-semibold">Clean Code</div>
                      <div className="text-gray-400 text-sm">
                        Best Practices
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Responsive</div>
                      <div className="text-gray-400 text-sm">
                        Mobile First
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        Performance
                      </div>
                      <div className="text-gray-400 text-sm">Optimized</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#854FEE] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#854FEE] rounded-full filter blur-3xl opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#854FEE] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#854FEE] rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
