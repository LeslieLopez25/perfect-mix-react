const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.item.createMany({
    data: [
      {
        name: "Seafood Enchiladas",
        image: "/client/src/assets/images/main-1.jpeg",
        price: 120.0,
        description:
          "Soft corn tortillas filled with a mix of seasoned seafood, topped with creamy sauce and melted cheese.",
      },
      {
        name: "Tacos de Carne Asada",
        image: "/client/src/assets/images/main-2.jpeg",
        price: 90.0,
        description:
          "Grilled marinated steak served in soft corn tortillas with fresh toppings like cilantro, onions, and salsa.",
      },
      {
        name: "Pozole Rojo",
        image: "/client/src/assets/images/main-3.jpeg",
        price: 100.0,
        description:
          "A traditional Mexican soup made with hominy, pork, and a rich red chili broth, garnished with fresh vegetables.",
      },
      {
        name: "Carnitas",
        image: "/client/src/assets/images/main-4.jpeg",
        price: 60.0,
        description:
          "Tender, slow-cooked pork with a crispy finish, served in tacos, burritos, or as a main dish with rice and beans.",
      },
      {
        name: "Menudo",
        image: "/client/src/assets/images/main-5.jpeg",
        price: 100.0,
        description:
          "A hearty soup made from beef tripe and hominy in a flavorful broth, often enjoyed as a weekend or celebratory dish.",
      },
      {
        name: "Mole",
        image: "/client/src/assets/images/main-6.jpeg",
        price: 100.0,
        description:
          "A rich and complex sauce made with a blend of chili peppers, chocolate, spices, and nuts, typically served over chicken or enchiladas.",
      },
    ],
  });
}
