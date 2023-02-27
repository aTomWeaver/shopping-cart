import React from "react"
import '../styles/Product.css'

function Product({name, color}) {
  return (
    <div className="product" style={{background: color}}>
      This is a {name} product.
    </div>
  )
}

export default Product;