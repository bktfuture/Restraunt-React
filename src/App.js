import "./App.css";
import { getProducts } from "./client";
import Card from "./components/Card";
import Cart from "./components/Cart";
const product = {
  id: 1,
  title: "buttermilk pancakes",
  category: "breakfast",
  price: 15.99,
  img: "https://i.ibb.co/fqQHBgt/item-1.jpg",
  desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
};

function App() {
  // we can create a constant for api calls or call api here (not prefer)
  return (
    <div className="body">
      <Cart />
      {/* place for a header */}
      {/* menu btns */}
      {/* search */}
      {/* cart */}
      <div className="cardContainer">{/* cards */}</div>
    </div>
  );
}

export default App;
