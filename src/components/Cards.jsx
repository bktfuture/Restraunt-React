import Card from "./Card";

export default function Cart({ products }) {
  return (
    <div className="cardContainer">
      {products.map((product) => {
        return <Card {...product} />;
      })}
    </div>
  );
}
