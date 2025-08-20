import React from "react";
import { FaCheckCircle, FaCalendarAlt, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const GuestDetails = () => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
        Guest Information
      </h2>
      <div className="mt-4 grid gap-3 text-gray-600">
        <div className="flex justify-between">
          <span>
            <FaUser className="inline mr-2" /> Guest Name
          </span>
          <span className="font-semibold text-gray-800">Suman Saha</span>
        </div>
        <div className="flex justify-between">
          <span>
            <FaEnvelope className="inline mr-2" /> Email
          </span>
          <span className="font-semibold text-gray-800">
            8759127658tilsaha@gmail.com
          </span>
        </div>
        <div className="flex justify-between">
          <span>
            <FaPhone className="inline mr-2" /> Phone Number
          </span>
          <span className="font-semibold text-gray-800">7797607126</span>
        </div>
      </div>
    </div>
  );
};

export default GuestDetails;
