import React from 'react'
import FullLogo from '../../FullLogo'
import { Link } from 'react-router-dom'

const BeAMember = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col-reverse md:flex-row border-2 border-gray-200 m-8">
    {/* Left Section */}
    <div className="flex-1 p-6 flex flex-col justify-center gap-4">
      {/* Logo & Title */}
      <div className="flex items-center gap-3">
        <FullLogo isFlex={true} />
      </div>

      {/* Subtitle */}
      <p className="text-gray-700">
        A world of exclusive rewards, designed for our most valued guests.
      </p>

      {/* Highlight Text */}
      <p className="text-gray-600 text-sm leading-relaxed py-3 rounded-md">
        Experience simplicity, transparency, and flexibility with Club ITC.
        Effortlessly earn and redeem rewards while enjoying exclusive tier
        based benefits and privileges — reward nights, room upgrades, gourmet
        dining, spa indulgences, and more.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <Link to={"/membership-area"} className="px-5 py-2 rounded-full border border-gray-400 text-gray-700 text-sm hover:bg-gray-100">
          NOT A MEMBER? – JOIN NOW
        </Link>
        <button className="px-5 py-2 rounded-full border border-gray-400 text-gray-700 text-sm hover:bg-gray-100">
          KNOW MORE
        </button>
      </div>
    </div>

    {/* Right Section - Image */}
    <div className="flex-1">
      <img
        src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/club-itc-2-0/home-page/d/club-itc.jpg"
        alt="Piano Scene"
        className="w-full h-full object-cover rounded-r-xl"
      />
    </div>
  </div>
  )
}

export default BeAMember