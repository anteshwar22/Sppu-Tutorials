import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/newSppuT.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Events", path: "/events" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl shadow-xl border-b border-slate-800"
          : "bg-slate-950/80 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo - Unchanged as per your request */}
        <Link
          to="/"
          className="transition-transform duration-300 hover:scale-105"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="SPPU Engineers Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-medium text-lg transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              } group`}
            >
              {link.name}
              {/* Animated Underline */}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2.5 font-medium text-slate-300 hover:text-white transition-colors">
            Login
          </button>
          <button className="px-7 py-3 bg-white text-slate-950 font-semibold rounded-2xl hover:bg-slate-100 active:scale-95 transition-all shadow-lg">
            Get Started Free
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-3 text-slate-300 hover:text-white transition-colors"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-950 border-t border-slate-800 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium py-2 ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-slate-400"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-6 border-t border-slate-800 flex flex-col gap-4">
            <button className="w-full py-4 text-lg font-medium text-slate-300 border border-slate-700 rounded-2xl hover:border-slate-500 transition-colors">
              Login
            </button>
            <button className="w-full py-4 text-lg font-semibold bg-white text-slate-950 rounded-2xl hover:bg-slate-100 transition-all">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
