import React from 'react'

const Details = ({ title, description }) => {
  return (
    <div className="_subDetails min-w-[250px] max-w-[300px] min-h-[180px] max-h-[200px] bg-white p-4 text-center flex flex-col items-center justify-center rounded-lg shadow-lg gap-3 z-50">
    <h2 className="text-xl">{title}</h2>
    <p className="text-sm">{description}</p>
    <button className='border-2 border-gray-300 rounded-full px-3 py-1 mt-2'>Know More</button>
  </div>
  )
}

export default Details