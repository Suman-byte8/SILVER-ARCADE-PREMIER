import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import {
  fetchBanners,
  deleteBanner,
  addHeroBanner,
} from "../../services/pageManagementApi";

const AdminBannerPreview = () => {
  const [banners, setBanners] = useState([]);
  const [editingBanner, setEditingBanner] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const [preview, setPreview] = useState(null);

  const token = import.meta.env.VITE_TEMP_ADMIN_TOKEN;

  useEffect(() => {
    loadBanners();
  }, []);

  const loadBanners = async () => {
    try {
      const data = await fetchBanners(token);
      if (Array.isArray(data.heroBanners)) {
        setBanners(data.heroBanners);
        console.log("Fetched banners:", data.heroBanners);
      } else {
        console.error("Fetched data is not an array:", data);
        setBanners([]);
      }
    } catch (err) {
      console.error("Error fetching banners:", err);
      setBanners([]);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this banner?")) {
      try {
        await deleteBanner(id);
        setBanners((prev) => prev.filter((banner) => banner.id !== id));
        console.log("Banner deleted successfully!");
      } catch (error) {
        console.error("Error deleting banner:", error);
      }
    }
  };

  const handleEdit = (banner) => {
    setEditingBanner(banner);
    setFormData({
      title: banner.title,
      description: banner.description,
      image: banner.image,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await addHeroBanner(formData, token); // ⚠️ replace with update function if exists
      setBanners((prev) =>
        prev.map((b) => (b.id === editingBanner.id ? { ...b, ...formData } : b))
      );
      setEditingBanner(null);
      setFormData({ title: "", description: "", image: "" });
      console.log("Banner updated successfully!");
    } catch (error) {
      console.error("Error updating banner:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file)); // generate local preview
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-medium text-gray-700 mb-4">
        Home Page Banner
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {banners.map((banner, i) => (
          <div key={banner.id || i} className="bg-white rounded-lg shadow p-4">
            <img
              src={banner.image}
              alt={banner.title}
              className="rounded-lg mb-2 w-full h-40 object-cover"
            />
            <h3 className="text-lg font-semibold">{banner.title}</h3>
            <p className="text-gray-600">{banner.description}</p>
            <div className="flex justify-between mt-4">
              <button
                className="text-blue-500 flex items-center"
                onClick={() => handleEdit(banner)}
              >
                <FaEdit className="mr-1" /> Update Banner
              </button>
              <button
                className="text-red-500 flex items-center"
                onClick={() => handleDelete(banner.id)}
              >
                <FaTrash className="mr-1" /> Delete Banner
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingBanner && (
        <form onSubmit={handleUpdate} className="mt-6">
          <h3 className="text-lg font-semibold">Edit Banner</h3>
          <input
            type="text"
            placeholder="Banner Headline"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="border rounded p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Banner Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="border rounded p-2 mb-2 w-full"
          />
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border rounded p-2 mb-2 w-full"
            />

            {/* Show preview if image is selected */}
            {preview && (
              <div className="mt-2">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-48 object-contain rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 my-4 rounded"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminBannerPreview;
