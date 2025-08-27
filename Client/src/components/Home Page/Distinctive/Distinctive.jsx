import React, { useState, useEffect } from "react";
import FullLogo from "../../FullLogo";
import DescLayout from "./DescLayout";
import { fetchDistinctives } from "../../../services/distinctive"; // Import the fetch function

const Distinctive = () => {
  const [distinctives, setDistinctives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);

  useEffect(() => {
    // TODO: Get the token from your authentication context or local storage
    const token = import.meta.env.VITE_TEMP_TOKEN; 
    const getDistinctives = async () => {
      try {
        const data = await fetchDistinctives(token);
        const features = data.data || []; // Ensure features is an array
        setDistinctives(features);
        if (features.length > 0) {
          setSelectedLink(features[0]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getDistinctives();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching distinctives: {error.message}</div>;
  if (!distinctives.length) return <div>No distinctive features found</div>;

  // Prepare the props for DescLayout from the selected feature data
  const descLayoutProps = selectedLink ? {
    name: selectedLink.title,
    desc: selectedLink.description,
    img: selectedLink.images,
  } : null;

  return (
    <section className="w-full py-12 flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8 relative z-10">
      <FullLogo isFlex />

      <div className="w-full sm:w-[90%] md:w-[70%] text-center">
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
        Silver Arcade Premier stands as Malda’s most refined destination for discerning travelers. A perfect blend of modern design, timeless hospitality, and world-class amenities, the hotel offers an exceptional stay for business executives, leisure seekers, and families looking for comfort, luxury, and memorable experiences.
        </p>
      </div>

      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        <h1 className="font-helvetica-neue font-light text-gray-800">
          Distinctive, distinguished brands
        </h1>
      </div>

      {/* Links (horiz scroll if overflow) */}
      <div className="overflow-x-auto flex items-center justify-start sm:justify-center gap-3 sm:gap-4 md:gap-6 pb-2">
        {distinctives.map((d) => (
          <button
            key={d._id}
            className={`whitespace-nowrap px-2 py-1 text-xs sm:text-sm transition-all duration-300 border-b-2 ${
              selectedLink?._id === d._id
                ? "border-gray-700 font-semibold text-gray-800"
                : "border-transparent hover:border-gray-300 text-gray-600"
            }`}
            onClick={() => setSelectedLink(d)}
          >
            {d.title}
          </button>
        ))}
      </div>

      <div className="w-full">
        {descLayoutProps && <DescLayout desc={descLayoutProps} />}
      </div>
    </section>
  );
};

export default Distinctive;