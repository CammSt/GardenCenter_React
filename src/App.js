import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

	let cartList = []

	return (
		<BrowserRouter>
			<NavBar/>
			<Routes>
				<Route  path='/' element={<Shop cartList={cartList}/>}/>
				<Route  path='/home' element={<Home cartList={cartList}/>}/>
				<Route  path='/aboutUs' element={<AboutUs/>}/>
				<Route  path='/contact' element={<ContactUs/>}/>
				<Route  path='/cart' element={<Cart cartList={cartList}/>}/>

				<Route  path='/category/:categoryId' element={<Shop cartList={cartList}/>} />
				<Route  path='/item/:id' element={<ItemDetailContainer cartList={cartList}/> }/>

			</Routes>
		</BrowserRouter>
	);
}

export default App;