import React from "react";
import { useState } from "react";
import "../styles/Product.css";

function Product({ name, price, color, addToCart }) {
  const [qty, setQty] = useState(1);

  const handleQtyChange = (e) => {
    setQty(parseInt(e.target.value));
  };

  const resetQty = () => {
    let input = document.getElementById(`${name}-input`);
    input.value = 1;
    setQty(1);
  };

  return (
    <div className="product" style={{ background: color, width: "150px" }}>
      <h2>{name} milton</h2>
      <div className="product-price">${price}</div>
      <span>
        <input
          className="product-qty"
          id={`${name}-input`}
          style={{ width: 50 }}
          type="number"
          min="1"
          defaultValue="1"
          onChange={handleQtyChange}
        ></input>
        <button
          onClick={() => {
            addToCart(name, qty, price);
            resetQty();
          }}
        >
          Add To Cart
        </button>
      </span>
    </div>
  );
}

export default Product;
