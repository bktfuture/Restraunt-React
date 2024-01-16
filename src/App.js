import { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./client";
import Cards from "./components/Cards";
import Search from "./components/Search";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(getProducts());
  });
  // we can create a constant for api calls or call api here (not prefer)
  return (
    <div className="body">
      <h1>Restaurant Menu</h1>
      <Search />

      {/* place for a header */}
      {/* menu btns */}
      {/* search */}
      {/* cart */}

      <Cards products={products} />
    </div>
  );
}

export default App;
