import React, { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors({});
    setIsSubmitting(true);

    // Perform form validation
    if (!formData.name) {
      setFormErrors((errors) => ({ ...errors, name: 'Name is required' }));
    }
    if (!formData.email) {
      setFormErrors((errors) => ({ ...errors, email: 'Email is required' }));
    }
    if (!formData.phone) {
      setFormErrors((errors) => ({ ...errors, phone: 'Phone number is required' }));
    }

    // Send form data to server or perform other actions
    if (!Object.keys(formErrors).length) {
      // submit form data here
      console.log(formData);
    }

    setIsSubmitting(false);
  };

  return (
    <form className="bg-white p-6 rounded-lg" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Your Name (required)
        </label>
        <input
          className={`border border-gray-400 w-full p-2 rounded-lg ${
            formErrors.name ? 'border-red-500' : ''
          }`}
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && (
          <p className="text-red-500 text-xs italic mt-2">{formErrors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Your Email (required)
        </label>
        <input
          className={`border border-gray-400 w-full p-2 rounded-lg ${
            formErrors.email ? 'border-red-500' : ''
          }`}
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && (
          <p className="text-red-500 text-xs italic mt-2">{formErrors.email}</p>
        )}
        </div>
        <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
      Your Telephone Number (required)
    </label>
    <input
      className={`border border-gray-400 w-full p-2 rounded-lg ${
        formErrors.phone ? 'border-red-500' : ''
      }`}
      type="tel"
      name="phone"
      id="phone"
      value={formData.phone}
      onChange={handleChange}
    />
    {formErrors.phone && (
      <p className="text-red-500 text-xs italic mt-2">{formErrors.phone}</p>
    )}
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
      Subject
    </label>
    <input
      className="border border-gray-400 w-full p-2 rounded-lg"
      type="text"
      name="subject"
      id="subject"
      value={formData.subject}
      onChange={handleChange}
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
      Your Message
    </label>
    <textarea
      className="border border-gray-400 w-full p-2 rounded-lg"
      name="message"
      id="message"
      rows="4"
      value={formData.message}
      onChange={handleChange}
    ></textarea>
  </div>

  <button
    className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
    type="submit"
    disabled={isSubmitting}
  >
    Send
  </button>
</form>
  );
}
