import React, { useState } from "react";
import { toast } from 'react-hot-toast';
import FullLogo from "../FullLogo";
import BookingButton from "../Reservation/BookingButton";
import { DatePicker } from "../Reservation/Accommodation/components/DatePicker";
import { RoomSelection } from "../Reservation/Accommodation/components/RoomSelection";
import { GuestInformation } from "../Reservation/Accommodation/components/GuestInformation";
import { createAccommodationBooking } from "./api/accommodationApi";
import { formatDate } from "../../utils/bookingUtils";

export default function AccommodationForm({ onSubmit }) {
  // State declarations
  const [showArrivalCalendar, setShowArrivalCalendar] = useState(false);
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
  const [showRoomSelection, setShowRoomSelection] = useState(false);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [arrivalDate, setArrivalDate] = useState(today);
  const [departureDate, setDepartureDate] = useState(tomorrow);
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);
  const [guestName, setGuestName] = useState("");
  const [guestPhoneNumber, setGuestPhoneNumber] = useState("");
  const [guestEmail, setGuestEmail] = useState("");

  const handleDateSelect = (date, type) => {
    if (type === "arrival") {
      setArrivalDate(date);
      setShowArrivalCalendar(false);
      if (date >= departureDate) {
        const newDeparture = new Date(date);
        newDeparture.setDate(date.getDate() + 1);
        setDepartureDate(newDeparture);
      }
    } else {
      if (date > arrivalDate) {
        setDepartureDate(date);
        setShowDepartureCalendar(false);
      }
    }
  };

  const addRoom = () => {
    setRooms([...rooms, { adults: 1, children: 0 }]);
  };

  const removeRoom = (index) => {
    if (rooms.length > 1) {
      const updatedRooms = rooms.filter((_, i) => i !== index);
      setRooms(updatedRooms);
    }
  };

  const updateCount = (roomIndex, type, delta) => {
    const updatedRooms = [...rooms];
    const newValue = Math.max(0, updatedRooms[roomIndex][type] + delta);
    updatedRooms[roomIndex][type] = newValue;
    setRooms(updatedRooms);
  };

  const getTotalAdults = () =>
    rooms.reduce((sum, room) => sum + room.adults, 0);
  const getTotalChildren = () =>
    rooms.reduce((sum, room) => sum + room.children, 0);

  const resetForm = () => {
    setRooms([{ adults: 1, children: 0 }]);
    setGuestName('');
    setGuestPhoneNumber('');
    setGuestEmail('');
  };

  const handleSubmit = async () => {
    try {
      // Form validation
      if (!guestName || !guestPhoneNumber || !guestEmail) {
        toast.error('Please fill in all guest information');
        return;
      }

      const formData = {
        arrivalDate: arrivalDate.toISOString(),
        departureDate: departureDate.toISOString(),
        rooms,
        totalAdults: getTotalAdults(),
        totalChildren: getTotalChildren(),
        guestInfo: {
          name: guestName,
          phoneNumber: guestPhoneNumber,
          email: guestEmail
        }
      };

      const token = import.meta.env.VITE_TEMP_TOKEN;
      const { data, error } = await createAccommodationBooking(formData, token);

      if (error) {
        toast.error(error);
        return;
      }

      toast.success('Booking successful!');
      onSubmit({
        ...data,
        bookingId: data._id
      });

      // Reset form
      resetForm();
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Something went wrong with the booking');
    }
  };

  return (
    <div className="flex-1 p-8">
      <FullLogo text={"xs"} />
      
      {/* Date Selection */}
      <div className="flex flex-col md:flex-row gap-6 mb-6 mt-4">
        <DatePicker
          label="ARRIVAL"
          selectedDate={arrivalDate}
          showCalendar={showArrivalCalendar}
          onToggleCalendar={() => {
            setShowArrivalCalendar(!showArrivalCalendar);
            setShowDepartureCalendar(false);
          }}
          onDateSelect={(date) => handleDateSelect(date, "arrival")}
          minDate={today}
          formatDate={formatDate}
        />
        <DatePicker
          label="DEPARTURE"
          selectedDate={departureDate}
          showCalendar={showDepartureCalendar}
          onToggleCalendar={() => {
            setShowDepartureCalendar(!showDepartureCalendar);
            setShowArrivalCalendar(false);
          }}
          onDateSelect={(date) => handleDateSelect(date, "departure")}
          minDate={arrivalDate}
          formatDate={formatDate}
        />
      </div>

      <RoomSelection
        rooms={rooms}
        showRoomSelection={showRoomSelection}
        onToggleRoomSelection={() => setShowRoomSelection(!showRoomSelection)}
        onUpdateCount={updateCount}
        onAddRoom={addRoom}
        onRemoveRoom={removeRoom}
        getTotalAdults={getTotalAdults}
        getTotalChildren={getTotalChildren}
      />

      <GuestInformation
        guestName={guestName}
        guestPhoneNumber={guestPhoneNumber}
        guestEmail={guestEmail}
        onGuestNameChange={(e) => setGuestName(e.target.value)}
        onPhoneNumberChange={(e) => setGuestPhoneNumber(e.target.value)}
        onEmailChange={(e) => setGuestEmail(e.target.value)}
      />

      <BookingButton text={"Book"} onSubmit={handleSubmit} />
    </div>
  );
}



