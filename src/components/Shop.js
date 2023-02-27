import React from "react";
import Product from "./Product";
import "../styles/Shop.css"

function Shop() {
  return (
    <>
      {/* map all of the products */}
      <Product name="Bungus"/>
      <Product name="Chungle" />
      <Product name="Frumbutt" />
    </>
  );
}

export default Shop