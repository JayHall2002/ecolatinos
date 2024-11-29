"use client"; // This directive indicates that this component should be rendered on the client-side.

// Importing necessary modules and components
import Navbar from "../components/navbar"; // Importing the Navbar component for navigation
import React, { useState, useEffect } from 'react'; // Importing React library and hooks
import Image from "next/image"; 
import donatebg from "../images/chesapeake.jpeg";
import outreachprogram from "../images/outreachprogram.jpeg";
import nobackgroundecolatinoslogo from "../images/nobackgroundecolatinoslogo.png";
import {Poppins} from "next/font/google"
import {Lato} from "next/font/google"

export default function Donation() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false); // Toggle between one-time and monthly
  const [selectedAmount, setSelectedAmount] = useState(null); // Tracks selected donation amount
  const [customAmount, setCustomAmount] = useState(""); // Stores custom amount
  const [paymentMethod, setPaymentMethod] = useState(""); // Tracks selected payment method

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

  const handleSubmit = async () => {
    e.preventDefault();
    const amount = customAmount || selectedAmount;
    if (!amount) {
      alert("Please select or enter a donation amount.");
      return;
    }
  
    const donationData = {
      amount: amount,
      isMonthly: isMonthly,
      paymentMethod: paymentMethod,
    };
  
    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });
  
      // Check if the response is successful
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error Response:', errorText);  // Log the HTML error page
        alert('Something went wrong. Please try again.');
        return;
      }
  
      // Parse the response JSON if it's successful
      const data = await response.json();
      alert('Donation successful!');
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred: ' + error.message);
    }
  };
  

  return (
    <div>
      <Navbar /> {/* Navbar component */}

      {isMounted && (
        <div className="relative w-full h-screen" style={{ marginTop: "0px", opacity: 0, animation: "fadeIn 3s ease-in forwards", animationDelay: "1s" }}>
          {/* Background Image */}
          <Image
            src={donatebg}
            alt="Chesapeake Background"
            layout="fill"
            objectFit="cover"
            className="blur-lg"
          />

          {/* Left side of the screen box */}
          <div className="absolute top-[325px] left-4 transform -translate-y-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-0 pb-6 pt-2 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold font-mono mb-4 text-center">Make a Difference Right Now</h2>

            <Image src={nobackgroundecolatinoslogo} alt="no background ecolatinos logo" width={200} height={200} className={"pb-2 pl-2"} />
            <Image src={outreachprogram} alt="out Reach Image" width={300} height={300} className="rounded-lg shadow-lg mx-auto pb-2" />
            
            <div className={"p-2 pt-6 bg-green-500 text-white text-sm rounded-lg shadow-lg"}>
              <p>Ecolatinos has established over 140 partnerships with various organizations and institutions,
                driving a range of impactful programs that contribute to positive global change.</p>
              <p className="pt-2"><strong>The money you donate goes to our programs, trainings, and initiatives.</strong></p>
              <p className="pt-2"> Specific programs include: </p>
              <ul>
                <li><strong>➡Clean up Events</strong></li>
                <li><strong>➡Youth Environmental Programs</strong></li>
                <li><strong>➡Equitable Landscaping Program</strong></li>
                <li><strong>➡Engagement/Faith Based Organizations/Best Management &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Practices</strong></li>
              </ul>
            </div>
          </div>

          {/* Right side of the screen box */}
          {/* Donation Form on top of the image */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 -translate-y-1/2 bg-white bg-opacity-80 pt-10 pb-6 p-4 rounded-lg shadow-lg max-w-md w-full">
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

            {/* Payment Method Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-center mb-2">Select Payment Method</h3>
              <div className="flex justify-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="PayPal"
                    checked={paymentMethod === "PayPal"}
                    onChange={() => setPaymentMethod("PayPal")}
                    className="form-radio"
                  />
                  <span>PayPal</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Credit/Debit"
                    checked={paymentMethod === "Credit/Debit"}
                    onChange={() => setPaymentMethod("Credit/Debit")}
                    className="form-radio"
                  />
                  <span>Credit/Debit</span>
                </label>
              </div>
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
