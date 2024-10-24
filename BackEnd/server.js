const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
require('dotenv').config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors()); 
app.use(express.json()); 

// Endpoint pour créer un PaymentIntent (c'est ici que vous générez le client_secret)
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // Montant que vous envoyez du frontend (ex : 1000 = 10€)

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'eur', 
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(4242, () => console.log('Serveur  fonctionnel sur le port 4242'));