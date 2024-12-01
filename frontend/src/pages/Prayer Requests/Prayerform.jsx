import  { useState } from 'react';
import axios from 'axios';

function PrayerRequestForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const prayerRequest = {
      name,
      email,
      request,
    };

    try {
      // Replace with your backend URL
      await axios.post('http://your-backend-url/api/prayer-request', prayerRequest);
      setMessage('Prayer request submitted successfully!');
      setName('');
      setEmail('');
      setRequest('');
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setMessage('There was an error submitting your prayer request. Please try again later.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Submit a Prayer Request</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Prayer Request:</label>
          <textarea
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', height: '150px' }}
          />
        </div>
        <button type="submit" style={{ padding: '1rem', backgroundColor: '#28a745', color: '#fff' }}>
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PrayerRequestForm;
