import React, { useState } from 'react';
import images from '../assets/images';

const ContactForm = ({ onSubmit, propertyId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, propertyId });
  };

  return (
    <div id="ContactForm_1" className="bg-gray-50 p-6 rounded-lg">
      <h2 id="ContactForm_2" className="text-2xl font-semibold mb-4">Contact Agent</h2>
      <form id="ContactForm_3" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            id="ContactForm_4"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            id="ContactForm_5"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea
            id="ContactForm_6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md h-32"
            required
          ></textarea>
        </div>
        <button
          id="ContactForm_7"
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;