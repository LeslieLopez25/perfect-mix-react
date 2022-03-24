import React from "react";
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

function App() {
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
            element={<Appetizers data={AppetizerList} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
