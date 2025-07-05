import React from 'react';
import LoginForm from './LoginForm';
import images from '../assets/images';

const Body = () => {
  return (
    <div id="Body_1" className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-md w-full space-y-8">
        <div id="Body_3" className="text-center">
          <img
            id="Body_4"
            className="mx-auto h-12 w-auto"
            src={images[0]}
            alt="Logo"
          />
          <h2 id="Body_5" className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Body;