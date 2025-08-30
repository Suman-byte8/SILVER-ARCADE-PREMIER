import React, { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";

// Import all images from your Gallery folder
import img1 from "../../assets/Gallery/_DSC4417.jpg";
import img2 from "../../assets/Gallery/_DSC4422.jpg";
import img3 from "../../assets/Gallery/_DSC4436.jpg";
import img4 from "../../assets/Gallery/_DSC4439.jpg";
import img5 from "../../assets/Gallery/_DSC4442.jpg";
import img6 from "../../assets/Gallery/_DSC4453.jpg";
import img7 from "../../assets/Gallery/_DSC4464.jpg";
import img8 from "../../assets/Gallery/_DSC4467.jpg";
import img9 from "../../assets/Gallery/_DSC4471.jpg";
import img10 from "../../assets/Gallery/_DSC4485.jpg";
import img11 from "../../assets/Gallery/_DSC4493.jpg";
import img12 from "../../assets/Gallery/_DSC4496.jpg";
import img13 from "../../assets/Gallery/_DSC4511.jpg";
import img14 from "../../assets/Gallery/_DSC4515.jpg";
import img15 from "../../assets/Gallery/_DSC4517.jpg";
import img16 from "../../assets/Gallery/_DSC4527.jpg";
import img17 from "../../assets/Gallery/_DSC4544.jpg";
import img18 from "../../assets/Gallery/_DSC4545.jpg";
import img19 from "../../assets/Gallery/_DSC4549.jpg";
import img20 from "../../assets/Gallery/_DSC4562.jpg";

// Put all imports in an array
const imageList = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

const HotelGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const loaded = await Promise.all(
        imageList.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                resolve({
                  src,
                  width: img.naturalWidth,
                  height: img.naturalHeight,
                });
              };
            })
        )
      );
      setPhotos(loaded);
    };

    loadImages();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
        Hotel Gallery
      </h2>
      {photos.length > 0 && (
        <Gallery photos={photos} direction="row" margin={8} />
      )}
    </div>
  );
};

export default HotelGallery;
