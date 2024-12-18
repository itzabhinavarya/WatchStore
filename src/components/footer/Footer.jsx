import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router DOM
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Watch Store</h3>
                        <p className="text-gray-400 mb-4">
                            Your one-stop shop for the best luxury and modern watches.
                        </p>
                        <p className="text-gray-400">© 2024 Watch Store. All rights reserved.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-gray-200 transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-gray-200 transition">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-gray-200 transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-gray-200 transition">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="/" className="text-gray-400 hover:text-gray-200 transition">
                                <FaFacebook size={24} />
                            </a>
                            <a href="/" className="text-gray-400 hover:text-gray-200 transition">
                                <FaTwitter size={24} />
                            </a>
                            <a href="/" className="text-gray-400 hover:text-gray-200 transition">
                                <FaInstagram size={24} />
                            </a>
                            <a href="/" className="text-gray-400 hover:text-gray-200 transition">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
