import React from 'react';

const Photos = ({ src }) => {
  return (
    <div className="overflow-hidden w-full h-full">
      <img src={src} alt="gallery" className="w-full h-full object-cover" />
    </div>
  );
};

export default Photos;