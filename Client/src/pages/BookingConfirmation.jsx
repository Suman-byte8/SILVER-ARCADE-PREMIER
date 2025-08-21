import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { fetchAccommodationDetails } from '../components/Reservation/api/accommodationApi';
import { getBookingType, formatDate } from "../utils/bookingUtils";
import { FaCheckCircle,FaCalendarAlt,FaBed,FaUser,FaEnvelope,FaPhone } from "react-icons/fa";

const BookingConfirmation = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [booking, setBooking] = useState(null);

  const initialData = location.state?.bookingData || {};
  const bookingId = initialData._id || initialData.bookingId;

  useEffect(() => {
    const getBooking = async () => {
      if (!bookingId) {
        setError("No booking ID found");
        setLoading(false);
        return;
      }

      const token = import.meta.env.VITE_TEMP_TOKEN;
      const { data, error: fetchError } = await fetchAccommodationDetails(bookingId, token);
      
      if (fetchError) {
        setError(fetchError);
        toast.error(fetchError);
      } else {
        setBooking(data);
      }
      
      setLoading(false);
    };

    getBooking();
  }, [bookingId]);

  // Use the fetched booking data or fall back to initial data
  const bookingData = booking || initialData;

  const bookingType = getBookingType(bookingData);

  const renderBookingDetails = () => {
    switch (bookingType) {
      case "accommodation":
        return (
          <div className="font-helvetica-neue text-gray-700">
            <div className="flex items-center gap-3 mb-2 ">
              <FaCalendarAlt className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Check-in</p>
                <p className="font-medium">
                  {formatDate(booking.arrivalDate)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaCalendarAlt className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Check-out</p>
                <p className="font-medium">
                {formatDate(booking.departureDate)}

                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaBed className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Rooms and Guests</p>
                <p className="font-medium">
                  {booking.rooms.length} Room(s), {booking.totalAdults}{" "}
                  Adult(s)
                  {booking.totalChildren > 0 &&
                    `, ${booking.totalChildren} Children`}
                </p>
              </div>
            </div>
            {/* <div className="flex items-center gap-3">
              <FaUser className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Purpose of Travel</p>
                <p className="font-medium capitalize">
                  {bookingData.purposeOfTravel}
                </p>
              </div>
            </div> */}
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
                  {formatDate(bookingData.startDate)} -{" "}
                  {formatDate(bookingData.endDate)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaUser className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Number of Guests</p>
                <p className="font-medium">
                  {bookingData.numberOfGuests} Guests
                </p>
              </div>
            </div>
            {bookingData.numberOfRooms > 0 && (
              <div className="flex items-center gap-3">
                <FaBed className="text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Rooms Required</p>
                  <p className="font-medium">
                    {bookingData.numberOfRooms} Room(s)
                  </p>
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
                <p className="font-medium">
                  {formatDate(bookingData.selectedDate)}
                </p>
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
                <p className="font-medium">
                  {bookingData.numberOfDiners} Person(s)
                </p>
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
    // const name = bookingData.guestName || bookingData.name;
    // const email = bookingData.guestEmail || bookingData.email;
    // const phone = bookingData.guestPhoneNumber || bookingData.phoneNumber;

    return (
      <>
        {booking.guestInfo.name && (
          <div className="flex items-center gap-3 mb-2">
            <FaUser className="text-gray-500" />
            <p>{booking.guestInfo.name}</p>
          </div>
        )}
        {booking.guestInfo.email && (
          <div className="flex items-center gap-3 mb-2">
            <FaEnvelope className="text-gray-500" />
            <p>{booking.guestInfo.email}</p>
          </div>
        )}
        {booking.guestInfo.phoneNumber && (
          <div className="flex items-center gap-3">
            <FaPhone className="text-gray-500" />
            <p>{booking.guestInfo.phoneNumber}</p>
          </div>
        )}
      </>
    );
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-center">
          <p className="text-xl mb-2">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

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
