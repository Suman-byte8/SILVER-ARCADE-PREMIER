import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import imageCompression from "browser-image-compression";
import {
  fetchBanners,
  deleteBanner,
  addHeroBanner,
  updateBanner,
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

  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this banner?")) {
  //     try {
  //       await deleteBanner(id);
  //       setBanners((prev) => prev.filter((banner) => banner.id !== id));
  //       console.log("Banner deleted successfully!");
  //     } catch (error) {
  //       console.error("Error deleting banner:", error);
  //     }
  //   }
  // };

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
      // Create FormData object for multipart upload
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      if (typeof formData.image !== "string") {
        // if it's a new file
        formDataToSend.append("image", formData.image);
      }

      // Use proper update function instead of addHeroBanner
      await updateBanner(editingBanner._id, formDataToSend, token);

      // Refresh banners after update
      await loadBanners();

      setEditingBanner(null);
      setFormData({ title: "", description: "", image: "" });
    } catch (error) {
      console.error("Error updating banner:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this banner?")) {
      try {
        await deleteBanner(id, token); // Pass the token here
        setBanners((prev) => prev.filter((banner) => banner._id !== id));
        console.log("Banner deleted successfully!");
      } catch (error) {
        console.error("Error deleting banner:", error);
      }
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Compress the image with a maximum size of 2MB and maximum dimension of 1920px
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 2,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        });

        // Convert the compressed blob back to a File object
        const compressedFileAsFile = new File([compressedFile], file.name, {
          type: compressedFile.type,
          lastModified: Date.now(),
        });

        // Update formData with the compressed file
        setFormData({ ...formData, image: compressedFileAsFile });

        // Generate preview URL without storing it in state to avoid memory leaks
        const previewUrl = URL.createObjectURL(compressedFileAsFile);

        // Revoke previous URL if exists to prevent memory leaks
        if (preview) URL.revokeObjectURL(preview);

        setPreview(previewUrl);
      } catch (error) {
        console.error("Error compressing image:", error);
        // If compression fails, fall back to original file
        setFormData({ ...formData, image: file });

        // Generate preview URL without storing it in state to avoid memory leaks
        const previewUrl = URL.createObjectURL(file);

        // Revoke previous URL if exists to prevent memory leaks
        if (preview) URL.revokeObjectURL(preview);

        setPreview(previewUrl);
      }
    }
  };

  // Add this cleanup in useEffect return function or when component unmounts:
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-medium text-gray-700 mb-4">
        Home Page Banner
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {banners.map((banner, i) => (
          <div key={banner._id || i} className="bg-white rounded-lg shadow p-4">
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
                onClick={() => handleDelete(banner._id)}
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
