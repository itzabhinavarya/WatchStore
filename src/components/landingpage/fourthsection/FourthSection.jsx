import React from 'react';
import img27 from '../../../assets/watches/img27.jpg'
import img23 from '../../../assets/watches/img23.jpg'
import img18 from '../../../assets/watches/img18.jpg'
import img8 from '../../../assets/watches/img8.jpg'
import img5 from '../../../assets/watches/img5.jpg'
import img14 from '../../../assets/watches/img14.jpg'

// Sample JSON data for watches
const products = [
    {
        id: 1,
        name: "Titan X1",
        description: "A classic design that never goes out of style. Perfect for formal and casual occasions.",
        image: img27, // Replace with actual image link
    },
    {
        id: 2,
        name: "Fossil Gen 5",
        description: "A smart watch with all the features you need to stay connected and organized.",
        image: img23, // Replace with actual image link
    },
    {
        id: 3,
        name: "Casio Edifice",
        description: "Sporty and stylish, the Casio Edifice is the perfect watch for the modern man.",
        image: img18, // Replace with actual image link
    },
    {
        id: 4,
        name: "Rolex Submariner",
        description: "A luxury dive watch known for its exceptional quality and timeless appeal.",
        image: img8, // Replace with actual image link
    },
    {
        id: 5,
        name: "Seiko 5",
        description: "A budget-friendly automatic watch with a robust design and reliable performance.",
        image: img5, // Replace with actual image link
    },
    {
        id: 6,
        name: "Timex Weekender",
        description: "A simple yet stylish watch that’s great for everyday wear.",
        image: img14, // Replace with actual image link
    },
];

const FourthSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
                    Our Watches Collection
                </h2>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >
                            {/* Product Image */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />

                            {/* Product Info */}
                            <div className="px-3 py-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h3>
                                <p className="text-gray-600 mb-1">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FourthSection;
