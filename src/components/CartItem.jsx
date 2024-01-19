import React from 'react';
import { formatAmount } from '../client';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';

export default function CartItem({ title, price, img, quantity, deleteProduct, id, addToCartHandle, decreaseQuantity }) {
	return (
		<div className="cartItem card">
			<div className="card-left">
				<img src={img} />
			</div>

			<div className="cartText">
				<div className="title">
					<strong>{title}</strong>
				</div>
				<p>{formatAmount(price * quantity)}</p>

				<div className="counter">
					<CiCircleMinus size={30} onClick={() => decreaseQuantity(id)} />

					<span>{quantity}</span>
					<CiCirclePlus size={30} onClick={() => addToCartHandle(id)} />
				</div>
			</div>

			<button className="deleteBtn" onClick={() => deleteProduct(id)}>
				Remove
			</button>
		</div>
	);
}
