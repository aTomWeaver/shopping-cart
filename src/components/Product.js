import React from "react"
import '../styles/Product.css'

function Product({name, color, addToCartHandler}) {
  return (
    <div className="product" style={{background: color, width: "150px"}}>
      <p>This is a {name} product.</p>
      <button onClick={addToCartHandler}>Add To Cart</button>
    </div>
  )
}

export default Product;