const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const category = req.query.category;
  try {
    const items = await prisma.item.findMany({
      where: { category: category },
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch items" });
  }
});

module.exports = router;
