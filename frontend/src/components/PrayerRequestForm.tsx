import React, { useState } from 'react';

const PrayerRequestForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Here, you would typically send the data to a backend API
    try {
      // Mock submission delay
      setTimeout(() => {
        setSuccessMessage('Your prayer request has been submitted successfully!');
        setIsSubmitting(false);
      }, 1500);
    } catch {
      setErrorMessage('There was an error submitting your request.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Submit Your Prayer Request</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="request" className="block text-gray-700">Prayer Request</label>
          <textarea
            id="request"
            name="request"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
            rows={5}
            required
          ></textarea>
        </div>

        {successMessage && (
          <div className="mb-4 text-green-600">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="mb-4 text-red-600">{errorMessage}</div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 text-white rounded-md ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Prayer Request'}
        </button>
      </form>
    </div>
  );
};

export default PrayerRequestForm;
