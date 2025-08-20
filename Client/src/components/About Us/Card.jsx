import React from 'react'

const Card = ({obj, index}) => {
  return (
    <div
    key={index}
    className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
  >
    {/* Image */}
    <img
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