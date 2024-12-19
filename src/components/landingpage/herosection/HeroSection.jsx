import React from "react";
import LandingPageVideo from '../../../assets/video/Project 2.mp4'
import img8 from '../../../assets/watches/img8.jpg'
// Sample JSON data for dynamic content
const heroContent = {
    title: "Luxury Watches, Timeless Style",
    description: "Explore India's finest collection of watches. Elevate your style with precision and elegance.",
    slogan: "Crafted for the Moment",
    buttonText: "Shop Now",
    videoUrl: LandingPageVideo, // Replace with your own video
    imageUrl: img8, // Replace with your own image
};

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
                autoPlay
                loop
                muted
            >
                <source src={heroContent.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 lg:px-32 h-full text-center lg:text-left">
                <div className="text-white max-w-lg">
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                        {heroContent.title}
                    </h1>
                    <p className="text-lg sm:text-xl mb-6">{heroContent.description}</p>
                    <p className="text-xl italic text-yellow-400 mb-6">{heroContent.slogan}</p>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-500 transition duration-300">
                        {heroContent.buttonText}
                    </button>
                </div>

                <div className="hidden lg:block lg:w-1/4 mt-8 lg:mt-0">
                    <img
                        src={heroContent.imageUrl}
                        alt="Luxury Watch"
                        className="rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
