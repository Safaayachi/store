import React, { useContext } from "react"
import Card from "./Card"

import "../App.css"
import CartContext from "../context/CartContext"

const Products = () => {
  const products = [
    { name: "vest", price: 70 },
    { name: "jacket", price: 50 },
    { name: "sweater", price: 20 },
    { name: "necklace", price: 35 },
    { name: "jumper", price: 40 },
    { name: "sneakers", price: 70 },
  ]
  const { addToCart } = useContext(CartContext)

  return (
    <div className="products-list">
      {products.map((product, idx) => (
        <div key={idx} onClick={() => addToCart(product.name, product.price)}>
          <Card name={product.name} price={product.price} />
        </div>
      ))}
    </div>
  )
}

export default Products
