import React from "react";
import Product from "./Product";
import "../styles/Shop.css";
const products = require("../data/products.json");

function Shop() {
  return (
    <>
      {/* map all of the products */}
      {products.list.map((product) => (
        <Product name={product.name} key={product.color} />
      ))}
      <Product name="Bungus" />
      <Product name="Chungle" />
      <Product name="Frumbutt" />
    </>
  );
}

export default Shop;
