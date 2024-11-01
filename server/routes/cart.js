// const express = require("express");
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();
// const router = express.Router();

// // Save cart data
// router.post("/save", async (req, res) => {
//   const { userId, items } = req.body;
//   try {
//     const total = items.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0
//     );

//     // Create or update the user's active order with cart items
//     const order = await prisma.order.upsert({
//       where: { userId: userId },
//       update: {
//         items: {
//           deleteMany: {},
//           create: items.map((item) => ({
//             product: item.product,
//             quantity: item.quantity,
//             price: item.price,
//           })),
//         },
//         total,
//       },
//       create: {
//         userId: userId,
//         items: {
//           create: items.map((item) => ({
//             product: item.product,
//             quantity: item.quantity,
//             price: item.price,
//           })),
//         },
//         total,
//       },
//     });

//     res.status(200).json({ order });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save cart" });
//   }
// });

// router.get("/retrieve/:userId", async (req, res) => {
//   const { userId } = req.params;
//   try {
//     const order = await prisma.order.findUnique({
//       where: { userId: userId },
//       include: { items: true },
//     });

//     res.status(200).json(order ? order.items : []);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to retrieve cart" });
//   }
// });

// module.exports = router;
