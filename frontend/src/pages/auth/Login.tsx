import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Here you can integrate your backend API to handle authentication
    try {
      // Mock login submission
      setTimeout(() => {
        if (email === 'admin@example.com' && password === 'password123') {
          // Success
          window.location.href = '/dashboard'; // Redirect on success
        } else {
          setErrorMessage('Invalid email or password');
        }
        setIsSubmitting(false);
      }, 1500);
    } catch {
      setErrorMessage('Error during login');
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Login</h2>
        
        {errorMessage && <div className="mb-4 text-red-600">{errorMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 text-white rounded-md ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot password?</Link>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account? 
            <Link to="/register" className="text-blue-500 hover:underline"> Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
