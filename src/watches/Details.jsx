import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { watchData } from "../data/Watch";
import Card from "../utils/Card";

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the selected watch
    const watch = watchData.find((item) => item.id === parseInt(id));

    // State for quantity
    const [quantity, setQuantity] = useState(1);

    // Similar products (excluding the current product)
    const similarProducts = watchData.filter((item) => item.id !== parseInt(id));

    if (!watch) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-semibold text-red-500">
                    Watch not found!
                </h1>
                <button
                    onClick={() => navigate(-1)}
                    className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
            {/* Product Details */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-6 rounded-lg shadow-lg">
                <img
                    src={watch.image}
                    alt={watch.title}
                    className="w-full rounded-lg object-cover"
                />
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-gray-800">{watch.title}</h1>
                    <p className="text-gray-600 text-lg">{watch.description}</p>
                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-blue-600">
                            ${watch.price}
                        </span>
                        <div className="flex items-center text-yellow-500">
                            {Array(Math.floor(watch.rating))
                                .fill(0)
                                .map((_, index) => (
                                    <span key={index}>★</span>
                                ))}
                            {watch.rating % 1 !== 0 && <span>☆</span>}
                        </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {watch.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded-lg">
                            <button
                                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-lg"
                            >
                                -
                            </button>
                            <span className="px-4 py-2">{quantity}</span>
                            <button
                                onClick={() => setQuantity((prev) => prev + 1)}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-lg"
                            >
                                +
                            </button>
                        </div>
                        <button
                            disabled={!watch.available}
                            className={`px-6 py-2 text-white rounded-lg ${watch.available
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-gray-400 cursor-not-allowed"
                                }`}
                        >
                            {watch.available ? <Link to='/payment'>Buy Now</Link> : "Out of Stock"}

                        </button>
                    </div>
                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                    >
                        Back to List
                    </button>
                </div>
            </div>

            {/* Similar Products */}
            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-6">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {similarProducts.map((product) => (
                    <Card key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default Details;

