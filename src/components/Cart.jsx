import CartItem from './CartItem';

const Cart = ({ setCart, cart, toggleCart, addToCartHandle, decreaseQuantity }) => {
	const deleteProduct = (id) => {
		const filteredItems = cart.filter((el) => el.id !== id);
		setCart(filteredItems);
	};

	const deleteAllFromCart = () => {
		setCart([]);
	};

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
					<h3>Your Cart is empty</h3>
				)}

				<div clasName="totalPrice">
					<h1>Total:</h1>
					<p>$</p>
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
