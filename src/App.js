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

export default function App() {  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/beverages"
            element={<Beverages />}
          />
          <Route path="/desserts" element={<Desserts />} />
          <Route
            path="/appetizers"
            element={<Appetizers />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
