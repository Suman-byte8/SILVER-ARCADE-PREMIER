import React, { useState } from "react";
import {
  FaBuilding,
  FaUtensils,
  FaUser,
  FaInfoCircle,
  FaCalendarAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Calendar from "./Calender";
import FullLogo from "../FullLogo";
import BookingButton from "./BookingButton";

export default function RestaurantReservationForm({ onSubmit }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [numberOfDiners, setNumberOfDiners] = useState(1);
  const [timeSlot, setTimeSlot] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestPhoneNumber, setGuestPhoneNumber] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [agreeToTnC, setAgreeToTnC] = useState(false);

  const handleSubmit = () => {
    const formData = {
      selectedDate: selectedDate.toISOString(),
      numberOfDiners,
      timeSlot,
      specialRequests,
      additionalDetails,
      guestName,
      guestPhoneNumber,
      guestEmail,
      agreeToTnC,
    };
    onSubmit(formData);
  };

  return (
    <div className="flex-1 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FullLogo text={"xs"} />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            NO OF DINERS
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaBuilding className="text-gray-500 mr-2" />
            <input
              type="number"
              placeholder="Enter no of diners"
              className="flex-1 outline-none bg-transparent"
              min={1}
              value={numberOfDiners}
              onChange={(e) => setNumberOfDiners(parseInt(e.target.value) || 1)}
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            DATE
          </label>
          <div
            className="flex items-center border border-gray-300 rounded-lg px-3 py-3 cursor-pointer"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="flex-1 outline-none bg-transparent">
              {selectedDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <svg
              className="w-4 h-4 ml-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {showCalendar && (
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={(date) => {
                setSelectedDate(date);
                setShowCalendar(false);
              }}
              minDate={new Date()}
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            TIME SLOT
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaClock className="text-gray-500 mr-2" />
            <select
              className="flex-1 outline-none bg-transparent text-gray-700"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
            >
              <option value="">Select Meal Period</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
            <svg
              className="w-4 h-4 ml-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            (ALL OUTLETS MAY NOT BE OPERATIONAL ACROSS ALL TIME SLOTS)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            SPECIAL REQUESTS
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaUtensils className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Special Requests"
              className="flex-1 outline-none bg-transparent"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
            />
            <svg
              className="w-4 h-4 ml-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            PLEASE SHARE ADDITIONAL DETAILS
          </label>
          <div className="flex items-start border border-gray-300 rounded-lg px-3 py-3">
            <svg
              className="text-gray-500 mr-2 mt-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <textarea
              placeholder="Please share additional details"
              className="flex-1 outline-none resize-none bg-transparent"
              rows={3}
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
            />
          </div>
        </div>

        {/* Guest Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Guest Name
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter guest name"
              className="flex-1 outline-none bg-transparent"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Guest Phone Number
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaPhone className="text-gray-500 mr-2" />
            <input
              type="tel"
              placeholder="Enter phone number"
              className="flex-1 outline-none bg-transparent"
              value={guestPhoneNumber}
              onChange={(e) => setGuestPhoneNumber(e.target.value)}
            />
            <FaInfoCircle className="text-gray-400 ml-2" />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Guest Email
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 outline-none bg-transparent"
              value={guestEmail}
              onChange={(e) => setGuestEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 flex items-start gap-2 mb-6">
          <input
            type="checkbox"
            className="w-4 h-4 mt-1"
            checked={agreeToTnC}
            onChange={(e) => setAgreeToTnC(e.target.checked)}
          />
          <span className="text-sm text-gray-700">
            By submitting request, I agree to & accept the{" "}
            <a href="#" className="text-blue-600">
              TnC
            </a>{" "}
            of the website & grant consent for using this information for
            product & promotional offers.
          </span>
        </div>
      </div>
      <BookingButton
        text={"Place Your Reservation Request"}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
