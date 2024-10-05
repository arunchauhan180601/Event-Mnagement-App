import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"

const CarItems = () => {

  const { contextValue, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext)


  return (
    <div className="container cartMain">
      <div className="row fw-bold text-center cardBorder  bgcolorofHeadingRow">
        <div className="col-sm-2 col-3 pt-3  pb-3 cardBorder">Products</div>
        <div className="col-sm-2 col-3 pt-3  pb-3 cardBorder">Title</div>
        <div className="col-sm-2 col-3 pt-3  pb-3 cardBorder">Price</div>
        <div className="col-sm-2 col-3 pt-3  pb-3 cardBorder">Quantity</div>
        <div className="col-sm-2 col-3 pt-3  pb-3 cardBorder">Total</div>
        <div className="col-sm-2 col-3 pt-3  pb-3 cardBorder">Remove</div>
      </div>
      {contextValue.map((item, index) => {
        if (cartItems[item.id] > 0) {
          return <div className="row text-center mt-3 cardBorder bgcolorOfRow" key={item.id}>
            <div className="col-sm-2 col-3 pt-3  pb-3 cardBorder overflow-hidden"> <img src={item.image} className='cartImage' /> </div>
            <div className="col-sm-2 col-3 pt-3  pb-3 cardBorder">{item.name}</div>
            <div className="col-sm-2 col-3 pt-3  pb-3 cardBorder">${item.new_price}</div>
            <div className="col-sm-2 col-3 pt-3  pb-3 cardBorder"><button className='cartBtn'> {cartItems[item.id]} </button></div>
            <div className="col-sm-2 col-3 pt-3  pb-3 cardBorder"> ${item.new_price * cartItems[item.id]} </div>
            <div className="col-sm-2 col-3 pt-3  pb-3 cardBorder "><img src={remove_icon} onClick={() => { removeFromCart(item.id) }} alt='remove_icon'></img></div>
          </div>
        }
        return null
      })}

    </div>
  )
}

export default CarItems