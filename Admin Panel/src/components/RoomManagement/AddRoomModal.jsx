import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

const AddRoomModal = ({ isOpen, onClose, onSave }) => {
  const [roomNumber, setRoomNumber] = useState("");
  const [roomType, setRoomType] = useState("Deluxe Room");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [heroImage, setHeroImage] = useState(null);
  const [heroImagePreview, setHeroImagePreview] = useState("");
  const [imageError, setImageError] = useState("");
  const [heroImageError, setHeroImageError] = useState("");

  if (!isOpen) return null;

  const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB limit

  // Helper function to format file size for display
  function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    // Validate file sizes
    const oversizedFiles = files.filter(file => file.size > MAX_FILE_SIZE);
    if (oversizedFiles.length > 0) {
      setImageError(`One or more files exceed the maximum size of 20MB`);
      setImages([]);
      setImagePreviews([]);
      e.target.value = null; // Clear the file input
      return;
    }
    
    setImageError("");
    setImages(files);
    
    // Create previews
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleHeroImageChange = (e) => {
    const file = e.target.files[0];
    
    // Validate hero image size
    if (file && file.size > MAX_FILE_SIZE) {
      setHeroImageError(`The hero image exceeds the maximum size of 20MB.`);
      setHeroImage(null);
      setHeroImagePreview("");
      e.target.value = null; // Clear the file input
      return;
    }
    
    setHeroImageError("");
    if (file) {
      setHeroImage(file);
      setHeroImagePreview(URL.createObjectURL(file));
    } else {
      setHeroImage(null);
      setHeroImagePreview("");
    }
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append("roomName", roomNumber);
    formData.append("roomType", roomType);
    formData.append("roomPrice", price);
    formData.append("roomDescription", description);
    
    // Append hero image
    if (heroImage) {
      formData.append("heroImage", heroImage);
    }
    
    // Append all images
    for (let i = 0; i < images.length; i++) {
      formData.append("roomImages", images[i]);
    }
    
    onSave(formData);
  };

  return (
    <div className="fixed m-auto w-full inset-0 bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl shadow-lg w-[500px] h-[90%] p-8 relative overflow-scroll">
        
        {/* Title */}
        <h2 className="text-2xl font-medium text-center mb-6">Add New Room</h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Room Number</label>
            <input
              type="text"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              className="w-full border rounded-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Room Type</label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full border rounded-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
              >
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Executive Deluxe Room">Executive Deluxe Room</option>
                <option value="Suite">Suite</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Price/Night</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border rounded-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Images</label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="w-full border rounded-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            {imageError && <span className="text-red-500 text-sm">{imageError}</span>}
          </div>
          <div>
            <label className="block text-sm mb-1">Hero Image</label>
            <input
              type="file"
              onChange={handleHeroImageChange}
              className="w-full border rounded-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            {heroImageError && <span className="text-red-500 text-sm">{heroImageError}</span>}
            {heroImagePreview && (
              <img src={heroImagePreview} alt="Hero preview" className="w-20 h-20 object-cover mt-2" />
            )}
          </div>
          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none"
            ></textarea>
          </div>

          {/* Image Previews */}
          <div className="flex flex-wrap gap-2">
            {imagePreviews.map((preview, index) => (
              <img key={index} src={preview} alt={`Preview ${index}`} className="w-20 h-20 object-cover" />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-5 py-2 rounded-full"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="bg-[#b3d6de] text-gray-800 px-5 py-2 rounded-full"
            >
              Save Changes
            </button>
          </div>
        </form>

        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <MdCancel size={24} />
        </button>
      </div>
    </div>
  );
};

export default AddRoomModal;
