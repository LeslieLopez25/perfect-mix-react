const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Cleanup existing data
  await prisma.item.deleteMany({});

  const MainList = [
    {
      name: "Seafood Enchiladas",
      image: "/images/main-1.jpeg",
      price: 120.0,
      description:
        "Soft corn tortillas filled with a mix of seasoned seafood, topped with creamy sauce and melted cheese.",
      category: "Main",
    },
    {
      name: "Tacos de Carne Asada",
      image: "/images/main-2.jpeg",
      price: 90.0,
      description:
        "Grilled marinated steak served in soft corn tortillas with fresh toppings like cilantro, onions, and salsa.",
      category: "Main",
    },
    {
      name: "Pozole Rojo",
      image: "/images/main-3.jpeg",
      price: 100.0,
      description:
        "A traditional Mexican soup made with hominy, pork, and a rich red chili broth, garnished with fresh vegetables.",
      category: "Main",
    },
    {
      name: "Carnitas",
      image: "/images/main-4.jpeg",
      price: 60.0,
      description:
        "Tender, slow-cooked pork with a crispy finish, served in tacos, burritos, or as a main dish with rice and beans.",
      category: "Main",
    },
    {
      name: "Menudo",
      image: "/images/main-5.jpg",
      price: 100.0,
      description:
        "A hearty soup made from beef tripe and hominy in a flavorful broth, often enjoyed as a weekend or celebratory dish.",
      category: "Main",
    },
    {
      name: "Mole",
      image: "/images/main-6.jpg",
      price: 100.0,
      description:
        "A rich and complex sauce made with a blend of chili peppers, chocolate, spices, and nuts, typically served over chicken or enchiladas.",
      category: "Main",
    },
  ];

  for (const item of MainList) {
    await prisma.item.create({
      data: item,
    });
  }

  const BeverageList = [
    {
      name: "Cappuccino",
      image: "/images/drink-1.jpeg",
      price: 50.0,
      description:
        "A rich espresso-based coffee drink topped with steamed milk and a thick layer of frothy foam.",
      category: "Beverage",
    },
    {
      name: "Orange Juice",
      image: "/images/drink-2.jpeg",
      price: 30.0,
      description:
        "Freshly squeezed juicy oranges, offering a refreshing and zesty flavor.",
      category: "Beverage",
    },
    {
      name: "Coca Cola",
      image: "/images/drink-3.jpeg",
      price: 20.0,
      description:
        "A classic, sweet, and fizzy carbonated soft drink with a distinct cola flavor, enjoyed worldwide.",
      category: "Beverage",
    },
    {
      name: "Corona Extra",
      image: "/images/drink-4.jpeg",
      price: 15.0,
      description:
        "A light, crisp Mexican lager with a mild flavor, often served with a wedge of lime.",
      category: "Beverage",
    },
    {
      name: "Water",
      image: "/images/drink-5.jpg",
      price: 10.0,
      description:
        "Refreshing and hydrating, pure still or sparkling water to quench your thirst.",
      category: "Beverage",
    },
    {
      name: "Tea",
      image: "/images/drink-6.jpg",
      price: 15.0,
      description:
        "A soothing and aromatic drink made by steeping tea leaves in hot water, available in various flavors like black, green, or herbal.",
      category: "Beverage",
    },
  ];

  for (const item of BeverageList) {
    await prisma.item.create({
      data: item,
    });
  }

  const DessertList = [
    {
      name: "Tres Leches Pastel",
      image: "/images/dessert-1.jpeg",
      price: 50.0,
      description:
        "A moist sponge cake soaked in a blend of three milks—evaporated, condensed, and cream—topped with whipped cream..",
      category: "Dessert",
    },

    {
      name: "Dessert Nachos",
      image: "/images/dessert-2.jpeg",
      price: 20.0,
      description:
        "Crispy tortilla chips sprinkled with cinnamon and sugar, topped with sweet sauces, fruit, and ice cream.",
      category: "Dessert",
    },

    {
      name: "Paletas",
      image: "/images/dessert-3.jpeg",
      price: 15.0,
      description:
        "Mexican-style ice pops made from fresh fruit or creamy ingredients, offering a variety of refreshing flavors",
      category: "Dessert",
    },

    {
      name: "Fresas Con Crema",
      image: "/images/dessert-4.jpeg",
      price: 15.0,
      description:
        "A simple yet delicious dessert of fresh strawberries mixed with a sweet and creamy sauce.",
      category: "Dessert",
    },

    {
      name: "Flan",
      image: "/images/dessert-5.jpg",
      price: 10.0,
      description:
        "A rich, creamy caramel custard with a smooth texture and a golden caramel topping.",
      category: "Dessert",
    },

    {
      name: "Jericalla",
      image: "/images/dessert-6.jpeg",
      price: 10.0,
      description:
        "A traditional Mexican custard similar to crème brûlée, flavored with vanilla and cinnamon, and baked until golden on top.",
      category: "Dessert",
    },
  ];

  for (const item of DessertList) {
    await prisma.item.create({
      data: item,
    });
  }

  const AppetizerList = [
    {
      name: "Taco Cups",
      image: "/images/appetizers-1.jpeg",
      price: 20.0,
      description:
        "Bite-sized tacos made by baking tortillas into cup shapes, filled with seasoned meat, cheese, and toppings.",
      category: "Appetizer",
    },

    {
      name: "Guacamole",
      image: "/images/appetizers-2.jpeg",
      price: 15.0,
      description:
        "A creamy dip made from mashed avocados, lime juice, cilantro, and spices, perfect for pairing with chips or tacos.",
      category: "Appetizer",
    },

    {
      name: "Ceviche",
      image: "/images/appetizers-3.jpeg",
      price: 15.0,
      description:
        "Fresh seafood marinated in citrus juices, mixed with tomatoes, onions, cilantro, and chili peppers for a tangy, refreshing dish.",
      category: "Appetizer",
    },

    {
      name: "Taquitos",
      image: "/images/appetizers-4.jpeg",
      price: 15.0,
      description:
        "Crispy, rolled tortillas filled with seasoned meat or cheese, fried until golden and served with salsa or sour cream.",
      category: "Appetizer",
    },

    {
      name: "Shrimp Cocktails",
      image: "/images/appetizers-5.jpg",
      price: 25.0,
      description:
        "Chilled shrimp mixed with a tangy tomato sauce, avocado, and fresh vegetables, served in a glass for a refreshing starter.",
      category: "Appetizer",
    },

    {
      name: "Salsa with Chips",
      image: "/images/appetizers-6.jpg",
      price: 10.0,
      description:
        "Freshly made salsa, usually with tomatoes, onions, cilantro, and chili peppers, served with crispy tortilla chips for dipping.",
      category: "Appetizer",
    },
  ];

  for (const item of AppetizerList) {
    await prisma.item.create({
      data: item,
    });
  }

  const SpecialsList = [
    {
      name: "Tacos de Birria",
      image: "/images/menu-special.jpeg",
      price: 50.0,
      description:
        "Flavorful, slow-cooked beef or goat stew served in tacos, often accompanied by a rich, dipping consommé.",
      category: "Specials",
    },

    {
      name: "Churros",
      image: "/images/dessert-special.jpeg",
      price: 20.0,
      description:
        "Crispy, deep-fried dough sticks coated in cinnamon and sugar, often served with chocolate or caramel dipping sauce.",
      category: "Specials",
    },

    {
      name: "Tamales",
      image: "/images/appetizers-special.jpeg",
      price: 15.0,
      description:
        "Steamed masa dough filled with meats, cheeses, or vegetables, wrapped in corn husks or banana leaves.",
      category: "Specials",
    },

    {
      name: "Red Wine",
      image: "/images/drink-special.jpeg",
      price: 75.0,
      description:
        "A bold and fruity alcoholic beverage made from fermented dark grapes, perfect for pairing with rich meals.",
      category: "Specials",
    },

    {
      name: "Mangonada",
      image: "/images/extra-special-1.jpg",
      price: 16.0,
      description:
        "A refreshing frozen drink made from mango, layered with chamoy, lime, and chili powder for a sweet and spicy treat.",
      category: "Specials",
    },

    {
      name: "Tortas Ahogadas",
      image: "/images/extra-special-2.jpg",
      price: 50.0,
      description:
        "A traditional Mexican sandwich filled with pork and drenched in a spicy tomato sauce, known for its bold flavors and messy delight.",
      category: "Specials",
    },
  ];

  for (const item of SpecialsList) {
    await prisma.item.create({
      data: item,
    });
  }
}

main()
  .then(() => {
    console.log("Data seeded successfully");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
