import AddRoomModal from "@/components/RoomManagement/AddRoomModal";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EditRoomPage() {
  return (
    <div className="w-full bg-white p-8 rounded-lg">
      {/* Back link */}
      <Link to="/room-management" className="flex items-center text-gray-700 cursor-pointer mb-6">
        <FaArrowLeft className="mr-2" />
        <span className="text-sm font-medium">Back to Room Management</span>
      </Link>

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900 pb-4">Edit Room 101</h1>

      {/* Form */}
      <form className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 mb-2 text-sm font-medium">
              Room Number
            </label>
            <input
              type="text"
            //   value="102"
            
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-800 mb-2 text-sm font-medium">
              Room Type
            </label>
            <select
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 bg-gray-100 focus:outline-none"
            >
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 mb-2 text-sm font-medium">
              Price per night ($)
            </label>
            <input
              type="number"
            //   value="80"
             min={0}
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-800 mb-2 text-sm font-medium">
              Status
            </label>
            <select
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 bg-gray-100 focus:outline-none"
            >
              <option value="available">Available</option>
              <option value="occupied">Occupied</option>
              <option value="maintenance">Under Maintenance</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-800 mb-2 text-sm font-medium">
            Description
          </label>
          <textarea
            // value="lorem ipsum ...."
            placeholder="Description..."
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-500 bg-gray-100 focus:outline-none"
            rows="4"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="button"
            className="px-6 py-2 rounded-full bg-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-[#9fc9d6] text-gray-900 text-sm font-medium hover:bg-[#8fb9c6]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
