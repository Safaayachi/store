import React, { useContext } from "react"
import CartContext from "../context/CartContext"
import Card from "./Card"

import "../App.css"

const Checkout = () => {
  const { items } = useContext(CartContext)
  return (
    <div>
      <h2 className="checkout-title">Checkout</h2>
      <div className="shopping-bag">
        {items.map((item, idx) => (
          <Card key={idx} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default Checkout
