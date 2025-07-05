import React from 'react';
import PropertyImages from './PropertyImages';
import PropertyDescription from './PropertyDescription';
import ContactForm from './ContactForm';
import usePropertyDetail from './usePropertyDetail';
import images from '../assets/images';

const Body = () => {
  const { property, loading, error, handleContact } = usePropertyDetail();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="max-w-7xl mx-auto px-4 py-8">
      <PropertyImages images={property?.images || []} />
      <PropertyDescription property={property} />
      <ContactForm onSubmit={handleContact} propertyId={property?.id} />
    </div>
  );
};

export default Body;