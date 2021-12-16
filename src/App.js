import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/pages/Menu";
import Beverages from "./components/pages/Beverages";
import Desserts from "./components/pages/Desserts";
import Appetizers from "./components/pages/Appetizers";
import SignUp from "./components/pages/SignUp";
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
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
