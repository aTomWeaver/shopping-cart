import React from "react";
import Product from "./Product";
import "../styles/Shop.css";
const products = require("../data/products.json");

function Shop({handleCartAdd}) {
  return (
    <div className="product-ctr">
      {/* map all of the products */}
      {products.list.map((product) => (
        <Product
          name={product.name}
          price={product.price}
          color={product.color}
          key={product.color}
          addToCart={handleCartAdd}
        />
      ))}
    </div>
  );
}

export default Shop;
