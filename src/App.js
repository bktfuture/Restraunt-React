import { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./client";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Menu from "./components/Menu";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  // Extract unique categories from products
  const categories = [...new Set(products.map((product) => product.category))];

  // Filter products based on selected category
  const filteredProducts = () => {
    if (selectedCategory === 'all') {
      return products
    } else {
      return products.filter((product) => product.category === selectedCategory);
    }
  }

  // we can create a constant for api calls or call api here (not prefer)
  return (
    <div className="body">
      <h1>Restaurant Menu</h1>

      <Menu categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <Search />

      {/* place for a header */}
      {/* menu btns */}
      {/* search */}
      {/* cart */}

      <Cards products={filteredProducts()} />
    </div>
  );
}

export default App;
