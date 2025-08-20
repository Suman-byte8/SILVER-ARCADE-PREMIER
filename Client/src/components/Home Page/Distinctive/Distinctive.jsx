import React, { useState } from "react";
import FullLogo from "../../FullLogo";
import DescLayout from "./DescLayout";

const Distinctive = () => {
  const links = [
    { name: "ITC Hotels" },
    { name: "Mementos" },
    { name: "Welcome Hotel" },
    { name: "Story" },
    { name: "Fortune Hotels" },
    { name: "Welcome Heritage Hotels" },
  ];

  const linksDescription = [
    {
      name: "ITC Hotels",
      desc: "ITC Hotels is a luxury hotel chain in India, known for its opulent accommodations and exceptional service.",
      img: [
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/itc-maurya.png",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/itc-grand-goa.png",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/itc-gardenia.png",
      ],
    },
    {
      name: "Mementos",
      desc: "Mementos is a collection of boutique hotels that offer unique experiences and personalized service.",
      img: [
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/memento-2.jpg",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/memento-1.jpg",
      ],
    },
    {
      name: "Welcome Hotel",
      desc: "Welcome Hotels are known for their warm hospitality and comfortable stays across various locations.",
      img: [
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/welcomhotel-pin-n-peak.png",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/welcomhotel-amritsar.png",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/welcomhotel-pin-n-peak.png",
      ],
    },
    {
      name: "Story",
      desc: "Story Hotels provide a narrative-driven experience, blending local culture with modern luxury.",
      img: [
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/storii-ii.jpg",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/storii-i.jpg",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/storii-iii.jpg",
      ],
    },
    {
      name: "Fortune Hotels",
      desc: "Fortune Hotels offer affordable luxury with a focus on comfort and convenience.",
      img: [
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/fortune-jp-palace-mysore-facade.png",
      ],
    },
    {
      name: "Welcome Heritage Hotels",
      desc: "Welcome Heritage Hotels showcase India's rich heritage through their architecture and services.",
      img: [
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/welcomheritage-mohanghar-fort.jpg",
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
      <FullLogo isFlex={true}/>
      
      {/* desc*/}
      <div className="w-full sm:w-[90%] md:w-[80%] text-center">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed ">
          With over 140+ hotels in 90+ destinations across six vibrant brands,
          ITC Hotels Limited integrates India's renowned tradition of
          hospitality and warmth, with globally benchmarked facilities &
          services.
        </p>
      </div>
      
      {/* title */}
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4">
        <h1 className="font-helvetica-neue font-light text-gray-800">Distinctive, distinguished brands</h1>
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
