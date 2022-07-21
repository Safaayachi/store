import { IoShirtOutline } from "react-icons/io5"
import { AiFillShopping } from "react-icons/ai"

import "../App.css"

const Card = ({ name, price }) => {
  return (
    <div className="card">
      <div className="product-box">
        <IoShirtOutline />
      </div>
      <div className="purchase">
        <h3>{name}</h3>
        <AiFillShopping />
      </div>

      <h4 className="price">${price}</h4>
    </div>
  )
}

export default Card
