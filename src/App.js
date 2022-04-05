import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  Home,
  Menu,
  Beverages,
  Desserts,
  Appetizers
} from "./components/ExportMenuSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/pages/Gallery/Gallery";
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
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
