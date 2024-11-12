const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Fetch gallery images
router.get("/", async (req, res) => {
  try {
    const galleryImages = await prisma.galleryImage.findMany();
    res.json(galleryImages);
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    res.status(500).json({ message: "Error fetching gallery images" });
  }
});

module.exports = router;
