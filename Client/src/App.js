import React from "react";
import "./App.css";
import "./Admin.css";
import { Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import HeaderUser from "./components/HeaderUser/HeaderUser";
import HomeDetail from "./components/HomeDetail/HomeDetail";
import CartDetail from "./components/CartDetail/CartDetail";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import BuyDetail from "./components/BuyDetail/BuyDetail";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

import LoginPage from "./components/Login/Login";
import RegisterPage from "./components/Register/Register";
import ProfilePage from "./components/Profile/Profile";
import OrderPage from "./components/Order/Order";

import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import UserCenter from "./components/UserCenter/UserCenter";
import SellerCenter from "./components/SellerCenter/SellerCenter";
import Posts from "./components/Posts/Posts";

import SellerRegister from "./components/SellerRegister/SellerRegister";
import SellerOrderPage from "./components/SellerOrderPage/SellerOrderPage";
import SellerPage from "./components/SellerPage/SellerPage";
import AddItem from "./components/AddItem/AddItem";
import SellerProfilePage from "./components/SellerProfilePage/SellerProfilePage";
import EditSellerItem from "./components/EditSellerItem/EditSellerItem";
import SellerStoreProfilePage from "./components/SellerStoreProfilePage/SellerStoreProfilePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const STATUS = {
  BAN: -1,
  NORMAL: 1,
  ANONYOUS: 0,
};

