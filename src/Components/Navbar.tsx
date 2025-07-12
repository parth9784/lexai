import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Scale } from 'lucide-react';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ["Home", "Features", "Docs", "Contact"];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-sm sticky top-0 z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo + Brand */}
                <div className="flex items-center space-x-2 cursor-pointer">
                    <Scale size={25} className="text-blue-600" />
                    <span className="text-lg md:text-xl text-blue-700 manrope-600">LexAi</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 items-center text-gray-700 font-medium">
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className="hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                    <li>
                        <button
                            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                            aria-label="Try Demo"
                        >
                            Try Demo
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? (
                            <FiX className="text-2xl text-blue-700" />
                        ) : (
                            <FiMenu className="text-2xl text-blue-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <ul className="md:hidden mt-4 space-y-4 text-gray-700 font-medium px-2">
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className="hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                    <li>
                        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                            Try Demo
                        </button>
                    </li>
                </ul>
            )}
        </motion.nav>
    );
}
