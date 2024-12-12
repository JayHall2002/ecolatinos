const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/api/donate', (req, res) => {
  const { amount, isMonthly, paymentMethod } = req.body;

  // Validate the input data
  if (!amount || !paymentMethod) {
    return res.status(400).json({ message: 'Amount and payment method are required.' });
  }

  // Here, you can implement logic to handle the donation (e.g., process the payment via PayPal or Stripe)

  // Example of logging the donation data
  console.log('Donation Received:', { amount, isMonthly, paymentMethod });

  // Simulate a successful donation response
  return res.status(200).json({ message: 'Donation successfully processed' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
