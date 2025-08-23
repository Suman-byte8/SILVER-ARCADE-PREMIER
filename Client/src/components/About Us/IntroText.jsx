import React from "react";
// import { img } from "react-image";

// import images
import location from "../../assets/About/location.jpg";
import dining from "../../assets/About/dining.jpg";
import hospitality from "../../assets/About/hospitality.jpg";
import room from "../../assets/About/room.jpg";
import whyUs from "../../assets/About/whyUs.jpg";

const IntroText = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-gray-800 space-y-12 md:space-y-20">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-base sm:text-lg font-light leading-relaxed mb-6">
          Silver Arcade Premier is a luxury boutique hotel in Malda, West
          Bengal, offering a perfect blend of elegance, comfort, and modern
          amenities. Known as the business-class hotel of the Mango City of
          India, we welcome both corporate travelers and leisure guests looking
          for an exceptional stay.
        </p>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-6 sm:p-8 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-normal mb-4">
            Your Perfect Stay in the Heart of Malda
          </h2>
          <p className="text-md font-light leading-relaxed">
            Ideally located just minutes away from major corporate offices,
            administrative headquarters, and popular tourist attractions, Silver
            Arcade Premier provides easy access to everything Malda, Dakshin
            Dinajpur, and Uttar Dinajpur districts have to offer. Whether you’re
            here for business meetings, cultural exploration, or relaxation, our
            prime location ensures convenience at every step.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-80">
          <img
            src={location}
            alt="Hotel Location"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 h-64 md:h-80 order-last md:order-first">
          <img
            src={room}
            alt="Elegant Rooms"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 sm:p-8 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-normal mb-4">
            Elegant Rooms & Premium Amenities
          </h2>
          <p className="text-md font-light leading-relaxed mb-4">
            Our spacious, well-appointed rooms feature:
          </p>
          <ul className="list-disc list-inside text-md font-light leading-relaxed inline-block text-left">
            <li>Plush king-size beds</li>
            <li>Stylish, contemporary décor</li>
            <li>Warm ambient lighting</li>
            <li>Modern bathrooms with rain showers</li>
            <li>High-speed Wi-Fi and smart entertainment options</li>
          </ul>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-6 sm:p-8 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-normal mb-4">Dining & Leisure</h2>
          <p className="text-md font-light leading-relaxed">
            Indulge in the flavors of our multi-cuisine restaurant and enjoy an
            evening at our family restro-bar, offering a curated selection of
            cocktails, premium spirits, and fresh local dishes.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-80">
          <img
            src={dining}
            alt="Dining & Leisure"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 h-64 md:h-80 order-last md:order-first">
          <img
            src={hospitality}
            alt="Hospitality Promise"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 sm:p-8 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-normal mb-4">Our Hospitality Promise</h2>
          <p className="text-md font-light leading-relaxed">
            At Silver Arcade Premier, we believe hospitality is more than just
            providing rooms — it’s about understanding every guest’s
            individuality and delivering personalized service with a warm smile.
            Our dedicated team ensures you receive the finest experience from
            check-in to check-out.
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-6 sm:p-8 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-normal mb-4">
            Why Choose Silver Arcade Premier?
          </h2>
          <ul className="list-disc list-inside text-md font-light leading-relaxed inline-block text-left">
            <li>Prime location in Malda’s business and cultural hub</li>
            <li>Luxurious rooms with modern facilities</li>
            <li>Restaurant and bar for fine dining and relaxation</li>
            <li>
              Proximity to corporate, government, and tourist destinations
            </li>
            <li>Exceptional service with a personal touch</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-80">
          <img
            src={whyUs}
            alt="Why Choose Us"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Closing */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-md font-light leading-relaxed">
          Book your stay today at Silver Arcade Premier and experience the
          perfect combination of business convenience and boutique-style comfort
          in Malda.
        </p>
      </div>
    </div>
  );
};

export default IntroText;
