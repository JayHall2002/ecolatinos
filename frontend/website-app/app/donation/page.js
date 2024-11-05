"use client"; // This directive indicates that this component should be rendered on the client-side.

// Importing necessary modules and components
import Navbar from "../components/navbar"; // Importing the Navbar component for navigation
import React from 'react'; // Importing React library
import Image from "next/image"; // Importing Image component from Next.js for optimized image rendering
import donatebg from "../images/chesapeake.jpeg";
import { useState, useEffect } from 'react';

export default function Donation() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false); // Toggle between one-time and monthly
  const [selectedAmount, setSelectedAmount] = useState(null); // Tracks selected donation amount
  const [customAmount, setCustomAmount] = useState(""); // Stores custom amount

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(""); // Clear custom input when an option is selected
  };

  const handleCustomAmountChange = (e) => {
    setSelectedAmount(null); // Clear selected amount when custom is used
    setCustomAmount(e.target.value);
  };

  const handleSubmit = () => {
    const amount = customAmount || selectedAmount;
    if (amount) {
      alert(`Proceeding with a ${isMonthly ? "monthly" : "one-time"} donation of $${amount}`);
      // Continue to checkout logic
    } else {
      alert("Please select or enter a donation amount.");
    }
  };

  return (
    <div>
      <Navbar /> {/* Navbar component */}
      
      {isMounted && (
        <div className="relative w-full h-screen" style={{marginTop: "0px", opacity: 0, animation: "fadeIn 3s ease-in forwards", animationDelay: "1s"}}>
          {/* Background Image */}
          <Image 
            src={donatebg} 
            alt="Chesapeake Background" 
            layout="fill" 
            objectFit="cover" 
            className="blur-lg" 
          />
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold font-mono mb-4 text-center">Help Us Protect the Community</h2>
          </div>
          {/* Donation Form on top of the image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold font-mono mb-4 text-center">Donate to Support</h2>
            
            {/* Toggle between One-time or Monthly */}
            <div className="flex justify-center mb-6">
              <button
                className={`px-4 py-2 mr-2 rounded-l-full shadow-md ${!isMonthly ? "bg-green-500 text-white" : "bg-gray-300"}`}
                onClick={() => setIsMonthly(false)}
              >
                One-time
              </button>
              <button
                className={`px-4 py-2 rounded-r-full shadow-md ${isMonthly ? "bg-green-500 text-white" : "bg-gray-300"}`}
                onClick={() => setIsMonthly(true)}
              >
                Monthly
              </button>
            </div>
            
            {/* Donation Amount Options */}
            <div className="flex justify-center space-x-4 mb-4">
              {[10, 25, 50, 100].map((amount) => (
                <button
                  key={amount}
                  className={`px-4 py-2 rounded-full border shadow-md ${selectedAmount === amount ? "bg-green-500 text-white" : "bg-white"}`}
                  onClick={() => handleAmountSelect(amount)}
                >
                  ${amount}
                </button>
              ))}
            </div>
            
            {/* Custom Amount Input */}
            <div className="flex justify-center mb-6">
              <input
                type="number"
                placeholder="Other Amount"
                className="px-4 py-2 rounded-md border shadow-md border-gray-300"
                value={customAmount}
                onChange={handleCustomAmountChange}
              />
            </div>
            
            {/* Continue Button */}
            <div className="flex justify-center">
              <button
                className="shadow-md px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
