import React, { useState } from "react";
import FullLogo from "../../Home/FullLogo";
import DescLayout from "./DescLayout";

const Distinctive = ({ distinctives, isAdminPreview = false }) => {
  const [selectedLink, setSelectedLink] = useState(
    distinctives?.length > 0 ? distinctives[0] : null
  );

  // For admin preview, we reduce padding and adjust layout
  const containerClasses = isAdminPreview
    ? "py-6 gap-6 px-2 sm:px-4"
    : "w-full py-12 flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8 relative z-10";

  const titleClasses = isAdminPreview
    ? "text-xl sm:text-2xl md:text-3xl font-light text-gray-800 text-center"
    : "text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 text-center";

  const shortDescClasses = isAdminPreview
    ? "w-full text-center text-sm text-gray-600 leading-relaxed"
    : "w-full sm:w-[90%] md:w-[70%] text-center text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed";

  const linksContainerClasses = isAdminPreview
    ? "flex flex-wrap items-center justify-center gap-2 sm:gap-3"
    : "flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8";

  return (
    <section className={containerClasses}>
      {/* Logo */}
      <FullLogo isFlex={true} classes={isAdminPreview ? "text-sm" : ""} />

      {/* Short Desc */}
      <p className={shortDescClasses}>
        Experience the warmth of Bengal's tradition with world-class hospitality
        at Silver Arcade Premier, crafted for leisure and business alike.
      </p>

      {/* Title */}
      <h1 className={titleClasses}>Distinctive, distinguished brands</h1>

      {/* Links */}
      <div
        className={`overflow-x-auto flex items-center justify-start sm:justify-center gap-3 sm:gap-4 md:gap-6 pb-2 scrollbar-hide`}
      >
        {distinctives?.map((distinctive) => (
          <button
            key={distinctive._id}
            className={`whitespace-nowrap px-2 py-1 text-xs sm:text-sm transition-all duration-300 border-b-2 ${
              selectedLink?._id === distinctive._id
                ? "border-gray-700 font-semibold text-gray-800"
                : "border-transparent hover:border-gray-300 text-gray-600"
            }`}
            onClick={() => setSelectedLink(distinctive)}
          >
            {distinctive.title}
          </button>
        ))}
      </div>

      {/* Description Layout */}
      <div className="w-full">
        <DescLayout desc={selectedLink} isAdminPreview={isAdminPreview} />
      </div>
    </section>
  );
};

export default Distinctive;
