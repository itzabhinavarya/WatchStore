import React from "react";
import { FaStar } from "react-icons/fa"; // For star ratings

// Sample JSON data for customer reviews with Indian names
const reviews = [
    {
        id: 1,
        name: "Arjun Sharma",
        review: "This watch is exceptional! The design is sleek, and it's perfect for all occasions.",
        rating: 5,
    },
    {
        id: 2,
        name: "Priya Patel",
        review: "I wear it every day. It's stylish, comfortable, and the quality is top-notch.",
        rating: 4,
    },
    {
        id: 3,
        name: "Amit Kumar",
        review: "This is my first luxury watch, and I love it! The build and the look are simply amazing.",
        rating: 5,
    },
    {
        id: 4,
        name: "Ananya Verma",
        review: "Absolutely thrilled with my purchase! The customer service was great too, and the watch is stunning.",
        rating: 5,
    },
    {
        id: 5,
        name: "Rajesh Gupta",
        review: "Highly recommended! The watch is beautiful, and the delivery was on time.",
        rating: 5,
    },
    {
        id: 6,
        name: "Neha Iyer",
        review: "Best shopping experience! The watch looks even better in person.",
        rating: 4,
    },
];

const SeventhSection = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
                    Customer Reviews
                </h2>

                {/* Grid Layout for Reviews */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <div className="flex items-center mb-4">
                                {[...Array(review.rating)].map((_, index) => (
                                    <FaStar key={index} className="text-yellow-500 mr-1" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">{review.review}</p>
                            <h4 className="text-lg font-semibold text-gray-800">{review.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeventhSection;
