import { BsCart } from "react-icons/bs";

const Menu = ({
  categories,
  selectedCategory,
  onSelectCategory,
  toggleCart,
  cart,
}) => {
    const cartLength = cart.reduce((acc, el) => acc + el.quantity, 0)
  const capitalizeCategory = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="menu-labels">
      <button
        className={selectedCategory === "all" ? "active-menu-btn" : ""}
        onClick={() => onSelectCategory("all")}
      >
        All
      </button>

      {categories.map((category) => {
        return (
          <button
            className={selectedCategory === category ? "active-menu-btn" : ""}
            key={category}
            onClick={() => onSelectCategory(category)}
          >
            {capitalizeCategory(category)}
          </button>
        );
      })}
      <>
        <button onClick={() => toggleCart()}>
          {" "}
          <BsCart style={{ fontSize: "12px" }} /> CART{cartLength > 0 && `(${cartLength})`}
        </button>
      </>
    </div>
  );
};
export default Menu;
