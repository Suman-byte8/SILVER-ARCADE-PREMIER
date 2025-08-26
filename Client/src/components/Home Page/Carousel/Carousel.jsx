import SemiNavbar from "./SemiNavbar";
import Booking from "./Booking";
import Slider from "./Slider";
import React, { useEffect } from "react";
import { useState } from "react";
import { getHeroBannerData } from "./Api/HeroBanner";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = import.meta.env.VITE_TEMP_TOKEN;
  
  useEffect(() => {
    setIsLoading(true);
    getHeroBannerData(token)
      .then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          const formattedSlides = res.data.map((item) => ({
            image: item.image,
            details: {
              title: item.title,
              description: item.description,
            },
          }));
          setSlides(formattedSlides);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="w-full relative">
      <div className="carousel-container md:relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] bg-gray-200 flex items-center justify-center">
        <SemiNavbar />
        {!isLoading ? (
          <Slider slides={slides} showDetails={true} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-500">Loading carousel...</div>
          </div>
        )}
        <div className="fixed md:absolute bottom-0 left-0 right-0 flex justify-center md:pb-4 z-50">
          <Booking />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
