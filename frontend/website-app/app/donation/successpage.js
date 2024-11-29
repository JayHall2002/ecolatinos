// import React, { useState, useEffect } from 'react';

// const DonationSuccess = () => {
//   const [isDonated, setIsDonated] = useState(false);
//   const [donationAmount, setDonationAmount] = useState(0);
//   const [isClient, setIsClient] = useState(false);

//   // Ensure the code runs only on the client
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Simulate donation process
//   const handleDonation = (amount) => {
//     setDonationAmount(amount);
//     setIsDonated(true); // Simulate successful donation
//   };

//   if (!isClient) {
//     // Render a placeholder while the component is being hydrated
//     return <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">Loading...</div>;
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-2xl font-semibold text-center mb-6">Donation Page</h1>

//         {/* Donation Form */}
//         {!isDonated ? (
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
//           // Donation Success Message
//           <div className="text-center">
//             <h2 className="text-2xl font-semibold text-green-600 mb-4">Thank You for Your Donation!</h2>
//             <p className="text-lg text-gray-700">
//               Your donation of <span className="font-semibold text-green-600">${donationAmount}</span> was
//               successful. We appreciate your generosity!
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DonationSuccess;
