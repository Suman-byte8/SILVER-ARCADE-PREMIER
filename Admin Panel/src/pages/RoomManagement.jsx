// src/pages/RoomManagement/RoomManagement.jsx
import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaSpinner } from "react-icons/fa";
import AddRoomModal from "../components/RoomManagement/AddRoomModal";
import EditRoomModal from "../components/RoomManagement/EditRoomModal";
import { getRooms, addRoom, updateRoom, deleteRoom } from "../services/rooms";

export default function RoomManagement() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const token = import.meta.env.VITE_TEMP_ADMIN_TOKEN;

  // Fetch Rooms
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getRooms(token);
        setRooms(data);
        console.log(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch rooms");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  // Add Room
  const handleAddRoom = async (formData) => {
    try {
      const newRoom = await addRoom(formData, token);
      setRooms((prev) => [...prev, newRoom]);
      setIsAddOpen(false);
    } catch (err) {
      console.error(err);
      alert("Error adding room");
    }
  };

  // Update Room
  const handleUpdateRoom = async (id, formData) => {
    try {
      const updated = await updateRoom(id, formData, token);
      setRooms((prev) =>
        prev.map((room) => (room._id === id ? updated : room))
      );
      setIsEditOpen(false);
      setSelectedRoom(null);
    } catch (err) {
      console.error(err);
      alert("Error updating room");
    }
  };

  // Delete Room
  const handleDeleteRoom = async (id) => {
    if (!confirm("Delete this room?")) return;
    try {
      await deleteRoom(id, token);
      setRooms((prev) => prev.filter((room) => room._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting room");
    }
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-[#2c5e6e]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-red-600 font-medium">{error}</div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Room Management</h1>
        <button
          onClick={() => setIsAddOpen(true)}
          className="bg-[#2c5e6e] text-white px-4 py-2 rounded-lg hover:bg-[#244c58] flex items-center gap-2"
        >
          <FaPlus /> Add Room
        </button>
      </div>

      {/* Rooms List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room._id} className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between mb-4">
            <div>
              {room.heroImage && (
                <img
                  src={room.heroImage}
                  alt={room.roomName}
                  className="mt-3 w-full h-40 object-cover rounded-lg"
                />
              )}
              <h2 className="text-lg font-semibold text-gray-800 mt-4">
                {room.roomName}
              </h2>
              <p className="text-sm text-gray-500">{room.roomType}</p>
              <p className="mt-2 text-gray-600">
                Capacity: {room.roomCapacity}
              </p>
              <p className="text-gray-600">
                Price: ₹{room.roomPrice.toLocaleString()}
              </p>
              <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                {room.roomDescription}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => {
                  setSelectedRoom(room);
                  setIsEditOpen(true);
                }}
                className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-1"
              >
                <FaEdit /> Edit
              </button>
              <button
                onClick={() => handleDeleteRoom(room._id)}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 flex items-center justify-center gap-1"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      <AddRoomModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSave={handleAddRoom}
      />
      {selectedRoom && (
        <EditRoomModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          onSave={(formData) => handleUpdateRoom(selectedRoom._id, formData)}
          room={selectedRoom}
        />
      )}
    </div>
  );
}
