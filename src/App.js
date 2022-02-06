import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/pages/MenuSections/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/pages/MenuSections/Menu";
import Beverages from "./components/pages/MenuSections/Beverages";
import Desserts from "./components/pages/MenuSections/Desserts";
import Appetizers from "./components/pages/MenuSections/Appetizers";
import Cart from "./components/pages/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/appetizers" element={<Appetizers />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
