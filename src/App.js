import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/beverages" component={Beverages} />
          <Route path="/desserts" component={Desserts} />
          <Route path="/appetizers" component={Appetizers} />
          <Route path="/sign-up" component={SignUp} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
