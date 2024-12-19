import React from "react";
import img27 from "../../../assets/watches/img27.jpg";
import img23 from "../../../assets/watches/img23.jpg";
import img18 from "../../../assets/watches/img18.jpg";
import img8 from "../../../assets/watches/img8.jpg";
import img5 from "../../../assets/watches/img5.jpg";
import img14 from "../../../assets/watches/img14.jpg";
import Card from "../../../utils/Card";

// Updated JSON data with pricing and tags
const products = [
    {
        id: 1,
        title: "Titan X1",
        description: "A classic design that never goes out of style. Perfect for formal and casual occasions.",
        image: img27,
        price: 199.99,
        rating: 4.5,
        tags: ["Classic", "Formal", "Stylish"],
        available: true,
    },
    {
        id: 2,
        title: "Fossil Gen 5",
        description: "A smart watch with all the features you need to stay connected and organized.",
        image: img23,
        price: 349.99,
        rating: 4.8,
        tags: ["Smartwatch", "Modern", "Functional"],
        available: true,
    },
    {
        id: 3,
        title: "Casio Edifice",
        description: "Sporty and stylish, the Casio Edifice is the perfect watch for the modern man.",
        image: img18,
        price: 129.99,
        rating: 4.2,
        tags: ["Sporty", "Stylish", "Casual"],
        available: true,
    },
    {
        id: 4,
        title: "Rolex Submariner",
        description: "A luxury dive watch known for its exceptional quality and timeless appeal.",
        image: img8,
        price: 10999.99,
        rating: 5.0,
        tags: ["Luxury", "Premium", "Dive"],
        available: true,
    },
    {
        id: 5,
        title: "Seiko 5",
        description: "A budget-friendly automatic watch with a robust design and reliable performance.",
        image: img5,
        price: 79.99,
        rating: 3.8,
        tags: ["Budget", "Automatic", "Reliable"],
        available: true,
    },
    {
        id: 6,
        title: "Timex Weekender",
        description: "A simple yet stylish watch that’s great for everyday wear.",
        image: img14,
        price: 49.99,
        rating: 4.1,
        tags: ["Simple", "Stylish", "Everyday"],
        available: true,
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
                        <Card key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FourthSection;
