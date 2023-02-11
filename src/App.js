import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar.component";
import {
  Home,
  Menu,
  Beverages,
  Desserts,
  Appetizers,
} from "./components/export-menu-section.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/pages/Gallery/gallery.component";
import { Cart } from "./components/Cart/cart.component";
import Footer from "./components/Footer/footer.component";
import { ShopContextProvider } from "./components/Context/shop-context";

export default function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/appetizers" element={<Appetizers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
}
