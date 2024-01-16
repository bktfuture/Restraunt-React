import CartItem from "./CartItem";
const Cart = ({ setCart, cart, toggleCart }) => {
  const deleteProduct = (id) => {
    
    const filteredItems = cart.filter((el) => el.id !== id);
    setCart(filteredItems)
  };

  const deleteAllFromCart = () => {
    // setCartItems([])
  };
// const tempArr = [1,2,3,4]
  return (
    <>
    <div className="cart-container">
      <button className="cartCollapseBtn" onClick={()=> {toggleCart()}}>Close</button>

      {cart.length !== 0 ?  cart.map((item) => (
        <CartItem deleteProduct={deleteProduct} {...item} />
      )) : <h3>Your Cart is empty</h3>}
  
      
      {cart.length > 0 && <button className="deleteBtn">Remove All</button>}
    </div>
    </>
  );
};

export default Cart;
