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
    setMessage("All changes published successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleAmenityDelete = (amenityId) => {
    setAboutData(prevData => ({
      ...prevData,
      amenities: prevData.amenities.filter(amenity => amenity._id !== amenityId)
    }));
    setMessage("Amenity deleted successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleAmenityUpdate = (amenityId, updatedData) => {
    setAboutData(prevData => ({
      ...prevData,
      amenities: prevData.amenities.map(amenity => 
        amenity._id === amenityId ? { ...amenity, ...updatedData } : amenity
      )
    }));
    setMessage("Amenity updated successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleServiceDelete = (serviceId) => {
    setAboutData(prevData => ({
      ...prevData,
      services: prevData.services.filter(service => service._id !== serviceId)
    }));
    setMessage("Service deleted successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleServiceUpdate = (serviceId, updatedData) => {
    setAboutData(prevData => ({
      ...prevData,
      services: prevData.services.map(service => 
        service._id === serviceId ? { ...service, ...updatedData } : service
      )
    }));
    setMessage("Service updated successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleContentBlockDelete = (contentBlockId) => {
    setAboutData(prevData => ({
      ...prevData,
      contentBlocks: prevData.contentBlocks.filter(block => block._id !== contentBlockId)
    }));
    setMessage("Content block deleted successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleContentBlockUpdate = (contentBlockId, updatedData) => {
    setAboutData(prevData => ({
      ...prevData,
      contentBlocks: prevData.contentBlocks.map(block => 
        block._id === contentBlockId ? { ...block, ...updatedData } : block
      )
    }));
    setMessage("Content block updated successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto min-h-screen p-6">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded mb-8"></div>
          <div className="h-64 bg-gray-200 rounded mb-8"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto min-h-screen p-6 bg-gray-50">
      <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-800">Admin Panel - Website Content</h1>
        <button 
          onClick={handlePublish}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300 font-medium"
        >
          Publish Changes
        </button>
      </header>

      {message && (
        <div className={`mb-6 p-4 rounded-lg ${
          message.includes("success") 
            ? "bg-green-100 text-green-700 border border-green-200" 
            : "bg-red-100 text-red-700 border border-red-200"
        }`}>
          {message}
        </div>
      )}

      <main className="space-y-8">
        <AboutUsSection />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AddContent type="content" onContentAdded={handleContentAdded} />
          <AddContent type="amenity" onContentAdded={handleContentAdded} />
          <AddContent type="service" onContentAdded={handleContentAdded} />
        </div>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-3">
            Content Blocks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData?.contentBlocks?.map((block, index) => (
              <ContentBlock 
                key={block._id || index} 
                {...block} 
                imageUrl={block.image?.url}
                onDelete={handleContentBlockDelete}
                onUpdate={handleContentBlockUpdate}
              />
            ))}
            {(!aboutData?.contentBlocks || aboutData.contentBlocks.length === 0) && (
              <p className="text-gray-500 text-center col-span-full py-8">No content blocks available</p>
            )}
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-3">
            Our Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutData?.amenities?.map((amenity, index) => (
              <AmenityCard 
                key={amenity._id || index} 
                {...amenity} 
                imageUrl={amenity.image?.url}
                onDelete={handleAmenityDelete}
                onUpdate={handleAmenityUpdate}
              />
            ))}
            {(!aboutData?.amenities || aboutData.amenities.length === 0) && (
              <p className="text-gray-500 text-center col-span-full py-8">No amenities available</p>
            )}
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-3">
            Our Exceptional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData?.services?.map((service, index) => (
              <ServiceCard 
                key={service._id || index} 
                {...service} 
                imageUrl={service.image?.url}
                onDelete={handleServiceDelete}
                onUpdate={handleServiceUpdate}
              />
            ))}
            {(!aboutData?.services || aboutData.services.length === 0) && (
              <p className="text-gray-500 text-center col-span-full py-8">No services available</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutManagement;
