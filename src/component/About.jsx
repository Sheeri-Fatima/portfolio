import React from "react";
import { Check, Star } from "lucide-react";

const About = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Section */}
        <div className="flex-1">
          {/* About Me Tag */}
          <div className="inline-block mb-6 bg-[#854FEE] text-white px-6 py-2 rounded-md rotate-[-5deg] font-semibold text-lg ">
            ABOUT ME
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Crafting <span className="text-[#854FEE]">Web</span> <br />
            Applications with <br /> Passion and Precision
          </h2>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-8">
            I specialize in building responsive and user-focused web and mobile
            applications using modern technologies. With an eye for design and a
            passion for clean code, I bring digital ideas to life with precision
            and creativity.
          </p>

          {/* Skills */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded">
                <Check className="text-white w-5 h-5" />
              </div>
              <p className="font-medium">Frontend Development</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-600 p-2 rounded">
                <Check className="text-white w-5 h-5" />
              </div>
              <p className="font-medium">Backend Development</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-600 p-2 rounded">
                <Check className="text-white w-5 h-5" />
              </div>
              <p className="font-medium">FullStack Development</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Star className="text-[#854FEE] w-6 h-6" />
              <span className="text-2xl font-bold">1 yr+</span>
            </div>
            <p className="text-gray-400 mt-1">Experience</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Check className="text-[#854FEE] w-6 h-6" />
              <span className="text-2xl font-bold">20+</span>
            </div>
            <p className="text-gray-400 mt-1">Completed Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
