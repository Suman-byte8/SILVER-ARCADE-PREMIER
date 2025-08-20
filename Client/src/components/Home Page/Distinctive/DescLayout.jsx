import React from "react";
import Slider from "../Carousel/Slider";
import FullLogo from "../../FullLogo";

const DescLayout = ({ desc }) => {
  if (!desc) {
    return null;
  }

  const slides = desc.img.map((image) => ({ image }));

  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center">
      <div className="md:w-[55%] w-full p-4 flex flex-col items-center justify-center gap-4">
        <FullLogo isFlex={false} />
        {/* <p className="text-center w-full p-2">{desc.desc}</p> */}
        <p className="text-center w-full p-2 text-sm leading-6.5 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad
          rem facilis sit. Natus, nisi porro dolor esse doloribus commodi
          dolores debitis quas facilis consequatur mollitia aliquam nam, atque
          illum rerum incidunt velit recusandae officiis dolorem animi ex ab
          labore. Voluptatem asperiores deserunt culpa dicta, quis facere
          ratione quae et. Praesentium quos mollitia voluptatum nulla porro,
          accusantium aspernatur tempore doloribus iusto reprehenderit
          voluptatibus in dignissimos ipsa ut. Labore, laudantium ratione
          repudiandae natus voluptas nihil fuga commodi tempore architecto
          eveniet facere?
        </p>
        <button className="p-3 border-2 border-gray-300 rounded-full mt-2 px-12 ">
          Know More
        </button>
      </div>
      <div className="w-full md:w-[45%] h-[65vh]">
        <div className="_img flex items-center justify-center h-full">
          {slides.length > 1 ? (
            <Slider
              slides={slides}
              showDetails={false}
              classes={"rounded-lg"}
            />
          ) : (
            <img
              src={slides[0].image}
              alt={desc.name}
              className="w-full h-full object-cover rounded-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DescLayout;
