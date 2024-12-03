import { useState } from "react";
import Button from "./Button";

const bgImage = "/hero.jpg";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div
      className="w-full h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
        <div className="flex flex-col gap-4 mx-8">
          <p className="text-lg font-bold text-white">Welcome to Our Church</p>
          <h1 className="text-6xl font-bold text-white uppercase">
            Become a part of our community
          </h1>

          <Button 
            text="Donate Now" 
            link="#" // Set the link to # to prevent page refresh
            color="primary" 
            size="md" 
            className="shadow-md"
            onClick={toggleModal} // Show the modal on click
          />
        </div>
        <div className="w-1/2 h-full"></div>
      </div>

      {/* Modal for donation */}
      {isModalOpen && (
        <DonationModal onClose={toggleModal} />
      )}
    </div>
  );
};

const DonationModal = ({ onClose }: { onClose: () => void }) => {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with the actual logic to push data to MPESA API
    console.log("Amount:", amount);
    console.log("Phone Number:", phone);

    // Example: Make a POST request to your MPESA API
    // const response = await fetch('your-mpesa-api-endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify({ amount, phone }),
    //   headers: { 'Content-Type': 'application/json' },
    // });
    // const data = await response.json();
    // console.log(data);
    
    // Close the modal after submitting
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="z-10 p-8 bg-white rounded-lg shadow-lg w-96">
        <h2 className="mb-4 text-2xl font-semibold">Donate Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Donate
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
