import React, { useState, useEffect } from "react";
import AboutUsSection from "../components/AboutManagement/AboutUsSection";
import ContentBlock from "../components/AboutManagement/ContentBlocks";
import AmenityCard from "../components/AboutManagement/AmenityCard";
import ServiceCard from "../components/AboutManagement/ServiceCard";
import AddContent from "../components/AboutManagement/AddContent";
import { aboutApi } from "../services/aboutApi";

const AboutManagement = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const token = import.meta.env.VITE_TEMP_ADMIN_TOKEN;

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      setLoading(true);
      const data = await aboutApi.getAboutPage(token);
      setAboutData(data);
    } catch (error) {
      console.error("Error fetching About page data:", error);
      setMessage("Failed to load About page data");
    } finally {
      setLoading(false);
    }
  };

  const handleContentAdded = () => {
    fetchAboutData(); // Refresh data after adding content
  };

  const handlePublish = () => {
    // This would typically save all changes to the backend
    setMessage("All changes published successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto min-h-screen">
        <div className="container mx-auto p-6">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto min-h-screen">
      <div className="container mx-auto p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Panel - Website Content
          </h1>
          <button 
            onClick={handlePublish}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Publish Changes
          </button>
        </header>

        {message && (
          <div className={`mb-6 p-3 rounded ${
            message.includes("success") 
              ? "bg-green-100 text-green-700 border border-green-200" 
              : "bg-red-100 text-red-700 border border-red-200"
          }`}>
            {message}
          </div>
        )}

        <main>
          <AboutUsSection />

          <AddContent type="content" onContentAdded={handleContentAdded} />
          <AddContent type="amenity" onContentAdded={handleContentAdded} />
          <AddContent type="service" onContentAdded={handleContentAdded} />

          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Content Blocks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aboutData?.contentBlocks?.map((block, index) => (
                <ContentBlock key={index} {...block} />
              ))}
              {(!aboutData?.contentBlocks || aboutData.contentBlocks.length === 0) && (
                <p className="text-gray-500">No content blocks available</p>
              )}
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Our Amenities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutData?.amenities?.map((amenity, index) => (
                <AmenityCard key={index} {...amenity} />
              ))}
              {(!aboutData?.amenities || aboutData.amenities.length === 0) && (
                <p className="text-gray-500">No amenities available</p>
              )}
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Our Exceptional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutData?.services?.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
              {(!aboutData?.services || aboutData.services.length === 0) && (
                <p className="text-gray-500">No services available</p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AboutManagement;
