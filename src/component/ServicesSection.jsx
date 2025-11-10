import {
  Monitor,
  ShoppingCart,
  Zap,
  Users,
  Database,
  Gauge,
  Layout,
  Globe,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Monitor className="w-10 h-10 text-white" />,
      title: "Web Applications",
      description: "Tailored web apps built with the latest technologies.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-white" />,
      title: "E-commerce Websites",
      description:
        "Secure online stores with user-friendly shopping and payments.",
    },
    {
      icon: <Zap className="w-10 h-10 text-white" />,
      title: "API Integration",
      description:
        "Seamless integration for smooth data sharing and functionality.",
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "User Interfaces",
      description:
        "Engaging, responsive front-end designs for better user experiences.",
    },
    {
      icon: <Database className="w-10 h-10 text-white" />,
      title: "Database Solutions",
      description:
        "Efficient and scalable database management for your data needs.",
    },
    {
      icon: <Gauge className="w-10 h-10 text-white" />,
      title: "Speed Optimization",
      description: "Boost performance with faster load times and optimization.",
    },
    {
      icon: <Layout className="w-10 h-10 text-white" />,
      title: "Website Management",
      description: "Easy content management systems with flexible controls.",
    },
    {
      icon: <Globe className="w-10 h-10 text-white" />,
      title: "Domain Management",
      description:
        "Manage and configure your domains with professional DNS setup and linking.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 px-4 sm:px-6 lg:px-8"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4 bg-[#854FEE] text-white px-5 py-2 rounded-md rotate-[-5deg] font-semibold text-lg">
            SERVICES
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden h-[220px]"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative bubble */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
