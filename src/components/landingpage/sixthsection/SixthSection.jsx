import React from 'react';
import img27 from "../../../assets/watches/img27.jpg";
import img23 from "../../../assets/watches/img23.jpg";
import img18 from "../../../assets/watches/img18.jpg";
import img8 from "../../../assets/watches/img8.jpg";
import img5 from "../../../assets/watches/img5.jpg";
import img14 from "../../../assets/watches/img14.jpg";
import Card from '../../../utils/Card';

// Sample JSON data for featured watches
const featuredWatches = [
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
  }
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
            <Card key={watch.id} {...watch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
