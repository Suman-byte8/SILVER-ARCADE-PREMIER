import React, { useState } from "react";
import FullLogo from "../../FullLogo";
import DescLayout from "./DescLayout";
// Local images for "Rooms & Suites"
import img1 from "../../../assets/DistinctImages/Rooms&Suites/room_1.webp";
import img2 from "../../../assets/DistinctImages/Rooms&Suites/room_2.webp";
import img3 from "../../../assets/DistinctImages/Rooms&Suites/room_3.webp";
import img4 from "../../../assets/DistinctImages/Rooms&Suites/room_4.webp";

// local images for "Dining"
import dinImg1 from "../../../assets/DistinctImages/Dining/dining_1.webp";
import dinImg2 from "../../../assets/DistinctImages/Dining/dining_2.webp";
import dinImg3 from "../../../assets/DistinctImages/Dining/dining_3.webp";
import dinImg4 from "../../../assets/DistinctImages/Dining/dining_4.webp";
import dinImg5 from "../../../assets/DistinctImages/Dining/dining_5.webp";
import dinImg6 from "../../../assets/DistinctImages/Dining/dining_6.webp";
import dinImg7 from "../../../assets/DistinctImages/Dining/dining_7.webp";

// local images for "Banquets & Events"
import banImg1 from "../../../assets/DistinctImages/Banquets/banquet_1.webp";
import banImg2 from "../../../assets/DistinctImages/Banquets/banquet_2.webp";
import banImg3 from "../../../assets/DistinctImages/Banquets/banquet_3.webp";
import banImg4 from "../../../assets/DistinctImages/Banquets/banquet_4.webp";
import banImg5 from "../../../assets/DistinctImages/Banquets/banquet_5.webp";
import banImg6 from "../../../assets/DistinctImages/Banquets/banquet_6.webp";
import banImg7 from "../../../assets/DistinctImages/Banquets/banquet_7.webp";
import banImg8 from "../../../assets/DistinctImages/Banquets/banquet_8.webp";

// local images for "Bar & Lounge"
import barImg1 from "../../../assets/DistinctImages/Bar/bar_1.webp";

import { optimizeImage } from "../../../utils/imageOptimizer"; // Add this import

