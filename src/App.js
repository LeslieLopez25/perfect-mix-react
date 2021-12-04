import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Menu from "./pages/Menu/Menu";
import Beverages from "./pages/Beverages/Beverages";
import Desserts from "./pages/Desserts/Desserts";
import Appetizers from "./pages/Appetizers/Appetizers";
import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact components={Home} />
          <Route path="/menu" exact components={Menu} />
          <Route path="/beverages" exact components={Beverages} />
          <Route path="/desserts" exact components={Desserts} />
          <Route path="/appetizers" exact components={Appetizers} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
