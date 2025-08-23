import React from "react";
import { Img } from "react-image";
import Amenities from "../components/About Us/Amenities";
import Service from "../components/About Us/Service";
import IntroText from "../components/About Us/IntroText";
import Gallery from "../components/Gallery/Gallery";
import HotelVideo from "../assets/Videos/HotelVideo.mp4";
import aboutImg from "../assets/About/about.jpg";

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col px-4 md:px-12">
      {/* Hero Section */}
      <div className="relative p-3">
        {/* Commented out image - keeping for reference */}
        <img
          src={aboutImg}
          alt="About Us"
          className="w-full h-[480px] object-cover rounded-lg"
        />

        {/* Video element */}
        {/* <video
          src={HotelVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-lg"
        >
          Your browser does not support the video tag.
        </video> */}

        <h1 className="absolute bottom-8 left-8 text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
          About Us
        </h1>
      </div>

      {/* Intro Text */}
      <IntroText />

      {/* Amenities */}
      <Amenities />
      {/* Services */}
      <Service />
      {/* Gallery */}
      {/* <Gallery /> */}
    </div>
  );
};

export default AboutUs;
