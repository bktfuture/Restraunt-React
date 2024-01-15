import React from 'react'

export default function CartItem() {
  return (
    <div className="card">
    <div className="card-left">
    <img src="${item.img}" />
    </div>
    <div className="card-right">
      <div className="title">
        <strong>Title</strong>
        <span>$Price</span>
      </div>
      <p>
        Description
      </p>
    </div>
  </div>
  )
}
