import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, image, title, description, price, rating, tags, available }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-52 object-cover" />
                {!available && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full uppercase font-semibold">
                        Out of Stock
                    </div>
                )}
            </div>
            <div className="p-2">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
                <p className="text-gray-600 text-xs mb-2 line-clamp-3">{description}</p>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-blue-600">${price}</span>
                    <div className="flex items-center text-yellow-500">
                        {Array(Math.floor(rating))
                            .fill(0)
                            .map((_, index) => (
                                <span key={index}>★</span>
                            ))}
                        {rating % 1 !== 0 && <span>☆</span>}
                    </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-800 p-1 text-[10px] rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="p-2 w-full pb-4">
                <Link to={`/watches/details/${id}`}>
                    <button className="p-3 bg-blue-600 w-full text-white rounded-full text-xs hover:bg-blue-500 transition duration-300">
                        Show Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;
