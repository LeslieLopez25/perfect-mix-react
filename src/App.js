import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/pages/Menu/Menu";
import Beverages from "./components/pages/Beverages/Beverages";
import Desserts from "./components/pages/Desserts/Desserts";
import Appetizers from "./components/pages/Appetizers/Appetizers";
import Order from "./components/pages/Order";
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
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
