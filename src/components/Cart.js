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
      <h3>Shopping Cart</h3>
      {list.map((item) => (
        <div key={item.name} className="cart-item">
          <span>
            <span>{item.qty} </span>
            <span>{item.name} </span>
          </span>

          <span>{item.price * item.qty}</span>
        </div>
      ))}
      <div className="cart-total">
        <span></span>
        <span>Total: {getTotal()}</span>
      </div>
    </div>
  );
}

export default Cart;
