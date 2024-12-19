import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import React Icons

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white shadow-md ">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-0 py-8 flex items-center justify-between">
                {/* Left side - Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-gray-400">
                        ARYSANCE
                    </Link>
                </div>

                {/* Right side - Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link to="/" className="hover:text-gray-400">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-gray-400">
                        About
                    </Link>
                    <Link to="/services" className="hover:text-gray-400">
                        Services
                    </Link>
                    <Link to="/contact" className="hover:text-gray-400">
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button (using React Icons) */}
                <button
                    className="md:hidden text-2xl"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu - Hidden by default */}
            <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-800 text-white py-4 px-6 space-y-4`}>
                <Link to="/" className="block hover:text-gray-400">Home</Link>
                <Link to="/about" className="block hover:text-gray-400">About</Link>
                <Link to="/services" className="block hover:text-gray-400">Services</Link>
                <Link to="/contact" className="block hover:text-gray-400">Contact</Link>
            </div>
        </header>
    );
};

export default Header;
