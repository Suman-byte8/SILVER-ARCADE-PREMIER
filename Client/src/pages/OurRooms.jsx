import React, { useState } from "react";
import RoomCard from "../components/Our Rooms/RoomCard";

const rooms = [
  { name: "Deluxe Room", description: "Spacious deluxe room with king-size bed and city views.", type: "deluxe", image: "https://www.silverarcadepremier.com/images/room1.jpeg" },
  { name: "Executive Deluxe Room", description: "Perfect for two guests with modern amenities.", type: "executive deluxe", image: "https://www.silverarcadepremier.com/images/room2.jpeg" },
  { name: "Suite", description: "Luxurious suite with living area and premium facilities.", type: "suite", image: "https://www.silverarcadepremier.com/images/room3.jpeg" },

];

const OurRooms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          room.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || room.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white min-h-screen flex flex-col px-4">
      <div className="text-center mt-12">
        <h1 className="text-3xl font-light tracking-wide">FIND YOUR PERFECT STAY</h1>
        <p className="text-gray-600 mt-2">Search for the best rooms in Malda</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full sm:max-w-md">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
          </svg>
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
          <option value="deluxe">Deluxe</option>
          <option value="executive deluxe">Executive Deluxe</option>
          <option value="single">Single</option>
          <option value="suite">Suite</option>
        </select>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10">
        <h2 className="text-xl font-semibold mb-6">Available Rooms</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room, index) => (
              <RoomCard key={index} room={room} />
            ))
          ) : (
            <p className="text-gray-500">No rooms match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurRooms;
