import React from "react";
import { MdCancel } from "react-icons/md";

const AddRoomModal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl shadow-lg w-[500px] p-8 relative">
        
        {/* Title */}
        <h2 className="text-2xl font-medium text-center mb-6">Add New Room</h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Room Number</label>
            <input
              type="text"
              className="w-full border rounded-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Room Type</label>
              <input
                type="text"
                className="w-full border rounded-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Price/Night</label>
              <input
                type="text"
                className="w-full border rounded-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Status</label>
            <input
              type="text"
              className="w-full border rounded-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              rows="3"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none"
            ></textarea>
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
              onClick={onSave}
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
