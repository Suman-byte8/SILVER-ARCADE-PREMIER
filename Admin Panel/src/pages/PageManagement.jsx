import React, { useState } from "react";
import { FiUpload, FiTrash2 } from "react-icons/fi";

const PageManagement = () => {
  const [headline, setHeadline] = useState("");
  const [subHeadline, setSubHeadline] = useState("");
  const [title, setTitle] = useState("Distinctive, distinguished brands");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Saved:", { headline, subHeadline, title, description, file });
  };

  return (
    <div className="w-full p-10 bg-white min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">
        Page Management
      </h1>
      <p className="text-gray-500 mb-8">
        Manage the content and images for your main website.
      </p>

      {/* Home Page Banner Section */}
      <div className="bg-white rounded-2xl shadow p-6 mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-4">
          Home Page Banner Section
        </h2>

        <form onSubmit={handleSaveChanges} className="space-y-6">
          {/* Upload File */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="text-gray-500">
                <span className="text-blue-500">Upload a file</span> or Drag and
                Drop
                <p className="text-xs mt-1">PNG, JPG, GIF up to 10MB</p>
              </div>
            </label>
          </div>

          {/* Headline and Subheadline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="E.g. Welcome to our Restaurant"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="border rounded-full px-4 py-2 focus:ring-1 focus:ring-gray-300 outline-none"
            />
            <input
              type="text"
              placeholder="E.g. The best food in town"
              value={subHeadline}
              onChange={(e) => setSubHeadline(e.target.value)}
              className="border rounded-full px-4 py-2 focus:ring-1 focus:ring-gray-300 outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-5 py-2 rounded-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#2c5e6e] text-white px-5 py-2 rounded-full"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Page Title & Description */}
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
        >
          With over 140+ hotels in 90+ destinations across six vibrant brands...
        </textarea>
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
                <span className="text-blue-500">Upload a file</span> or Drag and
                Drop
                <p className="text-xs mt-1">PNG, JPG, GIF up to 10MB</p>
              </div>
            </label>
          </div>

          {/* Description */}
          <textarea
            rows="4"
            placeholder="Enter description..."
            className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:ring-gray-300 outline-none resize-none"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default PageManagement;
