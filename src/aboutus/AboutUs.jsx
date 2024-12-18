import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-50 py-16 md:py-24 px-6 md:px-16">

            {/* Introduction Section */}
            <section className="text-center mb-16 md:mb-24">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">About WatchStore</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    WatchStore is your ultimate destination for premium timepieces. We offer an exclusive
                    collection of watches for every taste, from classic to contemporary. Whether you're
                    buying your first watch or adding to your collection, we are here to provide you with
                    only the best.
                </p>
                <div className="relative">
                    <img
                        src="https://via.placeholder.com/1500x800?text=Watch+Store+Image"
                        alt="Watch Collection"
                        className="w-full h-96 object-cover rounded-lg shadow-xl"
                    />
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="grid md:grid-cols-2 gap-12 mb-16 md:mb-24">
                <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                    <p className="text-lg text-gray-600">
                        At WatchStore, we are committed to delivering exceptional watches that cater to your
                        unique style and needs. We strive to offer the best customer experience, ensuring
                        your satisfaction with every purchase.
                    </p>
                    <p className="text-lg text-gray-600 mt-4">
                        Our mission is to bring together luxury and affordability, allowing you to enjoy
                        quality craftsmanship and design at a price that suits your budget. We work closely
                        with top manufacturers to bring you the latest trends and timeless classics.
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <img
                        src="https://via.placeholder.com/800x600?text=Our+Mission+Image"
                        alt="Mission"
                        className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-blue-50 py-16 md:py-24">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose WatchStore?</h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover the reasons why WatchStore is the best place to buy your next watch. From
                        our curated collections to our commitment to quality, we aim to exceed your
                        expectations.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 p-6">
                    <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <img
                            src="https://via.placeholder.com/80?text=Quality"
                            alt="Quality Craftsmanship"
                            className="w-16 h-16 mb-4"
                        />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Quality Craftsmanship</h4>
                        <p className="text-gray-600">
                            Each watch is crafted with precision, using premium materials to ensure longevity and style.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <img
                            src="https://via.placeholder.com/80?text=Authentic"
                            alt="Authenticity Guaranteed"
                            className="w-16 h-16 mb-4"
                        />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Authenticity Guaranteed</h4>
                        <p className="text-gray-600">
                            We only sell genuine watches from trusted brands. Your purchase is backed by authenticity.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <img
                            src="https://via.placeholder.com/80?text=Service"
                            alt="Customer Service"
                            className="w-16 h-16 mb-4"
                        />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Customer Service</h4>
                        <p className="text-gray-600">
                            Our dedicated customer support team is always available to assist you, ensuring a seamless shopping experience.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
