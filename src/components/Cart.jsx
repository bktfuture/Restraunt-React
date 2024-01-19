import CartItem from './CartItem';
import { useState, useEffect } from 'react';

const Cart = ({ setCart, cart, toggleCart, addToCartHandle, decreaseQuantity }) => {
	const deleteProduct = (id) => {
		const filteredItems = cart.filter((el) => el.id !== id);
		setCart(filteredItems);
	};
	const [totalCost, setTotalCost] = useState(0);

	const deleteAllFromCart = () => {
		setCart([]);
	};

	useEffect(() => {
		let cost = 0;

		for (let i = 0; i < cart.length; i++) {
			cost += cart[i].quantity * cart[i].price;
		}
		setTotalCost(cost);
	}, [cart]);

	return (
		<>
			<div className="cart-container">
				<button
					className="cartCollapseBtn"
					onClick={() => {
						toggleCart();
					}}
				>
					Close
				</button>

				{cart.length !== 0 ? (
					cart.map((item) => (
						<CartItem deleteProduct={deleteProduct} decreaseQuantity={decreaseQuantity} addToCartHandle={addToCartHandle} {...item} />
					))
				) : (
					<h3>Your Cart is empty!</h3>
				)}
				<div>
					<hr />
				</div>
				<div className="totalPrice">
					<h4>Total Price:</h4>
					<h4>${totalCost.toFixed(2)}</h4>
				</div>
				{cart.length > 0 && (
					<button className="deleteBtn" onClick={() => deleteAllFromCart()}>
						Remove All
					</button>
				)}
			</div>
		</>
	);
};

export default Cart;
