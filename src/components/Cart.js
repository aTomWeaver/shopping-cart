import React from "react";
import "../styles/Cart.css";

function Cart({ list }) {
  const getTotal = () => {
    let total = 0;
    list.forEach((el) => {
      total += el.price * el.qty;
    });
    return total;
  };

  return (
    <div className="cart-modal cart-invis">
      {list.map((item) => (
        <div key={item.name}>
          <span>{item.name} </span>
          <span>{item.qty} </span>
          <span>{item.price * item.qty}</span>
        </div>
      ))}
      <div>
        <span>Total: {getTotal()}</span>
      </div>
    </div>
  );
}

export default Cart;
