import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    option: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side - Form */}
          <div className="bg-gradient-to-br from-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 lg:p-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              Let's work{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base mb-2">
              Have a project in mind or need a developer to bring your
            </p>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              ideas to life?
            </p>
            <p className="text-gray-300 text-sm sm:text-base mb-8">
              let's collaborate and build something great together.
            </p>

            <div className="space-y-4">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                />
              </div>

              {/* Dropdown */}
              <select
                name="option"
                value={formData.option}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-gray-400 focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer text-sm"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5rem'
                }}
              >
                <option value="">Choose an option</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
              </select>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Enter your message here..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none text-sm"
              />

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 text-sm"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">Phone</h3>
                <p className="text-base sm:text-lg text-gray-300">+91 6392546467</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">Email</h3>
                <p className="text-base sm:text-lg text-gray-300">shizasiddique918@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">Address</h3>
                <p className="text-base sm:text-lg text-gray-300">Lucknow , India</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}