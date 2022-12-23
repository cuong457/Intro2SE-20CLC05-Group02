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
import SellerPage from './components/SellerPage/SellerPage'
import AddItem from './components/AddItem/AddItem'
import SellerOrderPage from './components/SellerOrderPage/SellerOrderPage';
import SellerPageTest from './components/SellerPageTest/SellerPageTest';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import BuyDetail from './components/BuyDetail/BuyDetail';

/* check is Seller */
const isSeller = true;

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

                {/* Seller Part start */}
                
                {
                    isSeller === true ? (
                        <Routes>
                            <Route path="/seller" element={<><Header/><SellerPageTest/><Footer/></>} />,
                            <Route path="/seller/add" element={<><Header/><AddItem/><Footer/></>} />
                            <Route path="/seller/orders" element={<><Header/><SellerOrderPage/><Footer/></>} />
                            <Route path="/seller/profile" element={<><Header/><Footer/></>} />
                        </Routes>
                        
                    ) : (
                        <LoginPage/>
                    )
                }

                <Routes></Routes>
                <Routes></Routes>
                <Routes></Routes>

                {/* Seller Part end */}
            </div>
        </BrowserRouter>
    );
}


export default App;
