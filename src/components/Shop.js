import React from "react";
import Product from "./Product";
import "../styles/Shop.css";
const products = require("../data/products.json");

function Shop() {
  return (
    <div className="product-ctr">
      {/* map all of the products */}
      {products.list.map((product) => (
        <Product
          name={product.name}
          price={product.price}
          color={product.color}
          key={product.color}
        />
      ))}
    </div>
  );
}

export default Shop;
