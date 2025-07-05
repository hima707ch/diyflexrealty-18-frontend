import React from 'react';
import images from '../assets/images';

const PropertyDescription = ({ property }) => {
  return (
    <div id="PropertyDescription_1" className="mb-8">
      <h1 id="PropertyDescription_2" className="text-3xl font-bold mb-4">{property?.title}</h1>
      <div id="PropertyDescription_3" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div id="PropertyDescription_4" className="space-y-4">
          <p className="text-2xl font-semibold text-blue-600">${property?.price?.toLocaleString()}</p>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{property?.bedrooms} Beds</span>
            <span className="text-gray-600">{property?.bathrooms} Baths</span>
            <span className="text-gray-600">{property?.area} sqft</span>
          </div>
          <p className="text-gray-700">{property?.description}</p>
        </div>
        <div id="PropertyDescription_5" className="space-y-4">
          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="grid grid-cols-2 gap-2">
            {property?.features?.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-blue-500">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;