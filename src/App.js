import React from 'react';
import './App.css'
import './Admin.css'

import Header from './components/Header/Header'
import HeaderUser from './components/HeaderUser/HeaderUser'
import HomeDetail from './components/HomeDetail/HomeDetail'
import CartDetail from './components/CartDetail/CartDetail'
import ItemDetail from './components/ItemDetail/ItemDetail'
import BuyDetail from './components/BuyDetail/BuyDetail';
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'

import LoginPage from './components/Login/Login'
import RegisterPage from './components/Register/Register'

import AdminNavbar from './components/AdminNavbar/AdminNavbar'
import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import UserCenter from './components/UserCenter/UserCenter'
import SellerCenter from './components/SellerCenter/SellerCenter'
import Posts from './components/Posts/Posts'

import { BrowserRouter, Routes, Route} from "react-router-dom";

const STATUS = {
    BAN: -1,
    NORMAL: 1,
    ANONYOUS: 0
}

const TYPE = {
    NORMAL_USER: 0,
    ADMIN: 1,
    SELLER: -1
}

export default class App extends React.Component {
    state = {
        user_account: {
            usn: "", psw: "", status: STATUS.ANONYOUS, type: TYPE.NORMAL_USER
        }
    }
    setUserAccount = (usn, psw, status, type) => {
        if (status === STATUS.NORMAL) {
            this.setState({user_account: {usn, psw, status, type}})
        }
        else if(status === STATUS.BAN) {
            // Handle
        }
    }
    removeUserAccount = () => {
        this.setState({user_account: {usn: "", psw: "", status: STATUS.ANONYOUS, type: TYPE.NORMAL_USER}})
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <div className='bg-eee'>
                        <Routes>    
                            <Route 
                                path={"/"} 
                                element={ 
                                    this.state.user_account.status === STATUS.NORMAL ? (
                                        <><HeaderUser logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                        <HomeDetail/>
                                        <Footer/></>
                                    ) : (
                                        <><Header/><HomeDetail/><Footer/></>
                                    )
                                }
                            />
                            <Route 
                                path={"/cartdetail"} 
                                element={ 
                                    this.state.user_account.status === STATUS.NORMAL ? (
                                        <><HeaderUser logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                        <CartDetail/>
                                        <Footer/></>
                                    ) : (
                                        <>  
                                            <Header/><CartDetail/><Footer/>
                                        </>
                                    )
                                } 
                            />
                            <Route 
                                path={"/item"}  
                                element={ 
                                    this.state.user_account.status === STATUS.NORMAL ? (
                                        <><HeaderUser logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                        <ItemDetail/>
                                        <Footer/></>
                                    ) : (
                                        <>  
                                            <Header/>
                                            <ItemDetail/>
                                            <Footer/>
                                        </>
                                    )
                                } 
                            />
                            <Route 
                                path={"/buy"}  
                                element={ 
                                    this.state.user_account.status === STATUS.NORMAL ? (
                                        <><HeaderUser logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                        <BuyDetail/>
                                        <Footer/></>
                                    ) : (
                                        <>  
                                            <Header/>
                                            <BuyDetail/>
                                            <Footer/>
                                        </>
                                    )
                                } 
                            />
                            <Route 
                                path={"/products"}  
                                element={ 
                                    this.state.user_account.status === STATUS.NORMAL ? (
                                        <><HeaderUser logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                        <Products/>
                                        <Footer/></>
                                    ) : (
                                        <>  
                                            <Header/>
                                            <Products/>
                                            <Footer/>
                                        </>
                                    )
                                } 
                            />
                            <Route 
                                path={"/login"} 
                                element={
                                    <LoginPage 
                                        setAccount={this.setUserAccount}
                                    />
                                } 
                            />
                            <Route 
                                path={"/register"} 
                                element={<RegisterPage/>} 
                            />
                            <Route 
                                path={"/admin"}  
                                // element={
                                //     this.state.user_account.type == TYPE.ADMIN ? (<Admin/>) : (
                                //         <><Header/><Products/><Footer/></>
                                //     )
                                // } 
                                element={<AdminNavbar/>}
                            />
                            <Route 
                                path={"/admin/dashboard"}  
                                // element={
                                //     this.state.user_account.type == TYPE.ADMIN ? (<Admin/>) : (
                                //         <><Header/><Products/><Footer/></>
                                //     )
                                // } 
                                element={<><AdminNavbar/><AdminDashboard/></>}
                            />
                            <Route 
                                path={"/admin/usercenter"}  
                                // element={
                                //     this.state.user_account.type == TYPE.ADMIN ? (<Admin/>) : (
                                //         <><Header/><Products/><Footer/></>
                                //     )
                                // } 
                                element={<><AdminNavbar/><UserCenter/></>}
                            />
                            <Route 
                                path={"/admin/sellercenter"}  
                                // element={
                                //     this.state.user_account.type == TYPE.ADMIN ? (<Admin/>) : (
                                //         <><Header/><Products/><Footer/></>
                                //     )
                                // } 
                                element={<><AdminNavbar/><SellerCenter/></>}
                            />
                            <Route 
                                path={"/admin/posts"}  
                                // element={
                                //     this.state.user_account.type == TYPE.ADMIN ? (<Admin/>) : (
                                //         <><Header/><Products/><Footer/></>
                                //     )
                                // } 
                                element={<><AdminNavbar/><Posts/></>}
                            />
                        </Routes>
                    </div>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
