import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ItemDetailContainer from '../components/ItemDetailContainer'

export default function PrincipalRoute() {
    return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route  path='/' element={<Shop/>}/>
            <Route  path='/home' element={<Home/>}/>
            <Route  path='/aboutUs' element={<AboutUs/>}/>
            <Route  path='/contact' element={<ContactUs/>}/>
            <Route  path='/cart' element={<Cart/>}/>

            <Route  path='/category/:categoryId' element={<Shop/>} />
            <Route  path='/item/:id' element={<ItemDetailContainer/> }/>

        </Routes>
    </BrowserRouter>

    )
}

