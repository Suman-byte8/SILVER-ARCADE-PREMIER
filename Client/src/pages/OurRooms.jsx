import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomCard from "../components/Our Rooms/RoomCard";
import AddInfo from "../components/Our Rooms/AddInfo";
import { CiSearch } from "react-icons/ci";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

// Default room image (using one of the existing images as fallback)
import defaultRoomImg from "../assets/Rooms/deluxe.jpg";


const OurRooms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = import.meta.env.VITE_TEMP_TOKEN
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${API_URL}/rooms/get-rooms`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        // Transform the API data to match RoomCard component expectations
        const transformedRooms = response.data.rooms.map(room => ({
          ...room,
          name: room.roomName,
          description: room.roomDescription,
          image: room.heroImage || (room.roomImages && room.roomImages.length > 0 ? room.roomImages[0].url : defaultRoomImg)
        }));
        
        setRooms(transformedRooms);
      } catch (err) {
        setError("Failed to fetch rooms");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.roomName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.roomDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || room.roomType === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white min-h-screen flex flex-col px-4">
      <div className="text-center mt-12">
        <h1 className="text-3xl font-light tracking-wide">
          FIND YOUR PERFECT STAY
        </h1>
        <p className="text-gray-600 mt-2">Search for the best rooms in Malda</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full sm:max-w-md">
        <CiSearch />

          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border-none outline-none px-2"
          />
        </div>

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 w-full sm:w-auto"
        >
          <option value="all">All Types</option>
          <option value="Deluxe Room">Deluxe</option>
          <option value="Executive Deluxe Room">Executive Deluxe</option>
          <option value="Suite">Suite</option>
        </select>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10">
        <h2 className="text-xl font-semibold mb-6">Available Rooms</h2>
        {loading ? (
          <p>Loading rooms...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room, index) => (
                <RoomCard key={index} room={room} />
              ))
            ) : (
              <p className="text-gray-500">No rooms match your search.</p>
            )}
          </div>
        )}
      </div>

      <AddInfo />
    </div>
  );
};

export default OurRooms;