const Distinctive = () => {
  const links = [
    { name: "Rooms & Suites" },
    { name: "Dining" },
    { name: "Banquets & Events" },
    { name: "Bar & Lounge" },

  ];

  const linksDescription = [
    {
      name: "Rooms & Suites",
      desc: "At Silver Arcade Premier, the Rooms & Suites are crafted to blend modern comfort with elegant charm. Choose from Deluxe, Executive Deluxe, or Suite categories, each offering air-conditioning, flat-screen TV, minibar, tea/coffee maker, and high-speed Wi-Fi. Guests rave about well-appointed rooms with plush linens and thoughtful details like iron boards and complimentary toiletries—perfect for both business travelers and tourists seeking a serene retreat in bustling Malda. Every stay reflects a commitment to refined hospitality and a restful experience.",
      img: [
        {
          original: img1,
          compressed: optimizeImage(img1, { quality: 80, maxWidth: 1200 }),
        },
        {
          original: img2,
          compressed: optimizeImage(img2, { quality: 80, maxWidth: 1200 }),
        },
        {
          original: img3,
          compressed: optimizeImage(img3, { quality: 80, maxWidth: 1200 }),
        },
        {
          original: img4,
          compressed: optimizeImage(img4, { quality: 80, maxWidth: 1200 }),
        },
      ],
    },
    {
      name: "Dining",
      desc: "Silver Arcade Premier’s Dining options serve up a culinary odyssey that’s hard to forget. Dive into regional richness at NH-16 with authentic Bengali and South Indian dishes, or enjoy global flavors and lively open kitchens at Masala Zone. The setting is contemporary yet welcoming, and guests consistently compliment the flavorful spreads and warm service. Whether it's waking up with breakfast or feasting at lunch or dinner, the dining scene complements the hotel’s boutique class with flair and efficiency.",
      img: [
        {
          original: dinImg1,
          compressed: optimizeImage(dinImg1, { quality: 80, maxWidth: 1200 }),
        },
        {
          original: dinImg2,
          compressed: optimizeImage(dinImg2, { quality: 80, maxWidth: 1200 }),
        },
        {
          original: dinImg3,
          compressed: optimizeImage(dinImg3, { quality: 80, maxWidth: 1200 }),
        },
        {
          original: dinImg4,
          compressed: optimizeImage(dinImg4, { quality: 80, maxWidth: 1200 }),
        }, 
        {
          original: dinImg5,
          compressed: optimizeImage(dinImg5, { quality: 80, maxWidth: 1200 }),
        }, 
        {
          original: dinImg6,
          compressed: optimizeImage(dinImg4, { quality: 80, maxWidth: 1200 }),
        }, 
        {
          original: dinImg7,
          compressed: optimizeImage(dinImg7, { quality: 80, maxWidth: 1200 }),
        },
      ],
    },
    {
      name: "Banquets & Events",
      desc: "Looking to host in style? Silver Arcade Premier’s Banquets & Events spaces offer a classy backdrop for your weddings, meetings, or social events. Equipped with modern audio-visual tech, flexible seating layouts, and attentive staff, every gathering—whether business-oriented or celebratory—feels seamless and sophisticated. Guests love how the hotel effortlessly balances elegance and functionality, making events feel grand without being ostentatious, and leaving lasting impressions.",
      img: [
        {
          original: banImg1,
          compressed: optimizeImage(banImg1, { quality: 80, maxWidth: 1200 }),
        },
        {
          original: banImg2,
          compressed: optimizeImage(banImg2, { quality: 80, maxWidth: 1200 }),
        },
        {
          original: banImg3,
          compressed: optimizeImage(banImg3, { quality: 80, maxWidth: 1200 }),
        },
        {
          original: banImg4,
          compressed: optimizeImage(banImg4, { quality: 80, maxWidth: 1200 }),
        },
        {
          original: banImg5,
          compressed: optimizeImage(banImg1, { quality: 80, maxWidth: 1200 }),
        },
        {
          original: banImg6,
          compressed: optimizeImage(banImg6, { quality: 80, maxWidth: 1200 }),
        },
        {
          original: banImg7,
          compressed: optimizeImage(banImg7, { quality: 80, maxWidth: 1200 }),
        },
        {
          original: banImg8,
          compressed: optimizeImage(banImg8, { quality: 80, maxWidth: 1200 }),
        },
      ],
    },
    {
      name: "Bar & Lounge",
      desc: "The Bar & Lounge, known as Cocktails & Dreams, hits the perfect chill-out note. Sip on curated cocktails or mocktails with acoustic tunes floating in the air—ambience is low-key yet luxe. It’s where guests unwind after a busy day exploring Malda or closing meetings. The bar’s vibe strikes a thoughtful balance: relaxed, elegant, and inviting—making it an ideal spot to decompress in boutique comfort.",
      img: [
        {
          original: barImg1,
          compressed: optimizeImage(barImg1, { quality: 80, maxWidth: 1200 }),
        },
      ],
    },

  ];

  const [selectedLink, setSelectedLink] = useState(linksDescription[0]);

  const handleLinkClick = (linkName) => {
    const selected = linksDescription.find((desc) => desc.name === linkName);
    setSelectedLink(selected);
  };

  return (
    <div className="w-full mt-[10ch] md:mt-0 py-8 sm:py-12 pb-16 sm:pb-20 m-auto flex flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* logo */}
      <FullLogo isFlex={true} />

      {/* desc*/}
      <div className="w-full sm:w-[90%] md:w-[80%] text-center">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed ">
          Experience the warmth of Bengal’s tradition with world-class
          hospitality at Silver Arcade Premier, crafted for leisure and business
          alike.
        </p>
      </div>

      {/* title */}
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4">
        <h1 className="font-helvetica-neue font-light text-gray-800">
          Distinctive, distinguished brands
        </h1>
      </div>

      {/* links */}
      <div className="_links flex flex-wrap items-center justify-center  sm:gap-6 md:gap-8 text-sm sm:text-base lg:text-lg px-4">
        {links.map((link, index) => (
          <a
            key={index}
            className={`px-2 sm:px-4 py-2 cursor-pointer transition-all duration-300 ${
              selectedLink.name === link.name
                ? "border-b-2 border-gray-500 font-semibold"
                : "hover:border-b-2 border-gray-300"
            }`}
            onClick={() => handleLinkClick(link.name)}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* description layout */}
      <div className="w-full">
        <DescLayout desc={selectedLink} />
      </div>
    </div>
  );
};

export default Distinctive;