const TYPE = {
  NORMAL_USER: 0,
  ADMIN: 1,
  SELLER: -1,
};
const isSeller = true;
export default class App extends React.Component {
    state = {
        user_account: {
            _id: "",
            usn: "",
            psw: "",
            status: STATUS.ANONYOUS, 
            type: TYPE.NORMAL_USER
        },
        keySearch: ''
    }
    callbackSetKeySearch = (k) => {
        this.setState({keySearch: k});
        console.log("Key: " + k);
    }
    setUserAccount = (id, usn, psw, status, type) => {
        if (status === STATUS.NORMAL) {
            this.setState({user_account: {id, usn, psw, status, type}});
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
                                        <><HeaderUser callbackSetKey={this.callbackSetKeySearch} logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                        <HomeDetail/>
                                        <Footer/></>
                                    ) : (
                                        <><Header callbackSetKey={this.callbackSetKeySearch}/><HomeDetail/><Footer/></>
                                    )
                                }
                            />
                            <Route 
                                path={"/cartdetail/:id"} 
                                element={ 
                                    this.state.user_account.status === STATUS.NORMAL ? (
                                        <><HeaderUser callbackSetKey={this.callbackSetKeySearch} logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                        <CartDetail/>
                                        <Footer/></>
                                    ) : (
                                        <>  
                                            <Header callbackSetKey={this.callbackSetKeySearch}/><CartDetail/><Footer/>
                                        </>
                                    )
                                } 
                            />
                            <Route 
                                path={"/item/:slug"}  
                                element={ 
                                    this.state.user_account.status === STATUS.NORMAL ? (
                                        <><HeaderUser callbackSetKey={this.callbackSetKeySearch} logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                        <ItemDetail/>
                                        <Footer/></>
                                    ) : (
                                        <>  
                                            <Header callbackSetKey={this.callbackSetKeySearch}/>
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
                                        <><HeaderUser callbackSetKey={this.callbackSetKeySearch} logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                        <BuyDetail/>
                                        <Footer/></>
                                    ) : (
                                        <>  
                                            <Header callbackSetKey={this.callbackSetKeySearch}/>
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
                                        <><HeaderUser callbackSetKey={this.callbackSetKeySearch} logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                        <Products key={this.state.keySearch}/>
                                        <Footer/></>
                                    ) : (
                                        <>  
                                            <Header callbackSetKey={this.callbackSetKeySearch}/>
                                            <Products key={this.state.keySearch}/>
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

              {/*{
                                isSeller === true ? (
                                    <Routes>
                                        
                                    </Routes>
                                                    
                                ) : (
                                    <LoginPage/>
                                )
                            }
                            */}
                            <Route 
                                path="/seller-register" 
                                element={
                                    this.state.user_account.status === STATUS.NORMAL && this.state.user_account.type !== TYPE.SELLER ? (
                                        <SellerRegister setAccount={this.setUserAccount}/>
                                    ) : (
                                        <>
                                            <HeaderUser callbackSetKey={this.callbackSetKeySearch} logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                            <SellerPage/>
                                            <Footer/>
                                        </>
                                    )
                                    
                                }

                            />
                            <Route 
                                path="/seller" 
                                element={
                                    this.state.user_account.status === STATUS.NORMAL && this.state.user_account.type === TYPE.SELLER ? (
                                        <>
                                            <HeaderUser callbackSetKey={this.callbackSetKeySearch} logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                            <SellerPage/>
                                            <Footer/>
                                        </>
                                    ) : (
                                        <>
                                            <LoginPage 
                                        setAccount={this.setUserAccount}
                                    />
                                        </>
                                    )
                                    
                                } 

                            />
                            <Route 
                                path="/seller/add" 
                                element={
                                    this.state.user_account.status === STATUS.NORMAL && this.state.user_account.type === TYPE.SELLER ? (
                                        <>
                                            <HeaderUser callbackSetKey={this.callbackSetKeySearch} logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                            <AddItem/>
                                            <Footer/>
                                        </>
                                    ) : (
                                        <>
                                            <LoginPage setAccount={this.setUserAccount}
                                        />
                                        </>
                                    )
                                } 
                            />
                            <Route 
                                path="/seller/orders" 
                                element={
                                    this.state.user_account.status === STATUS.NORMAL && this.state.user_account.type === TYPE.SELLER ? (
                                        <>
                                            <HeaderUser callbackSetKey={this.callbackSetKeySearch} logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                            <SellerOrderPage/>
                                            <Footer/>
                                        </>
                                    ) : (
                                        <>
                                            <LoginPage setAccount={this.setUserAccount}/>
                                        </>
                                    )
                                    
                                }

                            />

                            <Route 
                                path="/seller/item/edit/:slug" 
                                element={
                                    this.state.user_account.status === STATUS.NORMAL && this.state.user_account.type === TYPE.SELLER ? (
                                        <>
                                            <HeaderUser callbackSetKey={this.callbackSetKeySearch} logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                            <EditSellerItem/>
                                            <Footer/>
                                        </>
                                    ) : (
                                        <>
                                            <LoginPage 
                                        setAccount={this.setUserAccount}
                                    />
                                        </>
                                    )
                                    
                                }
                                
                            />
                            <Route 
                                path="/seller/profile" 
                                element={
                                    this.state.user_account.status === STATUS.NORMAL && this.state.user_account.type === TYPE.SELLER ? (
                                        <>
                                            <HeaderUser callbackSetKey={this.callbackSetKeySearch} logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                            <SellerProfilePage/>
                                            <Footer/>
                                        </>
                                    ) : (
                                        <>
                                            <LoginPage 
                                        setAccount={this.setUserAccount}
                                    />
                                        </>
                                    )
                                    
                                } 

                            />
                            <Route 
                                path="/seller/storeprofile" 
                                element={
                                    this.state.user_account.status === STATUS.NORMAL && this.state.user_account.type === TYPE.SELLER ? (
                                        <>
                                            <HeaderUser callbackSetKey={this.callbackSetKeySearch} logoutMethod={this.removeUserAccount} userAccount={this.state.user_account}/>
                                            <SellerStoreProfilePage/>
                                            <Footer/>
                                        </>
                                    ) : (
                                        <>
                                            <LoginPage 
                                        setAccount={this.setUserAccount}
                                    />
                                        </>
                                    )
                                    
                                }

                            />

              <Route
                path={"/admin/dashboard"}
                element={
                  this.state.user_account.type == TYPE.ADMIN ? (
                    <>
                      <AdminNavbar />
                      <AdminDashboard />
                    </>
                  ) : (
                    <Navigate
                      to="/login"
                      setAccount={this.setUserAccount}
                      replace={true}
                    />
                  )
                }
              />
              <Route
                path={"/admin/usercenter"}
                element={
                  this.state.user_account.type == TYPE.ADMIN ? (
                    <>
                      <AdminNavbar />
                      <UserCenter />
                    </>
                  ) : (
                    <Navigate
                      to="/login"
                      setAccount={this.setUserAccount}
                      replace={true}
                    />
                  )
                }
              />
              <Route
                path={"/admin/sellercenter"}
                element={
                  this.state.user_account.type == TYPE.ADMIN ? (
                    <>
                      <AdminNavbar />
                      <SellerCenter />
                    </>
                  ) : (
                    <Navigate
                      to="/login"
                      setAccount={this.setUserAccount}
                      replace={true}
                    />
                  )
                }
              />
              <Route
                path={"/admin/posts"}
                element={
                  this.state.user_account.type == TYPE.ADMIN ? (
                    <>
                      <AdminNavbar />
                      <Posts />
                    </>
                  ) : (
                    <Navigate
                      to="/login"
                      setAccount={this.setUserAccount}
                      replace={true}
                    />
                  )
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
