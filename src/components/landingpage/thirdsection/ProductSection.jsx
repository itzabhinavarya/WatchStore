import React from "react";

// Sample JSON data for products
const products = [
  {
    id: 1,
    name: "Titan X1",
    description:
      "A classic design that never goes out of style. Perfect for formal and casual occasions.",
    image:
      "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw11e7d01c/images/Titan/Catalog/1825SL15_2.jpg?sw=600&sh=600", // Replace with actual image URL
    reverse: false,
  },
  {
    id: 2,
    name: "Fossil Gen 5",
    description:
      "A smart watch with all the features you need to stay connected and organized.",
    image: "https://m.media-amazon.com/images/I/51VuTEaLL5L._AC_UY1000_.jpg", // Replace with actual image URL
    reverse: true,
  },
  {
    id: 3,
    name: "Casio Edifice",
    description:
      "Sporty and stylish, the Casio Edifice is the perfect watch for the modern man.",
    image:
      "https://media.casioindiashop.com/assets/products-images/big-image/ED369.webp?scale.height=400", // Replace with actual image URL
    reverse: false,
  },
  {
    id: 4,
    name: "Rolex Submariner",
    description:
      "A luxury dive watch known for its exceptional quality and timeless appeal.",
    image:
      "https://timeavenue.com/wp-content/uploads/2025/05/m126619lb-0003-1.webp", // Replace with actual image URL
    reverse: true,
  },
];

const ProductSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex flex-col md:flex-row ${
              product.reverse ? "md:flex-row-reverse" : ""
            } items-center mb-16`}
          >
            {/* Left Side - Image */}
            <div className="md:w-1/4 mb-8 md:mb-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-lg shadow-lg object-cover transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Right Side - Text */}
            <div className="md:w-3/4 md:pl-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                {product.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
