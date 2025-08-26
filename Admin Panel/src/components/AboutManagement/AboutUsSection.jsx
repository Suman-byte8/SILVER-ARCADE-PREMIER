import React, { useState, useEffect } from "react";
import { aboutApi } from "../../services/aboutApi";

const AboutUsSection = () => {
  const [aboutData, setAboutData] = useState({
    title: "",
    description: ""
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const token = import.meta.env.VITE_TEMP_ADMIN_TOKEN;

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      setLoading(true);
      const data = await aboutApi.getAboutPage(token);
      if (data.aboutUsSection) {
        setAboutData({
          title: data.aboutUsSection.title || "",
          description: data.aboutUsSection.description || ""
        });
      }
    } catch (error) {
      console.error("Error fetching About data:", error);
      setMessage("Failed to load About data");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setAboutData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setMessage("");
      await aboutApi.updateAboutUs(aboutData, token);
      setMessage("About Us section updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error updating About Us:", error);
      setMessage("Failed to update About Us section");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          About Us Section
        </h2>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-10 bg-gray-200 rounded w-1/3"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          About Us Section
        </h2>
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
      
      {message && (
        <div className={`mb-4 p-3 rounded ${
          message.includes("success") 
            ? "bg-green-100 text-green-700 border border-green-200" 
            : "bg-red-100 text-red-700 border border-red-200"
        }`}>
          {message}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="about-title"
          >
            Title
          </label>
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-0 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            id="about-title"
            type="text"
            value={aboutData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="Enter About Us title"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="about-description"
          >
            Description
          </label>
          <textarea
            className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-0 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            id="about-description"
            rows="6"
            value={aboutData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            placeholder="Enter About Us description"
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
