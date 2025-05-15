const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Fetch all gallery images from the database and return them as JSON
router.get("/", async (req, res) => {
  try {
    // Query the database for all entries in the "galleryImage" table
    const galleryImages = await prisma.galleryImage.findMany();
    res.json(galleryImages);
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    res.status(500).json({ message: "Error fetching gallery images" });
  }
});

module.exports = router;
