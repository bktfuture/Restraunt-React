import { formatAmount } from "../client";
import { Link } from "react-router-dom";

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
        <Link to={`/product/${id}`}>
        <p>{desc}</p>
        </Link>
        <button onClick={()=> addToCartHandle(id)} className="addToCartBtn">Add to Cart</button>
      </div>
    </div>
  );
}
