import Card from "./Card";

export default function Cart({ products,addToCartHandle }) {
  return (
    <div className="cardContainer">
      {products.map((product) => {
        return <Card {...product} addToCartHandle={addToCartHandle} />;
      })}
    </div>
  );
}
