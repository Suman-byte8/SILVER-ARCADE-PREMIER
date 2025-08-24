import SemiNavbar from "./SemiNavbar";
import Booking from "./Booking";
import Slider from "./Slider";
import React, { useEffect } from "react";
import { useState } from "react";
import { getHeroBannerData } from "../Api/HeroBanner";

const Carousel = () => {
  // const slides = [
  //   {
  //     image: banner1,
  //     details: {
  //       title: "World's 9th LEED Zero Water Certified Hotel",
  //       description:
  //         "ITC Grand Bharat is 9th globally to be awarded the LEED Zero certification award",
  //     },
  //   },
  //   {
  //     image: banner2,
  //     details: {
  //       title: "Luxury Redefined",
  //       description:
  //         "Experience unparalleled luxury and comfort at our exquisite hotels.",
  //     },
  //   },
  //   {
  //     image: banner3,
  //     details: {
  //       title: "Unforgettable Moments",
  //       description:
  //         "Create lasting memories with our world-class amenities and services.",
  //     },
  //   },
  // ];
  const [slides, setSlides] = useState([]);
  const token = import.meta.env.VITE_TEMP_TOKEN;
  useEffect(() => {
    getHeroBannerData(token)
      .then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          console.log(res.data);
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
      });
  }, []);

  return (
    <div className="w-full relative ">
      <div className="carousel-container md:relative w-full sm:h-[70vh] md:h-[80vh] lg:h-[90vh] bg-gray-200 flex items-center justify-center">
        <SemiNavbar />
        <Slider slides={slides} showDetails={true} />
        <div className="fixed md:absolute bottom-0 left-0 right-0 flex justify-center md:pb-4 z-100 ">
          <Booking />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
