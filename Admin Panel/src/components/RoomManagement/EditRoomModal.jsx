import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";

const EditRoomModal = ({ isOpen, onClose, onSave, room }) => {
  const [roomData, setRoomData] = useState({
    roomType: "",
    roomPrice: "",
    roomDescription: "",
  });
  const [images, setImages] = useState([]);
  const [newImagePreviews, setNewImagePreviews] = useState([]);
  const [existingImagePreviews, setExistingImagePreviews] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);
  const [heroImage, setHeroImage] = useState(null);
  const [heroImagePreview, setHeroImagePreview] = useState("");
  const [imageError, setImageError] = useState("");
  const [heroImageError, setHeroImageError] = useState("");

  useEffect(() => {
    if (room) {
      setRoomData({
        roomType: room.roomType,
        roomPrice: room.roomPrice,
        roomDescription: room.roomDescription,
      });
      setExistingImagePreviews(room.roomImages || []);
      setHeroImagePreview(room.heroImage || "");
    }
  }, [room]);

  if (!isOpen) return null;

  const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB limit

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    const oversizedFiles = files.filter(file => file.size > MAX_FILE_SIZE);
    if (oversizedFiles.length > 0) {
      setImageError(`One or more files exceed the maximum size of 20MB`);
      setImages([]);
      setNewImagePreviews([]);
      e.target.value = null;
      return;
    }
    
    setImageError("");
    setImages(files);
    
    const previews = files.map(file => URL.createObjectURL(file));
    setNewImagePreviews(previews);
  };

  const handleHeroImageChange = (e) => {
    const file = e.target.files[0];
    
    if (file && file.size > MAX_FILE_SIZE) {
      setHeroImageError(`The hero image exceeds the maximum size of 20MB.`);
      setHeroImage(null);
      setHeroImagePreview("");
      e.target.value = null;
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

  const handleRemoveExistingImage = (index) => {
    const imageToRemove = existingImagePreviews[index];
    setRemovedImages([...removedImages, imageToRemove._id]);
    setExistingImagePreviews(existingImagePreviews.filter((_, i) => i !== index));
  };

  const handleRemoveNewImage = (index) => {
    setNewImagePreviews(newImagePreviews.filter((_, i) => i !== index));
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append("roomType", roomData.roomType);
    formData.append("roomPrice", roomData.roomPrice);
    formData.append("roomDescription", roomData.roomDescription);
    formData.append("removedImages", JSON.stringify(removedImages));

    if (heroImage) {
      formData.append("heroImage", heroImage);
    }

    for (let i = 0; i < images.length; i++) {
      formData.append("roomImages", images[i]);
    }
    
    onSave(formData);
  };

  return (
    <div className="fixed m-auto w-full inset-0 bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl shadow-lg w-[500px] h-[90%] p-8 relative overflow-scroll">
        
        <h2 className="text-2xl font-medium text-center mb-6">Edit Room</h2>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-800 mb-2 text-sm font-medium">
                Room Type
              </label>
              <select
                name="roomType"
                value={roomData.roomType}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 bg-gray-100 focus:outline-none"
              >
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Executive Deluxe Room">Executive Deluxe Room</option>
                <option value="Suite">Suite</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-800 mb-2 text-sm font-medium">
                Price per night ($)
              </label>
              <input
                type="number"
                name="roomPrice"
                min={0}
                value={roomData.roomPrice}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 bg-gray-100 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-800 mb-2 text-sm font-medium">
              Description
            </label>
            <textarea
              name="roomDescription"
              placeholder="Description..."
              value={roomData.roomDescription}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-500 bg-gray-100 focus:outline-none"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-800 mb-2 text-sm font-medium">
              Hero Image
            </label>
            <input
              type="file"
              onChange={handleHeroImageChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 bg-gray-100 focus:outline-none"
            />
            {heroImageError && <span className="text-red-500 text-sm">{heroImageError}</span>}
            {heroImagePreview && (
              <img src={heroImagePreview} alt="Hero preview" className="w-20 h-20 object-cover mt-2" />
            )}
          </div>

          <div>
            <label className="block text-gray-800 mb-2 text-sm font-medium">
              Images
            </label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 bg-gray-100 focus:outline-none"
            />
            {imageError && <span className="text-red-500 text-sm">{imageError}</span>}
          </div>

          <div className="flex flex-wrap gap-2">
            {existingImagePreviews.map((preview, index) => (
              <div key={preview._id} className="relative">
                <img src={preview.url} alt={`Preview ${index}`} className="w-20 h-20 object-cover" />
                <button
                  type="button"
                  onClick={() => handleRemoveExistingImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  <MdCancel size={16} />
                </button>
              </div>
            ))}
            {newImagePreviews.map((preview, index) => (
              <div key={index} className="relative">
                <img src={preview} alt={`Preview ${index}`} className="w-20 h-20 object-cover" />
                <button
                  type="button"
                  onClick={() => handleRemoveNewImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  <MdCancel size={16} />
                </button>
              </div>
            ))}
          </div>

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

export default EditRoomModal;
