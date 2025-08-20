import React from "react";

const ActionButtons = () => {
  return (
    <div className="flex gap-4 mt-8">
      <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition">
        Download Invoice
      </button>
      <button className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold text-gray-600 hover:bg-gray-100 transition">
        Contact Support
      </button>
    </div>
  );
};

export default ActionButtons;
