// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// app.use(cors());

// // Initialize Express app
// const app = express();
// const port = 3000; // You can change this to any available port

// // Middleware to parse JSON request bodies
// app.use(bodyParser.json());

// // Define the /api/donate route
// app.post('/api/donate', (req, res) => {
//   const { amount, isMonthly, paymentMethod } = req.body;

//   // Simulate donation processing (you can add real backend logic here)
//   console.log('Donation Details:', { amount, isMonthly, paymentMethod });

//   // Check if necessary fields are present
//   if (!amount || !paymentMethod) {
//     return res.status(400).json({ message: 'Amount and payment method are required' });
//   }

//   // Simulate a successful donation
//   return res.status(200).json({ message: 'Donation processed successfully', donation: { amount, isMonthly, paymentMethod } });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
