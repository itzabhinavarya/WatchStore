import React from "react";
import { watchData } from "../data/Watch";
import Card from "../utils/Card";

const Watches = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                Explore Our Watches
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {watchData.map((watch) => (
                    <Card key={watch.id} {...watch} />
                ))}
            </div>
        </div>
    );
};

export default Watches;
