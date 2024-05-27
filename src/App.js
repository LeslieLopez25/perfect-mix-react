import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar.component";
import {
  Home,
  Main,
  Beverages,
  Desserts,
  Appetizers,
} from "./components/export-menu-section.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery/gallery.component";
import Footer from "./components/Footer/footer.component";
import Loader from "./components/Loader/loader.component";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Cart/cart.component";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <CartProvider>
      <Router>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/main" element={<Main />} />
              <Route path="/beverages" element={<Beverages />} />
              <Route path="/desserts" element={<Desserts />} />
              <Route path="/appetizers" element={<Appetizers />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </CartProvider>
  );
}
