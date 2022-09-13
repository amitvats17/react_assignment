import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import ProductList from './pages/productlist';
import About from './pages/about';
import Product from './pages/details';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';
// import Contact from './pages/contact';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>		
		<Route exact path='/'  element={<ProductList />} />
		<Route path='/about' element={<About/>} />
		<Route path='/product' element={<Product/>} />
	</Routes>
	</Router>
);
}

export default App;
