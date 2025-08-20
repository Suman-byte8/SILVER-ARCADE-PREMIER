import { useState } from "react";

export default function Membership() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    country: "India",
    city: "",
    countryCode: "+91",
    phoneNumber: "",
    email: "",
    otpMethod: "email",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 max-h-[screen-height] p-6 bg-white gap-8">
      {/* Left Form Section */}
      <div className="w-full space-y-4">
        <h1 className="text-2xl font-semibold flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span>Membership Plan</span>
        </h1>
        <p className="text-gray-600">
          Enroll into{" "}
          <span className="font-semibold">SILVER ARCADE Premier</span>, a
          membership that makes you feel rewarded.
        </p>
        <p className="text-sm text-gray-400 italic">
          All fields are mandatory other than phone number for international
          guests
        </p>

        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="firstName"
            placeholder="Enter First Name"
            value={form.firstName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            name="lastName"
            placeholder="Enter Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Password Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm your Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Country & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            name="city"
            placeholder="Select your city"
            value={form.city}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            name="phoneNumber"
            placeholder="Enter your Mobile Number"
            value={form.phoneNumber}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Email */}
        <input
          name="email"
          placeholder="Enter your Email Address"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        {/* OTP Options */}
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setForm({ ...form, otpMethod: "email" })}
            className={`px-4 py-2 rounded ${
              form.otpMethod === "email"
                ? "bg-gray-800 text-white"
                : "bg-gray-200"
            }`}
          >
            EMAIL ADDRESS
          </button>
          <button
            type="button"
            onClick={() => setForm({ ...form, otpMethod: "mobile" })}
            className={`px-4 py-2 rounded ${
              form.otpMethod === "mobile"
                ? "bg-gray-800 text-white"
                : "bg-gray-200"
            }`}
          >
            MOBILE NUMBER
          </button>
        </div>

        {/* Generate OTP */}
        <button className="px-6 py-2 border rounded-full hover:bg-gray-100">
          GENERATE OTP
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full flex justify-center items-center rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1565688842882-e0b2693d349a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVtYmVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Membership"
          className="rounded-lg object-contain w-full h-full max-w-md"
        />
      </div>
    </div>
  );
}
