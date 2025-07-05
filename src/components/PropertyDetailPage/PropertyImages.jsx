import React, { useState } from 'react';
import images from '../assets/images';

const PropertyImages = ({ images: propertyImages }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div id="PropertyImages_1" className="mb-8">
      <div id="PropertyImages_2" className="relative h-[500px] overflow-hidden rounded-lg">
        <img
          id="PropertyImages_3"
          src={propertyImages[activeImage] || images[0]}
          alt={`Property view ${activeImage + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div id="PropertyImages_4" className="grid grid-cols-4 gap-4 mt-4">
        {propertyImages.map((img, index) => (
          <button
            key={index}
            id={`PropertyImages_5_${index}`}
            onClick={() => setActiveImage(index)}
            className={`h-24 overflow-hidden rounded-lg ${activeImage === index ? 'ring-2 ring-blue-500' : ''}`}
          >
            <img src={img || images[0]} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyImages;