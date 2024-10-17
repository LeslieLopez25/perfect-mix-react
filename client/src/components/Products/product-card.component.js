import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartContext from "../../Context/CartContext";
import { Button } from "../Button/button.component";

import "../Products/product.styles.css";

export const Product = () => {
  const { addToCart } = useContext(CartContext);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch product data from the backend
    axios
      .get("/api/items")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    // Start page at the top
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (data) => {
    addToCart(data);
  };

  return (
    <div className="productLineUp">
      {productData.map((data) => (
        <div key={data.id}>
          <img src={data.img} alt={data.title} />
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
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
