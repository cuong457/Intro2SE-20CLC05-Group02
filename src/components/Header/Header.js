import React from 'react';
import ReactDOMServer from 'react-dom/server';

import NotifyDropdown from './NotifyDropdown'

import sunrise_logo from '../../assets/images/logo/SunriseFoods-logo.png'
// import flavorofindia_logo from '../../assets/images/logo/FlavourOfIndia-logo.png'
// import panzerhot_logo from '../../assets/images/logo/PanzerHot-logo.png'
// import friggitoria_logo from '../../assets/images/logo/Friggitoria-logo.png'

// import qiqifallen_icon from '../../assets/images/icons/qiqi-fallen-emptynoti.png'



class Header extends React.Component {

    searchProcess = () => {
        window.location.href = "/products";
    }

    handleKeydown = (event) => {
        if(event.key == 'Enter') {
            window.location.href = "/products";
        }
    }

    render() {
        return (
            <>
                <header className="header" id="header">
                    <div className="navbar navbar-expand pt-0 pb-0 header-bar-color">
                        <div className="container p-0">
                            <div className="collapse navbar-collapse">
                                {/* {{! Left links field }} */}
                                <ul className="navbar-nav me-auto" id="nav-leftlink">
                                    <li className="nav-item">
                                        <a className="nav-link active navbar-font-link pb-2 m-0" href="#">Trở thành người bán hàng</a>
                                    </li>

                                    <li className="nav-item"><p
                                        className="nav-link disabled navbar-font-link pb-2 m-0">|</p></li>

                                    <li className="nav-item">
                                        <a className="nav-link active navbar-font-link pb-2 m-0" href="#">Hỗ trợ</a>
                                    </li>

                                    <li className="nav-item"><p
                                        className="nav-link disabled navbar-font-link pb-2 m-0"
                                        >|</p></li>

                                    <li clas="nav-item">
                                        <a
                                            href="http://www.facebook.com/MinMinPD2211"
                                            className="nav-link active navbar-icon pb-2 m-0"
                                        >
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li clas="nav-item">
                                        <a href="https://twitter.com/PHAN_DUONG_MINH" className="nav-link active navbar-icon pb-2 m-0">
                                            <i className="bi bi-twitter"></i>
                                        </a>
                                    </li>
                                </ul>
                                {/* {{! Menu button when < 768px }} */}
                                <ul className="navbar-nav me-auto" id="nav-menubutton">
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link active dropdown-toggle nav-dropdown-font"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                        >
                                            <i className="bi bi-list navbar-menuicon"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li className="nav-item">
                                                <a className="dropdown-item" href="#">Trở thành người bán hàng</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="dropdown-item" href="#">Hỗ trợ</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                {/* {{! Right links field }} */}
                                <ul className="navbar-nav ml-0">
                                    
                                    {/* Render a notification dropdown type nav-item */}
                                    <li className="nav-item notify-dropdown">
                                        <button className="nav-link emptyBtn active navbar-font-link pb-2 m-0" >
                                            <i className="bi bi-bell" id="navbar-icon-with-text"></i>
                                            Thông báo
                                        </button>
                                        <NotifyDropdown/>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link active dropdown-toggle nav-dropdown-font"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        > Ngôn ngữ </a>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li>
                                                <a className="dropdown-item" href="/">Tiếng Việt</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link active navbar-font-link pb-2 m-0" href="#">Đăng ký</a>
                                    </li>

                                    <li className="nav-item"><p
                                        className="nav-link disabled navbar-font-link pb-2 m-0">|</p></li>

                                    <li className="nav-item">
                                        <a className="nav-link active navbar-font-link pb-2 m-0" href="/login">Đăng nhập</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navbar navbar-expand p-0 header-background">
                        <div className="container pt-4">
                            <div className="row w-100 m-0">
                                <div className="collapse navbar-collapse">
                                <div className="col-3">
                                    <a className="navbar-brand pb-0" href="/">
                                    <figure className="figure mb-0">
                                        <img
                                        src={sunrise_logo}
                                        className="figure-img img-fluid rounded"
                                        alt="SF logo"
                                        id="logo"
                                        />
                                    </figure>
                                    </a>
                                </div>
                                <div className="col-8">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control search-box"
                                            id="search-box"
                                            placeholder="Cùng tìm kiếm vài món ăn ngon nào!"
                                            onKeyDown={this.handleKeydown}
                                        />
                                        <button 
                                            type="button" 
                                            className="btn btn-primary" 
                                            id="search-button" 
                                            onClick={this.searchProcess}
                                        >
                                            <i className="bi bi-search"></i>
                                        </button>
                                    </div>
                                    <div className="mt-2" id="hrz-menu">
                                        <a href="/products" className="nav-menu-font">Cơm</a>
                                        <a href="/products" className="nav-menu-font">Phở</a>
                                        <a href="/products" className="nav-menu-font">Đồ ăn vặt</a>
                                        <a href="/products" className="nav-menu-font">Trà sữa</a>
                                        <a href="/products" className="nav-menu-font">Bún đậu mắm tôm</a>
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-end" id="cart">
                                    <a href="/cartdetail">
                                        <i className="bi bi-cart cart-icon"></i>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;