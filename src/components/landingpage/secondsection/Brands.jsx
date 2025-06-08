import React from "react";

// Sample JSON data for brands
const brands = [
  {
    id: 1,
    name: "Titan",
    logo: "https://brandlogos.net/wp-content/uploads/2013/05/titan-vector-logo.png", // Replace with actual brand logo URL
  },
  {
    id: 2,
    name: "Rolex",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo_da_Rolex.png/1200px-Logo_da_Rolex.png", // Replace with actual brand logo URL
  },
  {
    id: 3,
    name: "Casio",
    logo: "https://1000logos.net/wp-content/uploads/2017/12/Casio-Logo.png", // Replace with actual brand logo URL
  },
  {
    id: 4,
    name: "Fossil",
    logo: "https://download.logo.wine/logo/Fossil_Group/Fossil_Group-Logo.wine.png", // Replace with actual brand logo URL
  },
  {
    id: 5,
    name: "Seiko",
    logo: "https://1000logos.net/wp-content/uploads/2018/10/Seiko-Logo.png", // Replace with actual brand logo URL
  },
  {
    id: 6,
    name: "Patek Philippe",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Patek_Philippe_SA_logo.svg/1200px-Patek_Philippe_SA_logo.svg.png", // Replace with actual brand logo URL
  },
];

const Brands = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-12">
          Trusted by Leading Brands
        </h2>

        {/* Brand Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <div key={brand.id} className="flex justify-center items-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-24 h-24 object-contain transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
