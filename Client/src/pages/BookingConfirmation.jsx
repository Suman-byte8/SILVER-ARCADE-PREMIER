import React from "react";
import { useLocation } from "react-router-dom";
import {
  FaCheckCircle,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBed,
  FaUtensils,
  FaBuilding,
  FaInfoCircle 
} from "react-icons/fa";

const BookingConfirmation = () => {
  const location = useLocation();
  const bookingData = location.state?.bookingData || {};

  // Helper function to determine booking type
  const getBookingType = () => {
    if (bookingData.arrivalDate) return "accommodation";
    if (bookingData.selectedEvent) return "meeting";
    if (bookingData.timeSlot) return "restaurant";
    return null;
  };

  const bookingType = getBookingType();

  // Format date helper function
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderBookingDetails = () => {
    switch (bookingType) {
      case "accommodation":
        return (
          <div className="font-helvetica-neue text-gray-700">
            <div className="flex items-center gap-3 mb-2 ">
              <FaCalendarAlt className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Check-in</p>
                <p className="font-medium">{formatDate(bookingData.arrivalDate)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaCalendarAlt className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Check-out</p>
                <p className="font-medium">{formatDate(bookingData.departureDate)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaBed className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Rooms and Guests</p>
                <p className="font-medium">
                  {bookingData.rooms?.length} Room(s), {bookingData.totalAdults} Adult(s)
                  {bookingData.totalChildren > 0 && `, ${bookingData.totalChildren} Children`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaUser className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Purpose of Travel</p>
                <p className="font-medium capitalize">{bookingData.purposeOfTravel}</p>
              </div>
            </div>
          </div>
        );

      case "meeting":
        return (
          <>
            <div className="flex items-center gap-3 mb-2">
              <FaBuilding className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Event Type</p>
                <p className="font-medium">{bookingData.selectedEvent}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaCalendarAlt className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Event Duration</p>
                <p className="font-medium">
                  {formatDate(bookingData.startDate)} - {formatDate(bookingData.endDate)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaUser className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Number of Guests</p>
                <p className="font-medium">{bookingData.numberOfGuests} Guests</p>
              </div>
            </div>
            {bookingData.numberOfRooms > 0 && (
              <div className="flex items-center gap-3">
                <FaBed className="text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Rooms Required</p>
                  <p className="font-medium">{bookingData.numberOfRooms} Room(s)</p>
                </div>
              </div>
            )}
          </>
        );

      case "restaurant":
        return (
          <>
            <div className="flex items-center gap-3 mb-2">
              <FaCalendarAlt className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="font-medium">{formatDate(bookingData.selectedDate)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaUtensils className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Time Slot</p>
                <p className="font-medium capitalize">{bookingData.timeSlot}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaUser className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Number of Diners</p>
                <p className="font-medium">{bookingData.numberOfDiners} Person(s)</p>
              </div>
            </div>
            {bookingData.specialRequests && (
              <div className="flex items-center gap-3">
                <FaInfoCircle className="text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Special Requests</p>
                  <p className="font-medium">{bookingData.specialRequests}</p>
                </div>
              </div>
            )}
          </>
        );

      default:
        return null;
    }
  };

  const renderContactDetails = () => {
    const name = bookingData.guestName || bookingData.name;
    const email = bookingData.guestEmail || bookingData.email;
    const phone = bookingData.guestPhoneNumber || bookingData.phoneNumber;

    return (
      <>
        {name && (
          <div className="flex items-center gap-3 mb-2">
            <FaUser className="text-gray-500" />
            <p>{name}</p>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-3 mb-2">
            <FaEnvelope className="text-gray-500" />
            <p>{email}</p>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-3">
            <FaPhone className="text-gray-500" />
            <p>{phone}</p>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 font-helvetica-neue">
      <div className="bg-white shadow-2xl rounded-2xl max-w-2xl w-full p-8">
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-6xl" />
        </div>

        <h1 className="text-2xl text-center text-gray-800 mb-6 font-light">
          Your {bookingType} booking is confirmed!
        </h1>

        {/* Booking Details */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-lg font-normal mb-4">Booking Details</h2>
          {renderBookingDetails()}
        </div>

        {/* Contact Details */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-lg font-normal mb-4">Contact Details</h2>
          {renderContactDetails()}
        </div>

        {/* Additional Notes */}
        {bookingData.additionalDetails && (
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Additional Notes</h2>
            <p className="text-gray-600">{bookingData.additionalDetails}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Download Confirmation
          </button>
          <button className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50">
            Print Details
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          For assistance, please refer to your booking confirmation email or
          contact our support team.
        </p>
      </div>
    </div>
  );
};

export default BookingConfirmation;
