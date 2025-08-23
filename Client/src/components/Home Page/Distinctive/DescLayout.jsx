import React from "react";
import Slider from "../Carousel/Slider";
import FullLogo from "../../FullLogo";

const ImageComponent = ({ image, alt }) => {
  // Check if image is a local import or URL
  const isLocalImage = typeof image === 'object' && image.original;

  if (isLocalImage) {
    return (
      <picture>
        <source
          srcSet={image.original}
          media="(min-width: 1024px)"
          type="image/webp"
        />
        <source
          srcSet={image.original}
          media="(min-width: 640px)"
          type="image/webp"
        />
        <img
          src={image.original}
          alt={alt}
          className="w-full h-full object-cover rounded-xl"
          loading="lazy"
        />
      </picture>
    );
  }

  return (
    <picture>
      <source
        srcSet={image}
        media="(min-width: 1024px)"
        type="image/webp"
      />
      <source
        srcSet={image}
        media="(min-width: 640px)"
        type="image/webp"
      />
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover rounded-xl"
        loading="lazy"
      />
    </picture>
  );
};

const DescLayout = ({ desc }) => {
  if (!desc) return null;

  const renderImage = (image) => {
    const imageUrl = typeof image === 'string' ? image : image.original;
    return <ImageComponent image={image} alt={desc.name} />;
  };

  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center">
      <div className="md:w-[55%] w-full p-4 flex flex-col items-center justify-center gap-4">
        <FullLogo isFlex={false} />
        <p className="text-center w-full p-2 text-sm leading-6.5 text-gray-500">
          {desc.desc}
        </p>
        <button className="p-3 border-2 border-gray-300 rounded-full mt-2 px-12">
          Know More
        </button>
      </div>
      <div className="w-full md:w-[45%] h-[65vh]">
        <div className="_img flex items-center justify-center h-full">
          {desc.img.length > 1 ? (
            <Slider
              slides={desc.img.map(img => ({
                content: renderImage(img)
              }))}
              showDetails={false}
              classes={"rounded-lg"}
            />
          ) : (
            renderImage(desc.img[0])
          )}
        </div>
      </div>
    </div>
  );
};

export default DescLayout;
