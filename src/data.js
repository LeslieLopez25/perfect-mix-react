import Main1 from "./assets/images/main-1.jpeg";
import Main2 from "./assets/images/main-2.jpeg";
import Main3 from "./assets/images/main-3.jpeg";
import Main4 from "./assets/images/main-4.jpeg";
import Main5 from "./assets/images/main-5.jpg";
import Main6 from "./assets/images/main-6.jpg";
import Beverage1 from "./assets/images/drink-1.jpeg";
import Beverage2 from "./assets/images/drink-2.jpeg";
import Beverage3 from "./assets/images/drink-3.jpeg";
import Beverage4 from "./assets/images/drink-4.jpeg";
import Beverage5 from "./assets/images/drink-5.jpg";
import Beverage6 from "./assets/images/drink-6.jpg";
import Dessert1 from "./assets/images/dessert-1.jpeg";
import Dessert2 from "./assets/images/dessert-2.jpeg";
import Dessert3 from "./assets/images/dessert-3.jpeg";
import Dessert4 from "./assets/images/dessert-4.jpeg";
import Dessert5 from "./assets/images/dessert-5.jpg";
import Dessert6 from "./assets/images/dessert-6.jpeg";
import Appetizer1 from "./assets/images/appetizers-1.jpeg";
import Appetizer2 from "./assets/images/appetizers-2.jpeg";
import Appetizer3 from "./assets/images/appetizers-3.jpeg";
import Appetizer4 from "./assets/images/appetizers-4.jpeg";
import Appetizer5 from "./assets/images/appetizers-5.jpg";
import Appetizer6 from "./assets/images/appetizers-6.jpg";
import Specials1 from "./assets/images/menu-special.jpeg";
import Specials2 from "./assets/images/dessert-special.jpeg";
import Specials3 from "./assets/images/appetizers-special.jpeg";
import Specials4 from "./assets/images/drink-special.jpeg";

// Created an array of objects to store the data of the products
export const PRODUCTS = {
  MainList: [
    {
      id: 1,
      title: "Seafood Enchiladas",
      img: Main1,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 120.0,
    },

    {
      id: 2,
      title: "Tacos de Carne Asada",
      img: Main2,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 90.0,
    },

    {
      id: 3,
      title: "Pozole Rojo",
      img: Main3,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 150.0,
    },

    {
      id: 4,
      title: "Carnitas",
      img: Main4,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 100.0,
    },

    {
      id: 5,
      title: "Menudo",
      img: Main5,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 150.0,
    },

    {
      id: 6,
      title: "Mole",
      img: Main6,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 130.0,
    },
  ],

  BeverageList: [
    {
      id: 7,
      title: "Cappuccino",
      img: Beverage1,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 50.0,
    },

    {
      id: 8,
      title: "Orange Juice",
      img: Beverage2,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 30.0,
    },

    {
      id: 9,
      title: "Coca Cola",
      img: Beverage3,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 20.0,
    },

    {
      id: 10,
      title: "Corona Extra",
      img: Beverage4,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 15.0,
    },

    {
      id: 11,
      title: "Water",
      img: Beverage5,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 10.0,
    },

    {
      id: 12,
      title: "Tea",
      img: Beverage6,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 15.0,
    },
  ],

  DessertList: [
    {
      id: 13,
      title: "Tres Leches Pastel",
      img: Dessert1,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 50.0,
    },

    {
      id: 14,
      title: "Dessert Nachos",
      img: Dessert2,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 20.0,
    },

    {
      id: 15,
      title: "Paletas",
      img: Dessert3,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 15.0,
    },

    {
      id: 16,
      title: "Fresas Con Crema",
      img: Dessert4,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 15.0,
    },

    {
      id: 17,
      title: "Flan",
      img: Dessert5,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 10.0,
    },

    {
      id: 18,
      title: "Jericalla",
      img: Dessert6,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 10.0,
    },
  ],

  AppetizerList: [
    {
      id: 19,
      title: "Taco Cups",
      img: Appetizer1,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 20.0,
    },

    {
      id: 20,
      title: "Guacamole",
      img: Appetizer2,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 15.0,
    },

    {
      id: 21,
      title: "Ceviche",
      img: Appetizer3,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 15.0,
    },

    {
      id: 22,
      title: "Taquitos",
      img: Appetizer4,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 15.0,
    },

    {
      id: 23,
      title: "Shrimp Cocktails",
      img: Appetizer5,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 25.0,
    },

    {
      id: 24,
      title: "Salsa with Chips",
      img: Appetizer6,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 10.0,
    },
  ],

  SpecialsList: [
    {
      id: 25,
      title: "Tacos de Birria",
      img: Specials1,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 50.0,
    },

    {
      id: 26,
      title: "Churros",
      img: Specials2,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 20.0,
    },
  ],

  SpecialsList2: [
    {
      id: 27,
      title: "Tamales",
      img: Specials3,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 15.0,
    },

    {
      id: 28,
      title: "Red Wine",
      img: Specials4,
      desc: "Bacon ipsum dolor amet andouille officia pariatur ullamco tail beef ribs shoulder sint cupidatat.",
      price: 75.0,
    },
  ],
};
