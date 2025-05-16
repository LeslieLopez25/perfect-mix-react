const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Fetch menu items from the database that belong to a specific category
router.get("/", async (req, res) => {
  // Extract the category from the query string (e.g., /api/items?category=Main)
  const category = req.query.category;
  try {
    // Query the database for items where the category matches the query parameter
    const items = await prisma.item.findMany({
      where: { category: category },
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch items" });
  }
});

module.exports = router;
