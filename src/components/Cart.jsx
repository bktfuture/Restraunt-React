import { getProducts } from "../client";
import Card from "./Card";

export default function Cart({ products = getProducts() }) {
  return (
    <div className="cardContainer">
      {products.map((product) => {
        return <Card {...product} />;
      })}
    </div>
  );
}
