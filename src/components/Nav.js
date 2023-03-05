import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav({ cartQty, toggle }) {
  return (
    <header>
      {/* LEFT */}
      <div className="left">
        <Link to="/" className="logo-link">
          <h1>Milton's Milton Factory</h1>
        </Link>
      </div>

      {/* RIGHT */}
      <div className="right">
        {/* SHOP LINK */}
        <Link to="/shop" className="shop-link">
          <h2>Shop</h2>
        </Link>
        {/* CART */}
        <button className="cart-icon" onClick={toggle}>
          <h2>Cart</h2>
          <p>:  {cartQty}</p>
        </button>
      </div>
    </header>
  );
}

export default Nav;
