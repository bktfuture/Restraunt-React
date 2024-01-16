import { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./client";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setProducts(getProducts());
  }, []);
  
  const addToCartHandle = (id) => {
    const isExsists = cart.some((product) => product.id === id)
    if(!isExsists){
      const newProduct = products.find(product => product.id === id);
      setCart([...cart, {...newProduct, quantity: 1}])
    } else{
      const updatedCart = cart.map((product) => product.id === id ? {...product, quantity: product.quantity+1} : product)
      setCart(updatedCart)
    }
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

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
      {isCartOpen && <Cart cart={cart} toggleCart={toggleCart} setCart={setCart}/>}

      <Search />
      <button onClick={()=> toggleCart()}>Temporary Cart</button>

      {/* place for a header */}
      {/* search */}

      <Cards products={filteredProducts()} addToCartHandle={addToCartHandle}/>
    </div>
  );
}

export default App;
