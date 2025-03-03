import express from 'express';
import { PaymentModel } from '../models/payment.model.js';  // The payment model created earlier

const router = express.Router();

// Define the POST route to handle payments
router.post('/payment', async (req, res) => {
  try {
    const { paymentId, orderId, amount, paymentMethod, status, date } = req.body;

    // Create a new payment document in the database
    const payment = new PaymentModel({
      paymentId,
      orderId,
      amount,
      paymentMethod,
      status: status || 'Completed',  // Default status
      date: date || Date.now(),  // Set current date if not provided
    });

    await payment.save();

    // Return a success response
    res.status(201).json({ message: 'Payment saved successfully' });
  } catch (error) {
    console.error('Error saving payment:', error);
    res.status(500).json({ error: 'Failed to save payment' });
  }
});

export default router;
