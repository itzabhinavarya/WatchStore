import React from "react";

// Sample JSON data for brands
const brands = [
    {
        id: 1,
        name: "Titan",
        logo: "https://via.placeholder.com/150?text=Titan", // Replace with actual brand logo URL
    },
    {
        id: 2,
        name: "Rolex",
        logo: "https://via.placeholder.com/150?text=Rolex", // Replace with actual brand logo URL
    },
    {
        id: 3,
        name: "Casio",
        logo: "https://via.placeholder.com/150?text=Casio", // Replace with actual brand logo URL
    },
    {
        id: 4,
        name: "Fossil",
        logo: "https://via.placeholder.com/150?text=Fossil", // Replace with actual brand logo URL
    },
    {
        id: 5,
        name: "Seiko",
        logo: "https://via.placeholder.com/150?text=Seiko", // Replace with actual brand logo URL
    },
    {
        id: 6,
        name: "Patek Philippe",
        logo: "https://via.placeholder.com/150?text=Patek+Philippe", // Replace with actual brand logo URL
    },
];

const Brands = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-12">
                    Trusted by Leading Brands
                </h2>

                {/* Brand Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {brands.map((brand) => (
                        <div key={brand.id} className="flex justify-center items-center">
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="w-24 h-24 object-contain transform transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
