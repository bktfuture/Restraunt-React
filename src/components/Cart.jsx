import CartItem from "./CartItem";
const Cart = ({ cartItems }) => {
  const deleteProduct = (id) => {
    const filteredItems = cartItems.filter((el) => el.id !== id);
    // setCartItems(filteredItems)
  };

  const deleteAllFromCart = () => {
    // setCartItems([])
  };
const tempArr = [1,2,3,4]
  return (
    <div className="cart-container">
      {tempArr.map((item) => (
        <CartItem deleteProduct={deleteProduct} {...item} />
      ))}
    </div>
  );
};

export default Cart;
