import React from "react";
import { FaUmbrellaBeach, FaCocktail, FaUtensils } from "react-icons/fa";
import Card from "./Card";

const serviceDetails = [
  {
    image: "https://plus.unsplash.com/premium_photo-1683134374806-9ea735de4b37?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBzdGFmZnxlbnwwfHwwfHx8MA%3D%3D",
    title: "24/7 Concierge",
    description:
      "Our professional concierge team is available around the clock to assist with reservations, transportation, and special requests.",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1679430887921-31e1047e5b55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhfGVufDB8fDB8fHww",
    title: "Luxury Spa",
    description:
      "Rejuvenate your senses with our range of spa treatments, massages, and wellness therapies in a tranquil environment.",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1678304224614-9a5b4f73109a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNla2VlcGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Daily Housekeeping",
    description:
      "Enjoy spotless rooms and fresh linens every day with our meticulous housekeeping service.",
  },
  {
    image: "https://images.unsplash.com/photo-1651313947982-59d4049e5834?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D",
    title: "Event Planning",
    description:
      "Host unforgettable events with our dedicated team taking care of catering, décor, and logistics.",
  },
  {
    image: "https://images.unsplash.com/photo-1606659894125-40824878b6ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByaXZhdGUlMjBkaW5pbmd8ZW58MHx8MHx8fDA%3D",
    title: "Private Dining",
    description:
      "Indulge in personalized dining experiences with curated menus served in exclusive settings.",
  },
];

const Service = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-10 text-center text-gray-800">
          Our Exceptional Services
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service, index) => (
            <Card key={index} obj={service} index={index} />
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

export default Service;
