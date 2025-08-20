import React from "react";
import logo from "/logo.png";

const FullLogo = ({ isFlex = true, classes = "",text }) => (
  <div
    className={`_logo p-2 ${isFlex ? "flex-row gap-2" : "flex-col"} flex items-center justify-center w-full ${classes}`}
  >
    <img src={logo} alt="logo" className="w-10 h-10" />
    <span className={`uppercase ${text?text:"text-xl"} font-bold text-[#02008F]`}>
      Silver Arcade Premier
    </span>
  </div>
);

export default FullLogo;
