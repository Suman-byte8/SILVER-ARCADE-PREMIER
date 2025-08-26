import React, { useState } from "react";
import { aboutApi } from "../../services/aboutApi";

const AddContent = ({ type, onContentAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

const token = import.meta.env.VITE_TEMP_ADMIN_TOKEN;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      if (type === "content") {
        await aboutApi.addContentBlock(formData, token);
      } else if (type === "amenity") {
        await aboutApi.addAmenity(formData, token);
      } else if (type === "service") {
        await aboutApi.addService(formData, token);
      }
      setMessage("Item added successfully!");
      onContentAdded();
    } catch (error) {
      console.error("Error adding item:", error);
      setMessage("Failed to add item.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Add {type.charAt(0).toUpperCase() + type.slice(1)}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1"
          />
          {preview && <img src={preview} alt="Preview" className="mt-2 w-40 h-20 object-cover" />}
        </div>
        <button
          type="submit"
          className={`bg-blue-600 text-white px-4 py-2 rounded-lg ${loading ? "opacity-50" : ""}`}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add"}
        </button>
        {message && <p className="mt-2 text-red-600">{message}</p>}
      </form>
    </div>
  );
};

export default AddContent;
