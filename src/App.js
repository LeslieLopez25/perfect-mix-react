import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import {
  Home,
  Menu,
  Beverages,
  Desserts,
  Appetizers
} from "./components/ExportMenuSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import {
  MenuList,
  BeverageList,
  DessertList,
  AppetizerList
} from "./components/Products/data";

export default function App() {
  const [cart, setCart] = useState([]);

  const handleClick = item => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

    const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu data={MenuList} />} />
          <Route
            path="/beverages"
            element={<Beverages data={BeverageList} />}
          />
          <Route path="/desserts" element={<Desserts data={DessertList} />} />
          <Route
            path="/appetizers"
            element={<Appetizers data={AppetizerList} handleClick={handleClick} />}
          />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
