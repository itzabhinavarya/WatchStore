import React from 'react';

const Services = () => {
    return (
        <div className="bg-gray-50 py-16 md:py-24 px-6 md:px-16">

            {/* Services Heading */}
            <section className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    At WatchStore, we offer a wide range of services designed to enhance your experience.
                    From personalized watch customization to fast shipping and reliable repairs, we’ve got you covered.
                </p>
            </section>

            {/* Services Cards Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Watch Customization */}
                <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <img
                        src="https://cdn5.vectorstock.com/i/1000x1000/55/84/customization-icon-from-business-bicolor-set-vector-5415584.jpg"
                        alt="Watch Customization"
                        className="w-16 h-16 mb-4"
                    />
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Watch Customization</h4>
                    <p className="text-gray-600">
                        Make your watch truly yours with our customization services. Choose from various straps, dials, and more!
                    </p>
                </div>

                {/* Fast & Secure Shipping */}
                <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <img
                        src="https://www.freeiconspng.com/uploads/secure-icon-png-30.png"
                        alt="Fast Shipping"
                        className="w-16 h-16 mb-4"
                    />
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Fast & Secure Shipping</h4>
                    <p className="text-gray-600">
                        We offer fast, reliable, and secure shipping worldwide, ensuring your watch arrives safely and on time.
                    </p>
                </div>

                {/* Easy Returns & Exchanges */}
                <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/9226/9226484.png"
                        alt="Easy Returns"
                        className="w-16 h-16 mb-4"
                    />
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Easy Returns & Exchanges</h4>
                    <p className="text-gray-600">
                        Changed your mind? No worries! Our hassle-free returns and exchange process ensures you're satisfied with your purchase.
                    </p>
                </div>

                {/* Watch Repair & Maintenance */}
                <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/9759/9759793.png"
                        alt="Watch Repair"
                        className="w-16 h-16 mb-4"
                    />
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Watch Repair & Maintenance</h4>
                    <p className="text-gray-600">
                        Our skilled technicians provide expert repair and maintenance services to keep your watch in top condition for years to come.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
