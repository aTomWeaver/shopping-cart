import React from "react";
import "../styles/Nav.css";

function Nav() {
  return (
    <header>
      <div className="left">
        <a href="/">
          <h1>Milton's Milton Factory</h1>
        </a>
      </div>
      <div className="right">
        <a href="/shop" className="shop-link">
          Shop
        </a>
        <div className="cart-icon">Cart</div>
      </div>
    </header>
  );
}

export default Nav;
