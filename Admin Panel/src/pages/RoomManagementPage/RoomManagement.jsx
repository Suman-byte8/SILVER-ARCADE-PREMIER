import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaTrash,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AddRoomModal from "../../components/RoomManagement/AddRoomModal";

export default function RoomManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const rooms = [
    {
      no: "101",
      type: "Single",
      status: "Available",
      allotted: "Empty",
      price: 3500.0,
    },
    {
      no: "101",
      type: "Double",
      status: "Occupied",
      allotted: "Liam",
      price: 3500.0,
    },
    {
      no: "101",
      type: "Single",
      status: "Maintenance",
      allotted: "Empty",
      price: 3500.0,
    },
    {
      no: "101",
      type: "Dorm (4 bed)",
      status: "Available",
      allotted: "Empty",
      price: 3500.0,
    },
    {
      no: "101",
      type: "Single",
      status: "Available",
      allotted: "Empty",
      price: 3500.0,
    },
    {
      no: "101",
      type: "Single",
      status: "Available",
      allotted: "Empty",
      price: 3500.0,
    },
    {
      no: "101",
      type: "Single",
      status: "Available",
      allotted: "Empty",
      price: 3500.0,
    },
    {
      no: "101",
      type: "Single",
      status: "Available",
      allotted: "Empty",
      price: 3500.0,
    },
    {
      no: "101",
      type: "Single",
      status: "Available",
      allotted: "Empty",
      price: 3500.0,
    },
    {
      no: "101",
      type: "Single",
      status: "Available",
      allotted: "Empty",
      price: 3500.0,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-200 text-green-800";
      case "Occupied":
        return "bg-red-200 text-red-800";
      case "Maintenance":
        return "bg-yellow-200 text-yellow-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveRoom = () => {
    // Add logic to save the new room here
    console.log("Room saved");
    setIsModalOpen(false);
  };

  return (
    <div className="w-full p-6 rounded-lg relative">
      {/* Header */}
      <div className="_header w-full flex items-center justify-between">
      <h2 className="text-2xl font-semibold text-[#2b4c5b]">Room Management</h2>
      <button
        className="bg-blue-500 p-2 rounded-lg text-white text-sm font-medium hover:bg-blue-600"
        onClick={handleOpenModal}
      >
        + Add New Room
      </button>
      </div>
      
      {/* Filter buttons */}
      <div className="flex gap-3 mt-4">
        {["All", "Available", "Occupied", "Maintenance"].map((label) => (
          <button
            key={label}
            className="px-5 py-1 bg-[#2b4c5b] text-white rounded-full text-sm font-medium"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-400 bg-gray-300">
              <th className="text-left text-gray-600 text-sm py-2">
                ROOM NO/NAME
              </th>
              <th className="text-left text-gray-600 text-sm py-2">
                ROOM TYPE
              </th>
              <th className="text-left text-gray-600 text-sm py-2">STATUS</th>
              <th className="text-left text-gray-600 text-sm py-2">
                ALLOTTED TO
              </th>
              <th className="text-left text-gray-600 text-sm py-2">
                PRICE/NIGHT
              </th>
              <th className="text-left text-gray-600 text-sm py-2">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, idx) => (
              <tr key={idx} className="border-b border-gray-200">
                <td className="py-3 text-sm text-gray-800">{room.no}</td>
                <td className="py-3 text-sm text-gray-800">{room.type}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      room.status
                    )}`}
                  >
                    {room.status}
                  </span>
                </td>
                <td className="py-3 text-sm text-gray-800">{room.allotted}</td>
                <td className="py-3 text-sm text-gray-800">
                  {room.price.toFixed(2)}
                </td>
                <td className="py-3 flex gap-4 text-sm text-gray-400">
                 <Link to={"/room-management/edit-room"}><FaEdit className="cursor-pointer hover:text-blue-600" /></Link>
                  <FaTrash className="cursor-pointer hover:text-red-600" />
                  <FaUserPlus className="cursor-pointer hover:text-green-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <span>Showing 1 to 10 of 37 results</span>
        <div className="flex gap-2 items-center">
          <FaChevronLeft />
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                num === 1 ? "bg-blue-200" : "bg-gray-200"
              }`}
            >
              {num}
            </button>
          ))}
          <FaChevronRight />
        </div>
      </div>
      
      {/* Add Room Modal */}
      <AddRoomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveRoom}
      />
    </div>
  );
}
