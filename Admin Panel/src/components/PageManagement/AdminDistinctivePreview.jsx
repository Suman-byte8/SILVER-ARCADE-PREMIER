import React, { useEffect, useState } from "react";
import Distinctive from "./Distinctive/Distinctive";
import DescLayout from "./Distinctive/DescLayout";
import { FaTrash, FaEdit, FaPlus, FaList, FaEye } from "react-icons/fa";
import imageCompression from "browser-image-compression";
import {
  fetchDistinctives,
  addDistinctive,
  updateDistinctive,
  deleteDistinctive,
} from "../../services/pageManagementApi";

const AdminDistinctivePreview = () => {
  const [distinctives, setDistinctives] = useState([]);
  const [editingDistinctive, setEditingDistinctive] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    images: [],
  });
  const [previewImages, setPreviewImages] = useState([]);
  const [selectedLink, setSelectedLink] = useState(null);
  const [activeTab, setActiveTab] = useState("features");
  const [showForm, setShowForm] = useState(false);

  const token = import.meta.env.VITE_TEMP_ADMIN_TOKEN;

  useEffect(() => {
    loadDistinctives();
  }, []);

  const loadDistinctives = async () => {
    try {
      const data = await fetchDistinctives(token);
      if (data.success && Array.isArray(data.data)) {
        setDistinctives(data.data);
        setSelectedLink(data.data[0] || null);
      }
    } catch (err) {
      console.error("Error fetching distinctives:", err);
      setDistinctives([]);
    }
  };

  const handleEdit = (d) => {
    setEditingDistinctive(d);
    setFormData({ title: d.title, description: d.description, images: [] });
    setPreviewImages(d.images || []);
    setShowForm(true);
  };

  const handleAddNew = () => {
    setEditingDistinctive(null);
    setFormData({ title: "", description: "", images: [] });
    setPreviewImages([]);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingDistinctive(null);
    setFormData({ title: "", description: "", images: [] });
    setPreviewImages([]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);

      previewImages.forEach((img) => {
        if (typeof img === "string") formDataToSend.append("images", img);
      });

      formData.images.forEach((file) => {
        formDataToSend.append("images", file);
      });

      editingDistinctive
        ? await updateDistinctive(editingDistinctive._id, formDataToSend, token)
        : await addDistinctive(formDataToSend, token);

      await loadDistinctives();
      handleCancelForm();
    } catch (error) {
      console.error("Error saving distinctive:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this feature?")) return;
    try {
      await deleteDistinctive(id, token);
      setDistinctives((prev) => prev.filter((d) => d._id !== id));
      if (selectedLink?._id === id)
        setSelectedLink(distinctives.length > 1 ? distinctives[0] : null);
    } catch (error) {
      console.error("Error deleting distinctive:", error);
    }
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    try {
      const compressedFiles = await Promise.all(
        files.map(async (file) =>
          imageCompression(file, { maxSizeMB: 2, maxWidthOrHeight: 1920 })
        )
      );

      const formattedFiles = compressedFiles.map(
        (f, i) => new File([f], files[i].name, { type: f.type })
      );

      setFormData({
        ...formData,
        images: [...formData.images, ...formattedFiles],
      });
      setPreviewImages([
        ...previewImages,
        ...formattedFiles.map((f) => URL.createObjectURL(f)),
      ]);
    } catch (err) {
      console.error("Image compression failed:", err);
    }
  };

  const removeImage = (index) => {
    const newPreviews = [...previewImages];
    newPreviews.splice(index, 1);
    setPreviewImages(newPreviews);

    const newFiles = [...formData.images];
    newFiles.splice(index, 1);
    setFormData({ ...formData, images: newFiles });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Manage Features</h3>
              <button
                onClick={handleAddNew}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaPlus /> Add New Feature
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {distinctives.map((d) => (
                <div
                  key={d._id}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-lg transition-shadow"
                >
                  {d.images?.length > 0 && (
                    <img
                      src={d.images[0]}
                      alt={d.title}
                      className="rounded-lg mb-3 w-full h-32 object-cover"
                    />
                  )}
                  <h3 className="text-lg font-semibold mb-2">{d.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                    {d.description}
                  </p>
                  <div className="flex justify-between">
                    <button
                      className="text-blue-600 flex items-center gap-1 hover:text-blue-800 transition-colors"
                      onClick={() => handleEdit(d)}
                    >
                      <FaEdit className="text-sm" /> Edit
                    </button>
                    <button
                      className="text-red-600 flex items-center gap-1 hover:text-red-800 transition-colors"
                      onClick={() => handleDelete(d._id)}
                    >
                      <FaTrash className="text-sm" /> Delete
                    </button>
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
                <button
                  onClick={handleAddNew}
                  className="text-blue-600 flex flex-col items-center gap-2 hover:text-blue-800 transition-colors"
                >
                  <FaPlus className="text-2xl" />
                  <span>Add New Feature</span>
                </button>
              </div>
            </div>
          </div>
        );

      case "preview":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Individual Preview</h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Button group */}
              <div className="flex flex-wrap gap-3 mb-6">
                {distinctives.map((d) => (
                  <button
                    key={d._id}
                    className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                      selectedLink?._id === d._id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedLink(d)}
                  >
                    {d.title}
                  </button>
                ))}
              </div>

              {/* Preview content */}
              {selectedLink && (
                <DescLayout desc={selectedLink} isAdminPreview={true} />
              )}
            </div>
          </div>
        );

      case "fullPreview":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Full Layout Preview</h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <Distinctive distinctives={distinctives} isAdminPreview={true} />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Distinctive Features Management
        </h2>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="flex border-b">
          <button
            className={`px-6 py-3 flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === "features"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("features")}
          >
            <FaList /> Features
          </button>
          <button
            className={`px-6 py-3 flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === "preview"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("preview")}
          >
            <FaEye /> Preview
          </button>
          <button
            className={`px-6 py-3 flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === "fullPreview"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("fullPreview")}
          >
            Full Preview
          </button>
        </div>
      </div>

      {renderTabContent()}

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">
            {editingDistinctive ? "Edit Feature" : "Add New Feature"}
          </h3>
          <form onSubmit={handleUpdate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="border rounded p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="border rounded p-2 w-full h-28"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Images</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="border rounded p-2 w-full"
              />
              {previewImages.length > 0 && (
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {previewImages.map((img, i) => (
                    <div key={i} className="relative">
                      <img
                        src={typeof img === "string" ? img : img}
                        alt={`Preview ${i}`}
                        className="w-full h-24 object-cover rounded-lg shadow"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={handleCancelForm}
                className="px-4 py-2 rounded bg-gray-500 text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                {editingDistinctive ? "Update" : "Add"} Feature
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminDistinctivePreview;
