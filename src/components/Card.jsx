import { formatAmount } from '../client';

export default function Card({ id, title, price, img, desc, addToCartHandle }) {
	return (
		<div className="card">
			<div className="card-left">
				<img src={img} alt={title} />
			</div>
			<div className="card-right">
				<div className="card-title">
					<strong>{title}</strong>
					<span>{formatAmount(price)}</span>
				</div>
				<p>{desc}</p>
				<button onClick={() => addToCartHandle(id)} className="addToCartBtn hoverStyle">
					Add to Cart
				</button>
			</div>
		</div>
	);
}
