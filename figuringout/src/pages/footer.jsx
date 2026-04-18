import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Logo + About Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-2xl">S</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                SPPU Engineers
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Empowering engineering students with high-quality tutorials,
              real-world projects, and career opportunities. Your vision, our
              innovation.
            </p>

            {/* Social Links */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:support@sppuengineers.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6">Platform</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/tutorials"
                  className="hover:text-white transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">
                Study Materials
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Project Ideas
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Interview Prep
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Internships
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Job Board
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400" />
                <a
                  href="mailto:support@sppuengineers.com"
                  className="hover:text-white transition-colors"
                >
                  support@sppuengineers.com
                </a>
              </div>
            </div>

            {/* Simple Newsletter Signup */}
            <div className="mt-10">
              <p className="text-sm text-gray-400 mb-3">
                Stay updated with new tutorials
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-gray-900 border border-gray-700 rounded-l-2xl px-5 py-3 text-sm flex-1 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-500 px-6 rounded-r-2xl font-medium transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} SPPU Engineers. All rights reserved.
          </p>

          <div className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart size={16} className="text-red-500 fill-current" />{" "}
            for SPPU Students
          </div>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
