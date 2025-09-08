const express = require("express");
const { PrismaClient } = require("@prisma/client");
const itemsRoute = require("./routes/item");
const cors = require("cors");
const Stripe = require("stripe");
const { checkJwt, checkUserMatch } = require("./middleware/authMiddleware");
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

// Fetch or create cart for a specific Auth0 user
app.get("/api/cart/:auth0Id", checkJwt, checkUserMatch, async (req, res) => {
  const { auth0Id } = req.params;

  try {
    let userCart = await prisma.order.findUnique({
      where: { userId: auth0Id },
      include: { items: true },
    });

    // If no cart exists yet, create an empty one
    if (!userCart) {
      userCart = await prisma.order.create({
        data: {
          userId: auth0Id,
          total: 0,
          items: { create: [] },
        },
        include: { items: true },
      });
    }

    res.json(userCart);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ error: "Unable to fetch cart" });
  }
});

// Save or replace full cart for a user (upsert = create or update)
app.post("/api/cart/save", checkJwt, async (req, res) => {
  const userIdFromToken = req.auth.payload.sub;
  const { auth0Id, items } = req.body;

  if (userIdFromToken !== auth0Id) {
    return res.status(403).json({ error: "Forbidden: Access denied" });
  }

  try {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const newOrder = await prisma.order.upsert({
      where: { userId: auth0Id },
      update: {
        total,
        items: {
          deleteMany: {}, // clear existing items
          create: items.map((item) => ({
            product: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      create: {
        userId: auth0Id,
        total,
        items: {
          create: items.map((item) => ({
            product: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: { items: true },
    });

    res.json(newOrder);
  } catch (error) {
    console.error("Error saving cart:", error);
    res.status(500).json({ error: "Unable to save cart" });
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

// Stripe payment intent creation
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // cents
      currency: "mxn",
      automatic_payment_methods: { enabled: true },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Unable to create payment intent" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
