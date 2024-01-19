import { useEffect, useState } from 'react';
import './App.css';
import { getProducts } from './client';
import Cards from './components/Cards';
import Search from './components/Search';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SingleCard from './components/SingleCard';

function App() {
	const [products, setProducts] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('all');

	useEffect(() => {
		setProducts(getProducts());
	}, []);

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
	// Filter products based on selected category
	const filteredProducts = () => {
		if (selectedCategory === 'all') {
			return products;
		} else {
			return products.filter((product) => product.category === selectedCategory);
		}
	};

	return (
		<BrowserRouter>
			<div className="body">
				<Link to="/">
					<h1>Restaurant Menu</h1>
				</Link>
				<Menu toggleCart={toggleCart} categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} cart={cart} />
				{isCartOpen && (
					<Cart cart={cart} toggleCart={toggleCart} setCart={setCart} addToCartHandle={addToCartHandle} decreaseQuantity={decreaseQuantity} />
				)}
				<Search />
				<Routes>
					<Route path="/" element={<Cards products={filteredProducts()} addToCartHandle={addToCartHandle} />} />
					<Route path="/product/:productId" element={<SingleCard addToCartHandle={addToCartHandle} products={products} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
