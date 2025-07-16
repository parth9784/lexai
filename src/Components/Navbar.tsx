import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Scale, ArrowRight } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const menuItems = [
  { label: "Features", type: "scroll", target: "features" },
  { label: "About", type: "route", target: "/about" },
  { label: "FAQ", type: "route", target: "/faq" },
  { label: "Contact", type: "scroll", target: "contact" },
  { label: "Pricing", type: "route", target: "/price" },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Only enable scroll on homepage
  const isHome = location.pathname === "/";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm sticky top-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <Scale size={27} className="text-blue-900" />
          <span className="text-lg md:text-2xl text-blue-900 manrope-600">LexAi</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.label} className="group relative cursor-pointer overflow-hidden">
              {item.type === "scroll" && isHome ? (
                <ScrollLink
                  to={item.target}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-gray-700 group-hover:text-[#C08C21] transition duration-200 cursor-pointer"
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <Link
                  to={item.target}
                  className="text-gray-700 group-hover:text-[#C08C21] transition duration-200"
                >
                  {item.label}
                </Link>
              )}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#7c5912] transition-all duration-300 ease-out group-hover:w-full"></span>
            </li>
          ))}

          {/* Get Started Button */}
          <li>
            <Link
              to="/login"
              className="ml-4 flex items-center gap-2 border border-[#C08D20] text-black px-3 py-2 rounded-lg hover:bg-[#C08D20] hover:text-white transition duration-200"
              aria-label="Try Demo"
            >
              <span>Get Started</span> <ArrowRight size={18} />
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? (
              <FiX className="text-2xl text-[#C08C21]" />
            ) : (
              <FiMenu className="text-2xl text-[#C08C21]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-gray-700 font-medium px-2">
          {menuItems.map((item) => (
            <li key={item.label} className="group relative cursor-pointer overflow-hidden">
              {item.type === "scroll" && isHome ? (
                <ScrollLink
                  to={item.target}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 group-hover:text-[#C08C21] transition duration-200"
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <Link
                  to={item.target}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 group-hover:text-[#C08C21] transition duration-200"
                >
                  {item.label}
                </Link>
              )}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C08C21] transition-all duration-300 ease-out group-hover:w-full"></span>
            </li>
          ))}

          {/* Mobile Get Started Button */}
          <li>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-[#C08C21] text-white text-center px-4 py-2 rounded-lg transition duration-200"
            >
              Get Started
            </Link>
          </li>
        </ul>
      )}

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-[3px] bg-[#d1a23d] fixed top-[72px] left-0 right-0 z-40"
      />
    </motion.nav>
  );
}
