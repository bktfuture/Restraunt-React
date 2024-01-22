import Card from "./Card";

export default function Cart({ products,addToCartHandle }) {
  return (
    <div className="cardContainer">
      {products.length === 0 && <h3 className="nothing">Nothing found!</h3>}
      {products.map((product) => {
        return <Card {...product} addToCartHandle={addToCartHandle} />;
      })}
    </div>
  );
}
