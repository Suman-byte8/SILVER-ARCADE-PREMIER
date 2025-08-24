import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import imageCompression from "browser-image-compression";
// Assuming a new API function for distinctive sections
import { saveDistinctiveSection } from "../../services/pageManagementApi";

const DistinctiveSection = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null); // For the "Upload File" section

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const newFile = new File([compressedFile], file.name, {
        type: file.type,
      });
      setFile(newFile);
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault(); // Assuming this will be part of a form submission

    // Collect data for the distinctive section
    const dataToSave = {
      title,
      description,
      file, // Include file if it's part of the distinctive section's data
      // Add other fields specific to DistinctiveSection if needed
    };

    const token = import.meta.env.VITE_TEMP_ADMIN_TOKEN; // Assuming token is available

    try {
      // Call the new API function
      await saveDistinctiveSection(dataToSave, token);
      console.log("Distinctive section saved successfully!");
      // Optionally, clear form or show success message
    } catch (error) {
      console.error(
        "Failed to save distinctive section:",
        error.response?.data || error
      );
    }
  };
  return (
    <form onSubmit={handleSaveChanges}>
      {/* Page Title & Description */}
      <div>
        <div className="bg-white rounded-2xl shadow p-6 mb-10">
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Page Title & Description
          </h2>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-full px-4 py-2 mb-4 focus:ring-1 focus:ring-gray-300 outline-none"
          />
          <textarea
            rows="2"
            placeholder="Enter description..."
            className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:ring-gray-300 outline-none resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Brand Details */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium text-gray-700">Brand Details</h2>
            <button className="bg-[#2c5e6e] text-white px-5 py-2 rounded-full">
              + Add New Brand
            </button>
          </div>

          {/* Example Brand Card */}
          <div className="border rounded-2xl p-6 relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-700">Our Hotels</h3>
              <button className="text-red-500 hover:text-red-700">
                <FiTrash2 size={20} />
              </button>
            </div>

            {/* Upload File */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center mb-4">
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div className="text-gray-500">
                  <span className="text-blue-500">Upload a file</span> or Drag
                  and Drop
                  <p className="text-xs mt-1">PNG, JPG, GIF up to 10MB</p>
                </div>
              </label>
            </div>

            {/* Description */}
            <textarea
              rows="4"
              placeholder="Enter description..."
              className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:ring-gray-300 outline-none resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          {/* Add a submit button for the form */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="submit"
              className="bg-[#2c5e6e] text-white px-5 py-2 rounded-full"
            >
              Save Distinctive Section Changes
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DistinctiveSection;
