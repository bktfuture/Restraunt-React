import { useEffect, useState } from 'react';
import './App.css';
import { getProducts } from './client';
import Cards from './components/Cards';
import Search from './components/Search';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SingleCard from './components/SingleCard';
import { FaLeaf } from 'react-icons/fa';

function App() {
	const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('all');

	useEffect(() => {
		setProducts(getProducts());
	}, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === selectedCategory));
    }
  }, [products, selectedCategory])

	const addToCartHandle = (id) => {
		const isExsists = cart.some((product) => product.id === id);
		if (!isExsists) {
			const newProduct = products.find((product) => product.id === id);
			setCart([...cart, { ...newProduct, quantity: 1 }]);
		} else {
			const updatedCart = cart.map((product) => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product));
			setCart(updatedCart);
		}
	};

	const decreaseQuantity = (id) => {
		const updatedCart = cart.map((product) => (product.id === id ? { ...product, quantity: product.quantity - 1 } : product));
		setCart(updatedCart);
	};

	const toggleCart = () => {
		setIsCartOpen(!isCartOpen);
	};

	const categories = [...new Set(products.map((product) => product.category))];

  const onSearch = (searchQuery) => {
    let foundProducts = []

    if (selectedCategory === 'all') {
      foundProducts = products.filter((product)=> {
        return product.title.toLowerCase().includes(searchQuery)
      });
    } else {
      foundProducts = filteredProducts.filter((product) => {
        return product.title.toLowerCase().includes(searchQuery)
      });
    }
    
    setFilteredProducts(foundProducts)
  }

	return (
		<BrowserRouter>
			<div className="body">
				<Link to="/">
					<h1 onClick={()=> setSelectedCategory("all")}>
						<span className="icon">
							<FaLeaf color="green" size={27} />
						</span>
						Restaurant Menu
					</h1>
				</Link>
				<Menu toggleCart={toggleCart} categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} cart={cart} />
				{isCartOpen && (
					<Cart cart={cart} toggleCart={toggleCart} setCart={setCart} addToCartHandle={addToCartHandle} decreaseQuantity={decreaseQuantity} />
				)}
				<Search onSearch={onSearch}/>
				<Routes>
					<Route path="/" element={<Cards products={filteredProducts} addToCartHandle={addToCartHandle} />} />
					<Route path="/product/:productId" element={<SingleCard addToCartHandle={addToCartHandle} products={products} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
