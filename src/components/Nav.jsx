import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AiFillShopping } from "react-icons/ai"
import CartContext from "../context/CartContext"

import "../App.css"

const Nav = () => {
  const { items } = useContext(CartContext)
  return (
    <nav className="nav">
      <Link to={"/"}>
        <h1 className="title">Prodcutss</h1>
      </Link>
      <Link to={"/checkout"}>
        <div className="cart">
          <AiFillShopping />
          <span>{items.length}</span>
        </div>
      </Link>
    </nav>
  )
}

export default Nav
