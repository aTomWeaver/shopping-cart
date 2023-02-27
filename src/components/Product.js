import React from "react"
import '../styles/Product.css'

function Product({name, color, addToCartHandler}) {
  return (
    <div className="product" style={{background: color, width: "150px"}}>
      <h2>{name} milton</h2>
      <button onClick={addToCartHandler}>Add To Cart</button>
    </div>
  )
}

export default Product;