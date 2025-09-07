import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.component";
import Footer from "./components/Footer/footer.component";
import Loader from "./components/Loader/loader.component";
import { CartProvider } from "./Context/CartContext";

import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// Lazy load pages and components
const Home = lazy(() => import("./pages/MenuSections/home.component"));
const Main = lazy(() => import("./pages/MenuSections/main.component"));
const Beverages = lazy(() =>
  import("./pages/MenuSections/beverages.component")
);
const Desserts = lazy(() => import("./pages/MenuSections/desserts.component"));
const Appetizers = lazy(() =>
  import("./pages/MenuSections/appetizers.component")
);
const Gallery = lazy(() => import("./pages/Gallery/gallery.component"));
const Cart = lazy(() => import("./components/Cart/cart.component"));

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
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<Main />} />
                <Route path="/beverages" element={<Beverages />} />
                <Route path="/desserts" element={<Desserts />} />
                <Route path="/appetizers" element={<Appetizers />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Suspense>
            <Footer />
          </>
        )}
      </Router>
    </CartProvider>
  );
}
