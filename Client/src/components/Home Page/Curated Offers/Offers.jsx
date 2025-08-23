import React from "react";
import Card from "./Card";
import WhyBookWIthUS from "./WhyBookWIthUS";
import { Link } from "react-router-dom";

// importing images
import offer1 from "../../../assets/Offers/offer_1.webp";
import offer2 from "../../../assets/Offers/offer_2.webp";
import offer3 from "../../../assets/Offers/offer_3.webp";
import offer4 from "../../../assets/Offers/offer_4.webp";
import offer5 from "../../../assets/Offers/offer_5.webp";

const Offers = ({ showAll = false }) => {
  const offers = [
    {
      id: 1,
      title: "Suite Indulgence",
      subTitle:
        "Immerse yourself in the grandeur of our Suites with exclusive savings and personalized luxuries.",
      points: [
        "Choice of lunch or dinner at Masala Zone or NH-16.",
        "Personalized butler service with a complimentary welcome wine.",
        "30% savings on food, soft beverages, spa, and laundry services.",
      ],
      img: offer1,
    },
    {
      id: 2,
      title: "Weekend Getaway",
      subTitle:
        "Escape to Malda’s finest boutique hotel for a weekend filled with comfort, cuisine, and relaxation.",
      points: [
        "Two-night stay in a Deluxe Room with buffet breakfast.",
        "Curated dinner for two at NH-16 restaurant.",
        "Exclusive rooftop access and late Sunday checkout.",
      ],
      img: offer2,
    },
    {
      id: 3,
      title: "Business Traveler’s Advantage",
      subTitle:
        "Designed for professionals, combining seamless business support with boutique comforts.",
      points: [
        "Stay in an Executive Deluxe Room with complimentary high-speed Wi-Fi.",
        "Two hours of complimentary meeting room access daily.",
        "Daily breakfast and 20% savings on laundry services.",
      ],
      img: offer3,
    },
    {
      id: 4,
      title: "Celebration Moments",
      subTitle:
        "Make your special days unforgettable with curated experiences at Silver Arcade Premier.",
      points: [
        "Complimentary cake and sparkling beverage on arrival.",
        "Room decorated with flowers and balloons for the occasion.",
        "Curated dinner at Masala Zone with 25% off banquet bookings.",
      ],
      img: offer4,
    },
    {
      id: 5,
      title: "Family Retreat",
      subTitle:
        "A perfect staycation designed for families to bond, relax, and celebrate together.",
      points: [
        "Spacious Suite or interconnecting rooms with breakfast for four.",
        "Kids under 6 dine free with surprise welcome gift.",
        "Evening storytelling or board games at the lounge for children.",
      ],
      img: offer5,
    },

  ];
  

  const offersToShow = showAll ? offers : offers.slice(0, 3);

  return (
    <div className="w-full flex flex-col items-center justify-center pb-12">
      <h1 className="text-4xl font-light tracking-wide text-center mb-8 uppercase">Our Curated Offers</h1>
      <div className="w-full px-8 mt-8 flex flex-wrap justify-center gap-4">
        {
            offersToShow.map((offer, index) => {
                let className = "";
                if (!showAll && index > 0) {
                    className = "hidden md:block";
                }
                return <Card key={offer.id} id={offer.id} offers={offer} className={className}/>
            })
        }
      </div>

      {!showAll && (
        <Link to="/our-offers">
          <button className="px-12 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 text-sm my-8">
            VIEW ALL OFFERS
          </button>
        </Link>
      )}

        <WhyBookWIthUS/>
    </div>
  );
};

export default Offers;
