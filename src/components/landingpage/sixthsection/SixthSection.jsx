import React from 'react';

// Sample JSON data for featured watches
const featuredWatches = [
  {
    id: 1,
    name: "Luxury Watch 1",
    description: "A stylish luxury watch with stainless steel band.",
    price: "$199",
    image: "https://via.placeholder.com/300x200?text=Watch+1",
  },
  {
    id: 2,
    name: "Sport Watch 2",
    description: "A durable sports watch for active individuals.",
    price: "$129",
    image: "https://via.placeholder.com/300x200?text=Watch+2",
  },
  {
    id: 3,
    name: "Classic Watch 3",
    description: "A timeless classic with leather straps.",
    price: "$159",
    image: "https://via.placeholder.com/300x200?text=Watch+3",
  },
  {
    id: 4,
    name: "Modern Watch 4",
    description: "A modern design with a sleek look and smart features.",
    price: "$250",
    image: "https://via.placeholder.com/300x200?text=Watch+4",
  },
];

const SixthSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Featured Watches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredWatches.map((watch) => (
            <div
              key={watch.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={watch.image}
                alt={watch.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{watch.name}</h3>
                <p className="text-gray-600 mb-4">{watch.description}</p>
                <span className="text-lg font-bold text-gray-800">{watch.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
