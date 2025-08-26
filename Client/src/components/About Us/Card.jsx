import React, { useEffect } from 'react'
import { Img } from "react-image";

const Card = ({obj, index}) => {
  // useEffect(() => {
  //   console.log("Card component received obj:", obj);
  // }, [obj]);

  return (
    <div
    key={index}
    className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col h-[400px] w-[280px]"
  >
    {/* Image */}
    <Img
      src={obj.image}
      alt={obj.title}
      className="w-full h-48 object-cover"
    />

    {/* Text Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-semibold text-xl text-gray-800 mb-3">
        {obj.title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed flex-grow">
        {obj.description}
      </p>
    </div>
  </div>
  )
}

export default Card