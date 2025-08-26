import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaPowerOff, FaPager, FaAngleDoubleUp } from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import {
  MdMeetingRoom,
  MdMenuBook,
  MdCardMembership,
  MdPayment,
} from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { RiReservedFill, RiServiceFill } from "react-icons/ri";
import { IoIosPeople, IoMdSettings } from "react-icons/io";
// import { RiServiceFill } from "react-icons/ri";

export default function Sidebar() {
  const ref = useRef(null);
  //   useEffect(()=>{ gsap.from(ref.current,{x:-60,opacity:0,duration:.6,ease:"power2"}); },[]);
  return (
    <aside
      ref={ref}
      className="w-64 bg-gray-800 text-white flex flex-col p-4 space-y-6 overflow-y-auto sticky top-0 h-screen"
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
    >
      <div className="flex flex-col items-center space-y-2">
        <div className="w-24 h-24 rounded-full bg-gray-300 border-4 border-white/25" />
        <div className="font-semibold text-2xl">Admin</div>
        <div className="text-lg opacity-90">random@gmail.com</div>
      </div>

      <ul className="flex flex-col space-y-1">
        <li>
          <Link to="/" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer gap-2">
            <TbLayoutDashboardFilled />
            <span className="">Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/room-management" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer gap-2">
            <MdMeetingRoom />
            <span className="">Room Management</span>
          </Link>
        </li>

        <li>
          <Link to="/menu-management" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer gap-2">
            <MdMenuBook />
            <span className="">Menu</span>
          </Link>
        </li>

        <li>
          <Link to="/page-management" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer gap-2">
            <FaPager />
            <span className="">Page Management</span>
          </Link>
        </li>

        <li>
          <Link to="/about-management" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer gap-2">
            <FaAngleDoubleUp />
            <span className="">About Management</span>
          </Link>
        </li>

        <li>
          <Link to="/offer-management" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer gap-2">
            <BiSolidOffer />
            <span className="">Offers</span>
          </Link>
        </li>

        <li>
          <Link to="/facility-management" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer gap-2">
            < RiServiceFill />
            <span className="">Facilities</span>
          </Link>
        </li>


        <li>
          <Link to="/reservations" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer gap-2">
            <RiReservedFill />
            <span className="">Reservation</span>
          </Link>
        </li>

        <li>
          <Link to="/membership" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer gap-2">
            <MdCardMembership />
            <span className="">Membership</span>
          </Link>
        </li>

        <li>
          <Link to="/payments-links-management" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer gap-2">
            <MdPayment />
            <span className="">Payment Links</span>
          </Link>
        </li>

        <li>
          <Link to="/staff-management" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer gap-2">
            <IoIosPeople />
            <span className="">Staff Management</span>
          </Link>
        </li>

        <li>
          <Link to="/settings" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer gap-2">
            <IoMdSettings />
            <span className="">Settings</span>
          </Link>
        </li>
      </ul>

      <div className="mt-auto flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
        <FaPowerOff />
        <span>Logout</span>
      </div>
    </aside>
  );
}
