import React from 'react'

const ServiceCard = ({ title, imageUrl, alt, description }) => (
    <div className="border p-4 rounded-lg border-gray-300">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Image</label>
          <div className="mt-1 flex items-center flex-col">
            <img
              alt={alt}
              className="w-full h-32 object-cover rounded-md mb-2"
              src={imageUrl}
            />
            <input
              className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              type="file"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-0"
            rows="3"
            defaultValue={description}
          ></textarea>
        </div>
      </div>
    </div>
  );

export default ServiceCard