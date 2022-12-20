import React from 'react';
import './App.css'

import Header from './components/Header/Header'
import HomeDetail from './components/HomeDetail/HomeDetail'
import CartDetail from './components/CartDetail/CartDetail'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import LoginPage from './components/Login/Login'
import RegisterPage from './components/Register/Register'

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import BuyDetail from './components/BuyDetail/BuyDetail';




function App() {
    return (
        <BrowserRouter>
            <div className='bg-eee'>

                <Routes>
                    <Route exact path="/" element={<><Header/><HomeDetail/><Footer/></>} />
                </Routes>

                <Routes>
                    <Route exact path="/user@" element={<><Header/><HomeDetail/><Footer/></>} />
                </Routes>

                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                </Routes>

                <Routes>
                    <Route exact path="/register" element={<RegisterPage/>} />
                </Routes>

                <Routes>
                    <Route path="/cartdetail" element={<><Header/><CartDetail/><Footer/></>} />
                </Routes>

                <Routes>
                    <Route path="/item" element={<><Header/><ItemDetail/><Footer/></>} />
                </Routes>

                <Routes>
                    <Route path="/buy" element={<><Header/><BuyDetail /><Footer/></>} />
                </Routes>

                <Routes>
                    <Route path="/products" element={<><Header/><Products/><Footer/></>} />
                </Routes>

            </div>
        </BrowserRouter>
    );
}


export default App;
