import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Code, Rocket, Users, TrendingUp, Award, Sparkles } from 'lucide-react';

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
//   const [activeExperience, setActiveExperience] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      role: 'Front-End Developer',
      type: 'Freelance',
      company: 'Self-Employed',
      location: 'Remote',
      duration: '6 Months',
      period: '2024 - Present',
      description: 'Specialized in building responsive and interactive web applications for various clients. Handled complete project lifecycles from design implementation to deployment.',
      achievements: [
        'Developed 10+ responsive web applications using React and Tailwind CSS',
        'Integrated Firebase authentication and real-time databases',
        'Optimized website performance, achieving 90+ Lighthouse scores',
        'Managed domain configuration and hosting deployments'
      ],
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'JavaScript', 'HTML/CSS'],
      icon: Code,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      role: 'Web Development Intern',
      type: 'Internship',
      company: 'Tech Startup',
      location: 'Remote',
      duration: '3 Months',
      period: '2024',
      description: 'Worked on full-stack web projects as part of a development team. Focused on creating user-friendly interfaces and resolving technical challenges.',
      achievements: [
        'Built reusable React components for multiple projects',
        'Fixed critical domain and hosting configuration errors',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Debugged and optimized existing codebase for better performance'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Bootstrap'],
      icon: Briefcase,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      role: 'Personal Projects',
      type: 'Self-Learning',
      company: 'Independent',
      location: 'Remote',
      duration: 'Ongoing',
      period: '2023 - Present',
      description: 'Continuously building and experimenting with new web technologies through personal projects. Focus on learning modern frameworks and best practices.',
      achievements: [
        'Created 20+ practice projects to master React and modern JavaScript',
        'Implemented responsive designs across various screen sizes',
        'Experimented with Firebase, REST APIs, and state management',
        'Contributed to open-source projects on GitHub'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Git'],
      icon: Rocket,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { icon: Code, value: '20+', label: 'Projects Completed', color: 'text-purple-400' },
    { icon: Users, value: '15+', label: 'Happy Clients', color: 'text-pink-400' },
    { icon: TrendingUp, value: '90+', label: 'Performance Score', color: 'text-blue-400' },
    { icon: Award, value: '6', label: 'Months Experience', color: 'text-green-400' }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-4">
            <Briefcase className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">My journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building real-world applications and growing as a developer
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-5xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 hover:bg-slate-800/80 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className={`w-8 h-8 ${stat.color} mb-3 group-hover:scale-110 transition-transform`} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto">
          
          {/* Desktop Timeline View */}
          <div className="hidden lg:block relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform -translate-x-1/2" />
            
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative mb-16 transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'}`
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.gradient} p-1 shadow-lg shadow-purple-500/50`}>
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-purple-400" />
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-[calc(50%-4rem)] ${isLeft ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}>
                    <div className="group bg-slate-800/50 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 hover:bg-slate-800/80 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                      
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} text-white text-xs font-semibold rounded-full`}>
                            {exp.type}
                          </span>
                          <span className="text-gray-400 text-sm">{exp.period}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet View */}
          <div className="lg:hidden space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <div className="group bg-slate-800/50 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 hover:bg-slate-800/80 transition-all duration-300">
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${exp.gradient} p-0.5 mb-4`}>
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                    </div>

                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} text-white text-xs font-semibold rounded-full`}>
                          {exp.type}
                        </span>
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">
              Let's Work Together
            </h3>
            <p className="text-gray-400 max-w-md">
              Looking for opportunities to grow and contribute to exciting projects
            </p>
            <button className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50">
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}