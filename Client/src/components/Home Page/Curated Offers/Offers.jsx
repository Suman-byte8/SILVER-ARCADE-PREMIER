import React from "react";
import Card from "./Card";
import WhyBookWIthUS from "./WhyBookWIthUS";
import { Link } from "react-router-dom";

const Offers = ({ showAll = false }) => {
  const offers = [
    {id:1,
      title: "Suite Memories",
      subTitle:
        "Enjoy maginificence with unprededented savings on our suites offer",
      points: [
        "Choice of lunch or dinner at coffee-shop or at a speciallity restaurant.",
        "Bulter Services; Luxury hour; Complimentary bottle of house wine.",
        "30% savings on Food and soft Bevarage, Spa, Salon & Laundry",
      ],
      img: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/global-offers/suite-memories.jpg",
    },
    {id:2,
      title: "Suite Memories",
      subTitle:
        "Enjoy maginificence with unprededented savings on our suites offer",
      points: [
        "Choice of lunch or dinner at coffee-shop or at a speciallity restaurant.",
        "Bulter Services; Luxury hour; Complimentary bottle of house wine.",
        "30% savings on Food and soft Bevarage, Spa, Salon & Laundry",
      ],
      img: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/global-offers/suite-memories.jpg",
    },
    {id:3,
      title: "Suite Memories",
      subTitle:
        "Enjoy maginificence with unprededented savings on our suites offer",
      points: [
        "Choice of lunch or dinner at coffee-shop or at a speciallity restaurant.",
        "Bulter Services; Luxury hour; Complimentary bottle of house wine.",
        "30% savings on Food and soft Bevarage, Spa, Salon & Laundry",
      ],
      img: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/global-offers/suite-memories.jpg",
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
