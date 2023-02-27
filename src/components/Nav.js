import React from "react";
import "../styles/Nav.css";

function Nav() {
  return (
    <header>
      <div className="left">
        <a href="/">
          <h1>SHÖP</h1>
        </a>
      </div>
      <div className="right">
        <a href="/shop">Shop</a>
        <div>Cart</div>
      </div>
    </header>
  );
}

export default Nav;
