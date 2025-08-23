import React from "react";
import { FaUmbrellaBeach, FaCocktail, FaUtensils } from "react-icons/fa";
import Card from "./Card";

const amenityDetails = [
  {
    image:
      "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rooftop Lounge",
    description:
      "Relax and unwind at our rooftop lounge, offering stunning views of the city and a serene atmosphere.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1597290282695-edc43d0e7129?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyfGVufDB8fDB8fHww",
    title: "Bar",
    description:
      "Enjoy a wide selection of cocktails, fine wines, and spirits at our stylish and inviting bar.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluZSUyMGRpbmV8ZW58MHx8MHx8fDA%3D",
    title: "Fine Dine",
    description:
      "Savor exquisite culinary creations at our award-winning restaurant, crafted by top chefs.",
  },
];

const Amenities = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="w-full mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl mb-10 text-center text-gray-800 font-light tracking-wide">
          Our Amenities
        </h2>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {amenityDetails.map((amenity, index) => (
            <Card key={index} obj={amenity} index={index} />
          ))}
        </div>

        {/* Closing Paragraph */}
        <p className="text-gray-600 mt-12 text-sm font-light leading-relaxed text-center max-w-4xl mx-auto">
          Indulge in our world-class amenities designed to cater to your every
          need. Take a refreshing dip in our expansive swimming pool, savor
          exquisite culinary creations at our award-winning restaurants,
          rejuvenate your senses at our luxurious spa, or maintain your fitness
          regime at our state-of-the-art fitness center. At Luxury Stays, we
          ensure that every moment of your stay is filled with comfort and
          delight.
        </p>
      </div>
    </div>
  );
};

export default Amenities;
