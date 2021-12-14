import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Beverages from "./pages/Beverages";
import Desserts from "./pages/Desserts";
import Appetizers from "./pages/Appetizers";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact components={Home} />
          <Route path="/menu" exact components={Menu} />
          <Route path="/beverages" exact components={Beverages} />
          <Route path="/desserts" exact components={Desserts} />
          <Route path="/appetizers" exact components={Appetizers} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
