import React from 'react';
import { useParams } from 'react-router-dom';
import { formatAmount } from '../client';

export default function SingleCard({ products, addToCartHandle }) {
	const { productId } = useParams();
	const product = products.find((el) => el.id == productId);

	if (!product) {
		return <h3>Product not found...</h3>;
	}

	const { img, title, price, desc, id } = product;

	return (
		<div className="single-card card">
			<div className="card-left">
				<img src={img} alt={title} />
			</div>
			<div className="card-right">
				<div className="card-title">
					<strong>{title}</strong>
					<span>{formatAmount(price)}</span>
				</div>
				<p>{desc}</p>
				<button onClick={() => addToCartHandle(id)} className="addToCartBtn">
					Add to Cart
				</button>
			</div>
		</div>
	);
}
