import React from "react"

function Product({name, id}) {
  return (
    <div className="product" id={id}>
      This is a {name} product
    </div>
  )
}

export default Product;