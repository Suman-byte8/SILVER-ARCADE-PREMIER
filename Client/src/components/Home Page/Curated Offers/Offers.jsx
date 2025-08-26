import React, { useEffect, useState } from "react";
import Card from "./Card";
import WhyBookWIthUS from "./WhyBookWIthUS";
import { Link } from "react-router-dom";
import { fetchCuratedOffers } from "../../../services/offers";

const Offers = ({ showAll = false }) => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = import.meta.env.VITE_TEMP_TOKEN;

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetchCuratedOffers(token);
        setOffers(response.offers);
      } catch (error) {
        console.error("Error fetching offers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);
  

  const offersToShow = showAll ? offers : offers.slice(0, 3);

  return (
    <div className="w-full flex flex-col items-center justify-center pb-12">
      <h1 className="text-4xl font-light tracking-wide text-center mb-8 uppercase">Our Curated Offers</h1>
      {loading ? (
        <p>Loading offers...</p>
      ) : (
        <div className="w-full px-8 mt-8 flex flex-wrap justify-center gap-4">
          {
            offersToShow.map((offer, index) => {
              let className = "";
              if (!showAll && index > 0) {
                className = "hidden md:block";
              }
              return <Card key={offer._id} id={offer._id} offers={offer} className={className}/>
            })
          }
        </div>
      )}

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
