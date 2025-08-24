import React from "react";
import Slider from "../../Carousel/Slider";
import FullLogo from "../../Home/FullLogo";

const DescLayout = ({ desc, isAdminPreview = false }) => {
  if (!desc) return null;

  // For admin preview, we adjust the layout to be more compact
  // in DescLayout.jsx

  const containerClasses = isAdminPreview
    ? "w-full flex flex-col md:flex-row items-center gap-6 border rounded-lg p-4 bg-gray-50"
    : "w-full flex flex-col-reverse md:flex-row items-center gap-8";

  const contentClasses = isAdminPreview
    ? "md:w-[55%] w-full p-3 flex flex-col items-center justify-center gap-3"
    : "md:w-[55%] w-full p-6 flex flex-col items-center justify-center gap-4";

  const imageContainerClasses = isAdminPreview
    ? "md:w-[45%] w-full h-[40vh]"
    : "md:w-[45%] w-full h-[55vh]";

  const textClasses = isAdminPreview
    ? "text-center w-full text-xs sm:text-sm leading-5 text-gray-600"
    : "text-center w-full text-sm sm:text-base leading-6 text-gray-600";

  const buttonClasses = isAdminPreview
    ? "px-6 py-1 text-sm border-2 border-gray-300 rounded-full text-gray-700 hover:border-gray-500 transition"
    : "px-10 py-2 border-2 border-gray-300 rounded-full text-gray-700 hover:border-gray-500 transition";

  return (
    <div className="flex justify-center max-w-[50rem]">
      {/* Left Content */}
      <div className={contentClasses}>
        <FullLogo isFlex={false} classes={isAdminPreview ? "text-xs" : ""} />
        <p className={textClasses}>{desc.description || desc.desc}</p>
        <button className={buttonClasses}>Know More</button>
      </div>

      {/* Right Image/Slider */}
      <div className={imageContainerClasses}>
        <div className="flex items-center justify-center h-full">
          {desc.images?.length > 1 ? (
            <Slider
              slides={desc.images.map((img) => ({
                content: (
                  <img
                    src={img}
                    alt={desc.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ),
              }))}
              showDetails={false}
              classes={isAdminPreview ? "rounded-lg" : "rounded-xl"}
            />
          ) : desc.images?.length === 1 ? (
            <img
              src={desc.images[0]}
              alt={desc.title}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DescLayout;
