export default function Card({ id, title, price, img, desc }) {
  return (
    <div className="card">
      <div className="card-left">
        <img src={img} alt={title} />
      </div>
      <div className="card-right">
        <div className="card-title">
          <strong>{title}</strong>
          <span>{price}</span>
        </div>
        <p>{desc}</p>
        <button className="addToCartBtn">Add to Cart</button>
      </div>
    </div>
  );
}
