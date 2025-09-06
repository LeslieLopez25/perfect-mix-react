const express = require("express");
const { PrismaClient } = require("@prisma/client");
const itemsRoute = require("./routes/item");
const cors = require("cors");
const Stripe = require("stripe");
const dotenv = require("dotenv");

dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/items", itemsRoute);
app.use("/images", express.static("public/images"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Fetch cart items for a specific user
app.get("/api/cart/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const userCart = await prisma.order.findFirst({
      where: { userId },
      include: { items: true },
    });
    res.json({ items: userCart ? userCart.items : [] });
  } catch (error) {
    console.log("Error fetching cart:", error);
    res.status(500).json({ error: "Unable to fetch cart" });
  }
});

// Fetch all gallery images
app.get("/api/gallery", async (req, res) => {
  try {
    const galleryImages = await prisma.galleryImage.findMany();
    res.json(galleryImages);
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    res.status(500).json({ error: "Unable to fetch gallery images" });
  }
});

// Add an item to the cart
app.post("/api/cart", async (req, res) => {
  const { userId, product, quantity, price } = req.body;
  try {
    const order = await prisma.order.create({
      data: {
        userId: userId,
        total: price * quantity,
        items: {
          create: { product, quantity, price },
        },
      },
    });
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to add item to cart" });
  }
});

// Stripe payment intent creation
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // cents
      currency: "mxn",
      automatic_payment_methods: { enabled: true },
    });

    res.json({ clientSecret: paymentIntent.client_secret }); // ✅ must return client_secret
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Unable to create payment intent" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
