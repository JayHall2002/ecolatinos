// import React, { useState, useEffect } from 'react';

// const DonationFailed = () => {
//   const [isFailed, setIsFailed] = useState(false);
//   const [donationAmount, setDonationAmount] = useState(0);
//   const [isClient, setIsClient] = useState(false);  // Track whether the component has mounted on the client

//   // useEffect runs only on the client-side after the initial render
//   useEffect(() => {
//     setIsClient(true);  // Set isClient to true once the component has mounted
//   }, []);

//   // Simulate donation process failure
//   const handleDonation = (amount) => {
//     if (amount <= 0) {
//       setDonationAmount(amount);
//       setIsFailed(true); // Simulate failure for invalid or zero amount
//     } else {
//       setDonationAmount(amount);
//       setIsFailed(false); // Simulate successful donation
//     }
//   };

//   // Wait until the component is mounted on the client before rendering the dynamic content
//   if (!isClient) {
//     return <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">Loading...</div>;
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-2xl font-semibold text-center mb-6">Donation Page</h1>

//         {/* Donation Form */}
//         {!isFailed ? (
//           <div>
//             <h3 className="text-lg text-center mb-4">Enter your donation amount</h3>
//             <div className="flex flex-col items-center">
//               <input
//                 type="number"
//                 value={donationAmount}
//                 onChange={(e) => setDonationAmount(e.target.value)}
//                 className="mb-4 w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Amount"
//               />
//               <button
//                 onClick={() => handleDonation(donationAmount)}
//                 className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               >
//                 Donate
//               </button>
//             </div>
//           </div>
//         ) : (
//           // Donation Failed Message
//           <div className="text-center">
//             <h2 className="text-2xl font-semibold text-red-600 mb-4">Donation Failed</h2>
//             <p className="text-lg text-gray-700">
//               Sorry, your donation of <span className="font-semibold text-red-600">${donationAmount}</span> was
//               unsuccessful. Please ensure you entered a valid amount.
//             </p>
//             <p className="text-sm text-gray-500 mt-4">
//               If the problem persists, please try again later or contact support.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DonationFailed;
