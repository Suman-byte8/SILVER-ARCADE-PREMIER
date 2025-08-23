import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Details from "./Details";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Img } from "react-image";

const Slider = ({ slides, showDetails, classes }) => {
  return (
    <div className={`relative w-full h-full ${classes}`}>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            {slide.content || (
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {showDetails && slides[0] && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 md:left-20 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-50">
          <Details
            title={slides[0].details.title}
            description={slides[0].details.description}
          />
        </div>
      )}

      <div className="custom-prev absolute left-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full cursor-pointer">
        <FaChevronLeft className="text-gray-700" />
      </div>
      <div className="custom-next absolute right-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full cursor-pointer">
        <FaChevronRight className="text-gray-700" />
      </div>
    </div>
  );
};

export default Slider;
