import React from "react";
import { Img } from "react-image";

const RoomCard = ({ room, key }) => {
  return (
    <div
      key={key}
      className="border border-gray-300 rounded-lg overflow-hidden flex flex-col shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      <div className="w-full h-80 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold">{room.name}</h3>
        <p className="text-gray-600 text-sm mt-1 flex-grow">
          {room.description}
        </p>
        <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;