import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav({ cartQty, toggle }) {
  return (
    <header>
      {/* LEFT */}
      <div className="left">
        <Link to="/">
          <h1>Milton's Milton Factory</h1>
        </Link>
      </div>

      {/* RIGHT */}
      <div className="right">
        {/* SHOP LINK */}
        <Link to="/shop" className="shop-link">
          Shop
        </Link>
        {/* CART */}
        <div className="cart-btn-ctr">
          <button
            className="cart-icon"
            onClick={toggle}
            style={{ height: "20px" }}
          >
            <h2>Cart</h2>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
