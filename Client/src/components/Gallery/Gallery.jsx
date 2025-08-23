import React from 'react';
import Photos from './Photos';

// Importing all images from the Gallery folder
import img1 from '../../assets/Gallery/_DSC4417.jpg';
import img2 from '../../assets/Gallery/_DSC4422.jpg';
import img3 from '../../assets/Gallery/_DSC4436.jpg';
import img4 from '../../assets/Gallery/_DSC4439.jpg';
import img5 from '../../assets/Gallery/_DSC4442.jpg';
import img6 from '../../assets/Gallery/_DSC4453.jpg';
import img7 from '../../assets/Gallery/_DSC4464.jpg';
import img8 from '../../assets/Gallery/_DSC4467.jpg';
import img9 from '../../assets/Gallery/_DSC4471.jpg';
import img10 from '../../assets/Gallery/_DSC4485.jpg';
import img11 from '../../assets/Gallery/_DSC4493.jpg';
import img12 from '../../assets/Gallery/_DSC4496.jpg';
import img13 from '../../assets/Gallery/_DSC4511.jpg';
import img14 from '../../assets/Gallery/_DSC4515.jpg';
import img15 from '../../assets/Gallery/_DSC4517.jpg';
import img16 from '../../assets/Gallery/_DSC4527.jpg';
import img17 from '../../assets/Gallery/_DSC4544.jpg';
import img18 from '../../assets/Gallery/_DSC4545.jpg';
import img19 from '../../assets/Gallery/_DSC4549.jpg';
import img20 from '../../assets/Gallery/_DSC4562.jpg';
import img21 from '../../assets/Gallery/_DSC4601.jpg';
import img22 from '../../assets/Gallery/_DSC4604.jpg';
import img23 from '../../assets/Gallery/_DSC4607.jpg';
import img24 from '../../assets/Gallery/_DSC4611.jpg';
import img25 from '../../assets/Gallery/_DSC4612.jpg';
import img26 from '../../assets/Gallery/_DSC4625.jpg';
import img27 from '../../assets/Gallery/_DSC4639.jpg';
import img28 from '../../assets/Gallery/_DSC4642.jpg';
import img29 from '../../assets/Gallery/_DSC4677-2.jpg';
import img30 from '../../assets/Gallery/_DSC4681.jpg';
import img31 from '../../assets/Gallery/_DSC4683.jpg';
import img32 from '../../assets/Gallery/_DSC4689.jpg';
import img33 from '../../assets/Gallery/_DSC4690.jpg';
import img34 from '../../assets/Gallery/_DSC4693.jpg';
import img35 from '../../assets/Gallery/_DSC4694.jpg';
import img36 from '../../assets/Gallery/_DSC4697.jpg';
import img37 from '../../assets/Gallery/_DSC4698.jpg';
import img38 from '../../assets/Gallery/_DSC4709.jpg';
import img39 from '../../assets/Gallery/_DSC4711.jpg';
import img40 from '../../assets/Gallery/_DSC4719.jpg';
import img41 from '../../assets/Gallery/_DSC4721.jpg';
import img42 from '../../assets/Gallery/_DSC4727.jpg';
import img43 from '../../assets/Gallery/_DSC4732.jpg';
import img44 from '../../assets/Gallery/_DSC4735.jpg';
import img45 from '../../assets/Gallery/_DSC4741.jpg';
import img46 from '../../assets/Gallery/_DSC4746.jpg';
import img47 from '../../assets/Gallery/_DSC4757.jpg';
import img48 from '../../assets/Gallery/_DSC4677-2.jpg';
import img49 from '../../assets/Gallery/_DSC4681.jpg';
import img50 from '../../assets/Gallery/_DSC4683.jpg';
import img51 from '../../assets/Gallery/_DSC4689.jpg';
import img52 from '../../assets/Gallery/_DSC4690.jpg';
import img53 from '../../assets/Gallery/_DSC4693.jpg';
import img54 from '../../assets/Gallery/_DSC4694.jpg';
import img55 from '../../assets/Gallery/_DSC4697.jpg';
import img56 from '../../assets/Gallery/_DSC4698.jpg';
import img57 from '../../assets/Gallery/_DSC4709.jpg';
import img58 from '../../assets/Gallery/_DSC4711.jpg';
import img59 from '../../assets/Gallery/_DSC4719.jpg';
import img60 from '../../assets/Gallery/_DSC4721.jpg';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
  img51, img52, img53, img54, img55, img56, img57, img58, img59, img60
];

const Gallery = () => {
  const getGridClasses = (index) => {
    const patternIndex = index % 10;
    switch (patternIndex) {
      case 0:
        return "col-span-2 row-span-2";
      case 1:
        return "col-span-1 row-span-1";
      case 2:
        return "col-span-1 row-span-2";
      case 3:
        return "col-span-2 row-span-1";
      case 4:
        return "col-span-2 row-span-2";
      case 5:
        return "col-span-1 row-span-1";
      case 6:
        return "col-span-2 row-span-1";
      case 7:
        return "col-span-1 row-span-2";
      case 8:
        return "col-span-2 row-span-2";
      case 9:
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
        Hotel Gallery
      </h2>

      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-6 
          lg:grid-cols-8 
          xl:grid-cols-12 
          auto-rows-[150px] 
          md:auto-rows-[200px] 
          gap-4
        "
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group ${getGridClasses(
              index
            )}`}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              loading="lazy"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
