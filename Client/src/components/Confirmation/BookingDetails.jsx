import React from "react";
import { FaCheckCircle, FaCalendarAlt, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const BookingDetails = () => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
        Booking Details
      </h2>
      <div className="mt-4 grid gap-3 text-gray-600">
        <div className="flex justify-between">
          <span>Confirmation Number</span>
          <span className="font-semibold text-gray-800">#1234567890</span>
        </div>
        <div className="flex justify-between">
          <span>Room Type</span>
          <span className="font-semibold text-gray-800">
            Deluxe Double Room
          </span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <FaCalendarAlt /> Check-in
          </span>
          <span className="font-semibold text-gray-800">Mon, Jul 15, 2025</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <FaCalendarAlt /> Check-out
          </span>
          <span className="font-semibold text-gray-800">Fri, Jul 19, 2025</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <FaUser /> Guests
          </span>
          <span className="font-semibold text-gray-800">2 Adults</span>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
