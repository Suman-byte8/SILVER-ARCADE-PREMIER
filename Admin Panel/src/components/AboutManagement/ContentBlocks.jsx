import React from 'react'

const ContentBlock = ({
    title,
    imageUrl,
    alt,
    description,
    descriptionLabel,
    rows,
  }) => (
    <div className="border border-gray-300 p-4 rounded-lg">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Image</label>
          <div className="mt-1 flex items-center">
            <img
              alt={alt}
              className="w-40 h-20 object-cover rounded-md mr-4"
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
            {descriptionLabel}
          </label>
          <textarea
            className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-0"
            rows={rows}
            defaultValue={description}
          ></textarea>
        </div>
      </div>
    </div>
  );

export default ContentBlock;