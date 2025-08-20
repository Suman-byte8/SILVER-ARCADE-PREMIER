import React from "react";

const BookingButton = ({text, onSubmit}) => {
  return (
    <button onClick={() => onSubmit()} className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg text-lg font-medium w-full lg:w-[40%]">
      {text}
    </button>
  );
};

export default BookingButton;
