const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

// Save cart data
router.post("/save", async (req, res) => {
  const { userId, items } = req.body;
  if (!userId || !items || !Array.isArray(items) || items.length === 0) {
    console.log("Invalid request data:", { userId, items });
    return res.status(400).json({ error: "Invalid data" });
  }

  console.log("Received save request with items:", items);

  try {
    // Proceed with saving if validation passes
    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!userExists) return res.status(400).json({ error: "User not found" });

    const order = await prisma.order.create({
      data: {
        userId,
        items: {
          create: items.map((item) => ({
            itemId: item.id,
            quantity: item.quantity,
          })),
        },
        total: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
      },
    });
    res.status(200).json(order);
  } catch (error) {
    console.error("Error saving cart:", error);
    res.status(500).json({ error: "Failed to save cart." });
  }
});

router.get("/retrieve/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const order = await prisma.order.findUnique({
      where: { userId: userId },
      include: { items: true },
    });

    res.status(200).json(order ? order.items : []);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve cart" });
  }
});

module.exports = router;
