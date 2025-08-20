import React from 'react'
import { FaCheckCircle, FaCalendarAlt, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";


const PaymentSummary = () => {
  return (
    <div className="mt-8">
    <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Payment Summary</h2>
    <div className="mt-4 grid gap-3 text-gray-600">
      <div className="flex justify-between">
        <span>Room Rate (4 nights)</span>
        <span className="font-semibold text-gray-800">$700.00</span>
      </div>
      <div className="flex justify-between">
        <span>Taxes & Fees</span>
        <span className="font-semibold text-gray-800">$120.00 (18% GST)</span>
      </div>
      <div className="flex justify-between text-lg font-bold border-t pt-3">
        <span>Total</span>
        <span className="text-green-600">$920.00</span>
      </div>
    </div>
  </div>
  )
}

export default PaymentSummary