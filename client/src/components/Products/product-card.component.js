import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartContext from "../../Context/CartContext";
import { Button } from "../Button/button.component";

import "../Products/product.styles.css";

const apiURL = process.env.REACT_APP_API_URL;

// Product component fetches and displays products from a given category
export const Product = ({ category }) => {
  const { addToCart } = useContext(CartContext);
  const [productData, setProductData] = useState([]);

  // Fetch product data when component mounts or category changes
  useEffect(() => {
    // Make GET request to backend for items in the selected category
    axios
      .get(`${apiURL}/api/items?category=${category}`)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    // Scroll to top of the page on component load
    window.scrollTo(0, 0);
  }, [category]);

  // Handle clicking "Add to Cart" for a product
  const handleClick = (data) => {
    addToCart(data);
  };

  return (
    <div className="productLineUp">
      {productData.map((data) => (
        <div key={data.id} className="product-card">
          <img src={`${apiURL}${data.image}`} alt={data.name} />
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <h4>${data.price.toFixed(2)}</h4>
          <Button
            buttonStyle="btn--secondary btn--large"
            onClick={() => handleClick(data)}
          >
            Add to Cart
          </Button>
        </div>
      ))}
    </div>
  );
};
