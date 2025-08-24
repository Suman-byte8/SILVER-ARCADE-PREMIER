import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import imageCompression from "browser-image-compression";
import { addDistinctive } from "@/services/distinctive";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

const DistinctiveSection = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]); 
  const [previews, setPreviews] = useState([]); 

  // Handle file selection & compression
  const handleFileChange = async (e) => {
    const selectedFiles = Array.from(e.target.files);

    const compressedFiles = await Promise.all(
      selectedFiles.map(async (file) => {
        const options = {
          maxSizeMB: 2,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);
        return new File([compressedFile], file.name, { type: file.type });
      })
    );

    setFiles((prev) => [...prev, ...compressedFiles]);
    setPreviews((prev) => [
      ...prev,
      ...compressedFiles.map((f) => URL.createObjectURL(f)),
    ]);
  };

  // Remove selected image
  const handleRemoveImage = (index) => {
    setFiles(files.filter((_, i) => i !== index));
    setPreviews(previews.filter((_, i) => i !== index));
  };

  // Submit form
  const handleSaveChanges = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    files.forEach((file) => formData.append("images", file));

    const token = import.meta.env.VITE_TEMP_ADMIN_TOKEN;

    try {
      await addDistinctive(formData, token);
      console.log("Distinctive section saved successfully!");
      setTitle("");
      setDescription("");
      setFiles([]);
      setPreviews([]);
    } catch (error) {
      console.error(
        "Failed to save distinctive section:",
        error.response?.data || error
      );
    }
  };

  return (
    <form onSubmit={handleSaveChanges}>
      <div className="bg-white rounded-2xl shadow p-6 mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium text-gray-700">
            Distinctive & Description
          </h2>
          <Link
            to="/page-management/distinctive-preview"
            className="flex items-center gap-2 text-blue-500 cursor-pointer"
          >
            <FaRegEye /> Preview
          </Link>
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title..."
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

      {/* Upload Section */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-medium text-gray-700 mb-4">Upload Images</h2>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center relative">
          <input
            type="file"
            className="hidden"
            id="fileUpload"
            onChange={handleFileChange}
            multiple
            accept="image/*"
          />
          <label htmlFor="fileUpload" className="cursor-pointer block">
            {previews.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {previews.map((src, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={src}
                      alt={`preview-${i}`}
                      className="w-full h-32 object-cover rounded-xl border"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(i)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-500">
                <span className="text-blue-500">Upload files</span> or Drag and Drop
                <p className="text-xs mt-1">PNG, JPG, GIF up to 10MB</p>

              </div>
            )}
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-[#2c5e6e] text-white px-5 py-2 rounded-full"
        >
          Save Distinctive Section Changes
        </button>
      </div>
    </form>
  );
};

export default DistinctiveSection;
