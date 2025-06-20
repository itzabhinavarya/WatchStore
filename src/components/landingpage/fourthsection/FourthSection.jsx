import React from "react";
import Card from "../../../utils/Card";

// Updated JSON data with pricing and tags
const products = [
  {
    id: 1,
    title: "Titan X1",
    description:
      "A classic design that never goes out of style. Perfect for formal and casual occasions.",
    image:
      "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw11e7d01c/images/Titan/Catalog/1825SL15_2.jpg?sw=600&sh=600", // Replace with actual image URL

    price: 199.99,
    rating: 4.5,
    tags: ["Classic", "Formal", "Stylish"],
    available: true,
  },
  {
    id: 2,
    title: "Fossil Gen 5",
    description:
      "A smart watch with all the features you need to stay connected and organized.",
    image: "https://m.media-amazon.com/images/I/51VuTEaLL5L._AC_UY1000_.jpg", // Replace with actual image URL

    price: 349.99,
    rating: 4.8,
    tags: ["Smartwatch", "Modern", "Functional"],
    available: true,
  },
  {
    id: 3,
    title: "Casio Edifice",
    description:
      "Sporty and stylish, the Casio Edifice is the perfect watch for the modern man.",
    image:
      "https://media.casioindiashop.com/assets/products-images/big-image/ED369.webp?scale.height=400", // Replace with actual image URL

    price: 129.99,
    rating: 4.2,
    tags: ["Sporty", "Stylish", "Casual"],
    available: true,
  },
  {
    id: 4,
    title: "Rolex Submariner",
    description:
      "A luxury dive watch known for its exceptional quality and timeless appeal.",
    image:
      "https://timeavenue.com/wp-content/uploads/2025/05/m126619lb-0003-1.webp", // Replace with actual image URL

    price: 10999.99,
    rating: 5.0,
    tags: ["Luxury", "Premium", "Dive"],
    available: true,
  },
  {
    id: 5,
    title: "Seiko 5",
    description:
      "A budget-friendly automatic watch with a robust design and reliable performance.",
    image: "https://www.seikowatches.com/in-en/-/media/Images/Product--Image/All/Seiko/2023/02/02/11/42/SPB381J1/SPB381J1.png?mh=1200&mw=1200",
    price: 79.99,
    rating: 3.8,
    tags: ["Budget", "Automatic", "Reliable"],
    available: true,
  },
  {
    id: 6,
    title: "Timex Weekender",
    description: "A simple yet stylish watch that’s great for everyday wear.",
    image: "https://m.media-amazon.com/images/I/71xnEBboGBL.jpg",
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
