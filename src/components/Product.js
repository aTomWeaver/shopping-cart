import React from "react";
import { useState } from "react";
import "../styles/Product.css";

function Product({ name, price, color, addToCart }) {
  const [qty, setQty] = useState(1);

  const handleQtyChange = (e) => {
    setQty(parseInt(e.target.value));
  };

  return (
    <div className="product" style={{ background: color, width: "150px" }}>
      <h2>{name} milton</h2>
      <p>{price}</p>
      <input
        style={{ width: 50 }}
        type="number"
        min="1"
        onChange={handleQtyChange}
      ></input>
      <button
        onClick={() => {
          addToCart(name, qty, price);
          setQty(1);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
