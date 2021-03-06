import Food1 from "../../images/food-1.jpeg";
import Food2 from "../../images/food-2.jpeg";
import Food3 from "../../images/food-3.jpeg";
import Food4 from "../../images/food-4.jpeg";
import Beverage1 from "../../images/drink-1.jpeg";
import Beverage2 from "../../images/drink-2.jpeg";
import Beverage3 from "../../images/drink-3.jpeg";
import Beverage4 from "../../images/drink-4.jpeg";
import Dessert1 from "../../images/dessert-1.jpeg";
import Dessert2 from "../../images/dessert-2.jpeg";
import Dessert3 from "../../images/dessert-3.jpeg";
import Dessert4 from "../../images/dessert-4.jpeg";
import Appetizer1 from "../../images/appetizers-1.jpeg";
import Appetizer2 from "../../images/appetizers-2.jpeg";
import Appetizer3 from "../../images/appetizers-3.jpeg";
import Appetizer4 from "../../images/appetizers-4.jpeg";
import Specials1 from "../../images/menu-special.jpeg";
import Specials2 from "../../images/dessert-special.jpeg";
import Specials3 from "../../images/appetizers-special.jpeg";
import Specials4 from "../../images/drink-special.jpeg";

// Created an array of objects to store the data of the products 
const data = {
    MenuList: [
  {
    id: 1,
    title: "Seafood Enchiladas",
    img: Food1,
    desc:
      "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
    price: 14.99
  },

  {
    id: 2,
    title: "Tacos de Carne Asada",
    img: Food2,
    desc:
      "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
    price: 10.99
  },

  {
    id: 3,
    title: "Pozole Rojo",
    img: Food3,
    desc:
      "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
    price: 14.99
  },

  {
    id: 4,
    title: "Carnitas",
    img: Food4,
    desc:
      "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
    price: 11.99
    }
    ],

    BeverageList: [
      {
        id: 5,
        title: "Cappuccino",
        img: Beverage1,
        desc:
          "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
        price: 1.5
      },

      {
        id: 6,
        title: "Orange Juice",
        img: Beverage2,
        desc:
          "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
        price: 9.99
      },

      {
        id: 7,
        title: "Coca Cola",
        img: Beverage3,
        desc:
          "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
        price: 1.5
      },

      {
        id: 8,
        title: "Corona Extra",
        img: Beverage4,
        desc:
          "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
        price: 2.99
      }
    ],
  
    DessertList: [
      {
        id: 9,
        title: "Tres Leches Pastel",
        img: Dessert1,
        desc:
          "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
        price: 4.99
      },

      {
        id: 10,
        title: "Dessert Nachos",
        img: Dessert2,
        desc:
          "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
        price: 6.99
      },

      {
        id: 11,
        title: "Paletas",
        img: Dessert3,
        desc:
          "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
        price: 0.99
      },

      {
        id: 12,
        title: "Fresas Con Crema",
        img: Dessert4,
        desc:
          "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
        price: 3.99
      }
    ],

    AppetizerList: [
      {
        id: 13,
        title: "Taco Cups",
        img: Appetizer1,
        desc:
          "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
        price: 0.99
      },

      {
        id: 14,
        title: "Guacamole",
        img: Appetizer2,
        desc:
          "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
        price: 1.99
      },

      {
        id: 15,
        title: "Ceviche",
        img: Appetizer3,
        desc:
          "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
        price: 1.5
      },

      {
        id: 16,
        title: "Taquitos",
        img: Appetizer4,
        desc:
          "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
        price: 0.99
      }
    ],

    SpecialsList: [
  {
    id: 17,
    title: "Tacos de Birria",
    img: Specials1,
    desc:
      "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
    price: 5.99
  },

  {
    id: 18,
    title: "Churros",
    img: Specials2,
    desc:
      "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
    price: 2.99
    }
  ],

    SpecialsList2: [
    {
      id: 19,
      title: "Tamales",
      img: Specials3,
      desc:
        "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
      price: 1.5
    },

    {
      id: 20,
      title: "Red Wine",
      img: Specials4,
      desc:
        "Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib chicken and bacon peppers chicken wing.",
      price: 9.99
    }
  ]
}

export default data;
