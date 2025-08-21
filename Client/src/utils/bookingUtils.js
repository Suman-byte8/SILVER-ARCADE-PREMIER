export const getBookingType = (bookingData) => {
  if (bookingData.arrivalDate) return "accommodation";
  if (bookingData.selectedEvent) return "meeting";
  if (bookingData.timeSlot) return "restaurant";
  return null;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `${formattedDate} at ${formattedTime}`;
};