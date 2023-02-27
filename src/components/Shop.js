import React from "react";
import Product from "./Product";
import "../styles/Shop.css";
const products = require("../data/products.json");

function Shop() {
  return (
    <>
      {/* map all of the products */}
      {products.list.map((product) => (
        <Product
          name={product.name}
          color={product.color}
          key={product.color}
        />
      ))}
    </>
  );
}

export default Shop;
