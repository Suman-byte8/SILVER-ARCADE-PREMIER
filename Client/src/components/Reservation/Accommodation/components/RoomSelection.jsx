import React from 'react';
import { FaBed, FaUser, FaInfoCircle, FaChevronUp, FaChevronDown, FaPlus, FaMinus } from "react-icons/fa";

export const RoomSelection = ({
  rooms,
  showRoomSelection,
  onToggleRoomSelection,
  onUpdateCount,
  onAddRoom,
  onRemoveRoom,
  getTotalAdults,
  getTotalChildren
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-6">
      <div className="flex-1 relative">
        <div
          className="flex items-center border border-gray-300 rounded-lg px-3 py-3 cursor-pointer hover:border-gray-400"
          onClick={onToggleRoomSelection}
        >
          <FaBed className="text-gray-500 mr-2" />
          <span className="text-gray-700">
            {rooms.length} Room{rooms.length > 1 ? "s" : ""}
          </span>
          {showRoomSelection ? (
            <FaChevronUp className="ml-auto text-gray-400" />
          ) : (
            <FaChevronDown className="ml-auto text-gray-400" />
          )}
        </div>
        {/* Room Selection Dropdown */}
        {/* ... Rest of the room selection UI ... */}
      </div>
      <div className="flex-1">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
          <FaUser className="text-gray-500 mr-2" />
          <span className="text-gray-700">
            {getTotalAdults()} Adult{getTotalAdults() > 1 ? "s" : ""},{" "}
            {getTotalChildren()} Child{getTotalChildren() !== 1 ? "ren" : ""}
          </span>
          <FaInfoCircle className="text-gray-400 ml-2" />
        </div>
      </div>
    </div>
  );
};