import React from "react";

const FifthSection = () => {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="object-cover w-full h-full opacity-50"
          autoPlay
          loop
          muted
        >
          <source
            src="https://cdn.pixabay.com/video/2022/01/13/104283-672599938_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Faded Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Promotional Banner Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 sm:px-8">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Big Discount! Don't Miss Out
          </h2>
          <p className="text-lg mb-6">
            Grab huge discounts on our premium watches. Limited time offer.
          </p>
          <a
            href="/shop"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-500 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
