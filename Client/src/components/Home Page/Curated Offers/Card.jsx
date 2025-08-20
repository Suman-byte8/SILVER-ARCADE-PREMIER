import React, { useEffect } from 'react'

const Card = ({offers, className}) => {
    
  return (
    <div className={`w-[360px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 ${className}`}>
    {/* Image */}
    <div className="w-full h-64 overflow-hidden">
      <img
        src={offers.img}
        alt={offers.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold text-gray-800">{offers.title}</h2>
      <p className="text-gray-500 text-sm mt-2">
        Enjoy magnificence with unprecedented savings on our suites offer.
      </p>

      {/* List */}
      <ul className="text-gray-600 text-sm mt-4 space-y-1 px-2">
        {
            offers.points.map((point) => {
                return <li key={point} className='list-disc text-left my-2'>{point}</li>
            })
        }
      </ul>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button className="px-5 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 text-sm">
          KNOW MORE
        </button>
        <button className="px-5 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 text-sm">
          EXPLORE
        </button>
      </div>
    </div>

  </div>
  )
}

export default Card