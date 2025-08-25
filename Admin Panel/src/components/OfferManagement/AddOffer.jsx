import React, { useState, useRef } from "react";
import { X, Upload } from "lucide-react";

const AddOffer = ({ offer = {}, onSave, onCancel, onDelete }) => {
  const [form, setForm] = useState({
    title: offer.title || "",
    description: offer.description || "",
    details: offer.details || [""],
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleDetailChange = (idx, value) => {
    const newDetails = [...form.details];
    newDetails[idx] = value;
    setForm({ ...form, details: newDetails });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
      setForm({ ...form, image: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "details") {
        fd.append(key, JSON.stringify(value));
      } else if (value) {
        fd.append(key, value);
      }
    });
    onSave(fd);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onCancel}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">{offer._id ? "Edit Offer" : "Add Offer"}</h2>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleChange(e, "title")}
              placeholder="Title"
              className="w-full border px-3 py-2 rounded"
              required
            />
            <input
              type="text"
              value={form.path}
              onChange={(e) => handleChange(e, "path")}
              placeholder="URL Path (e.g., /special-offer)"
              className="w-full border px-3 py-2 rounded"
              required
            />
            <textarea
              value={form.description}
              onChange={(e) => handleChange(e, "description")}
              placeholder="Description"
              className="w-full border px-3 py-2 rounded"
              rows={3}
              required
            />
            <div
              className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-[#2c5e6e] transition-all duration-200 cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="rounded-lg max-h-48 object-cover mb-4"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <Upload size={32} className="text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 font-medium">
                    Click to upload image
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PNG, JPG, JPEG up to 10MB
                  </p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {form.details.map((detail, idx) => (
              <input
                key={idx}
                type="text"
                value={detail}
                onChange={(e) => handleDetailChange(idx, e.target.value)}
                placeholder={`Detail ${idx + 1}`}
                className="w-full border px-3 py-2 rounded"
              />
            ))}
            <button
              type="button"
              onClick={() => setForm({ ...form, details: [...form.details, ""] })}
              className="text-blue-600 text-sm"
            >
              + Add Detail
            </button>

            <div className="flex gap-3 mt-4">
              <button type="submit" className="bg-[#2c5e6e] text-white px-4 py-2 rounded">
                Save
              </button>
              {onCancel && (
                <button
                  type="button"
                  onClick={onCancel}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              )}
              {offer._id && onDelete && (
                <button
                  type="button"
                  onClick={onDelete}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddOffer;
