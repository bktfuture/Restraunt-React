import React from 'react'
import { formatAmount } from '../client'

export default function CartItem({title, price,img, quantity, deleteProduct, id }) {
  return (
    <div className="cartItem card">
    <div className="card-left">
    <img src={img} />
    </div>
    <div className="card-right">
      <div className="title">
        <strong>{quantity} of {title}</strong>
        <span>{formatAmount(price)}</span>
      </div>
      
    </div>
      <button className='deleteBtn' onClick={()=> deleteProduct(id)}>x</button>
  </div>
  )
}
