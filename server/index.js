const express = require("express");
const { PrismaClient } = require("@prisma/client");
const itemsRoute = require("./routes/item");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/items", itemsRoute);
app.use("/images", express.static("client/src/assets/images"));

app.get("/", (req, res) => {
  {
    res.send("API is running...");
  }
});

app.get("/api/cart/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const userCart = await prisma.order.findMany({
      where: { userId: parseInt(userId) },
      include: { items: true },
    });
    res.json(userCart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to fetch cart" });
  }
});

app.post("/api/cart", async (req, res) => {
  const { userId, product, quantity, price } = req.body;
  try {
    const order = await prisma.order.create({
      data: {
        userId: parseInt(userId),
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
