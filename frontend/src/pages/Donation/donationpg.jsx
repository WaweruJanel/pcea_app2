import React, { useState } from 'react';
import axios from 'axios';

function DonationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const donationData = {
      name,
      email,
      amount,
      paymentMethod,
    };

    try {
      // Replace with your backend URL
      await axios.post('http://your-backend-url/api/donate', donationData);
      setMessage('Donation submitted successfully!');
      setName('');
      setEmail('');
      setAmount('');
    } catch (error) {
      setMessage('There was an error processing your donation. Please try again later.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Make a Donation</h1>
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
          <label>Donation Amount (USD):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="1"
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" style={{ padding: '1rem', backgroundColor: '#28a745', color: '#fff' }}>
          Donate
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DonationForm;
