import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartContext from "../../Context/CartContext";
import { Button } from "../Button/button.component";

import "../Products/product.styles.css";

const apiURL = process.env.REACT_APP_API_URL;

export const Product = ({ category }) => {
  const { addToCart } = useContext(CartContext);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch product data from the backend
    axios
      .get(`${apiURL}/api/items?category=${category}`)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    // Start page at the top
    window.scrollTo(0, 0);
  }, [category]);

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
