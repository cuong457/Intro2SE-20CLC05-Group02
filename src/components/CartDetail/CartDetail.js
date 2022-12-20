
import $ from 'jquery'; 
import React from 'react';
// Import subcomponent
import RightTab from '../RightTab/RightTab'
// Import image
import foodThum1 from '../../assets/images/FoodThumnail/bun.png'
import foodThum2 from '../../assets/images/FoodThumnail/pho.png'
import foodThum3 from '../../assets/images/FoodThumnail/doannhanh.png'
import foodThum4 from '../../assets/images/FoodThumnail/dohan.png'
import foodThum5 from '../../assets/images/FoodThumnail/lau.png'
import foodThum6 from '../../assets/images/FoodThumnail/donhat.png'

const recommend = [
    {key:"cavienchien001", img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999},
    {key:"nem001", img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56},
    {key:"thapcam001", img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102},
    {key:"com001", img: foodThum1, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89}
];


class CartDetail extends React.Component {
    state = {
        subtotal: 0,
        item_count: 0,
        items: [
            {key:"bobittet001", img:foodThum5, link:"/item", name:"Bò Bít Tết Hoàng Gia", status: "Còn hàng", brand: "Sunrise Foods", notice: "Raw meet and clean decoration", price: 369, quantity: 1},
            {key:"goi001", img:foodThum2, link:"/item", name:"Gỏi Gia Truyền Truyền Từ Thời Ông Cố Nội", status: "Còn hàng", brand: "Sunrise Foods", notice: "Raw meet and clean decoration", price: 171, quantity: 1}
        ],
        cart: [] // Empty
    };

    ChangeQuantity(e, targetkey) {
        const new_quantity = parseInt(e.target.value);
        
        // Change quantity in items
        let new_items = this.state.items.map((item) => {
            if(item.key == targetkey) {
                item.quantity = new_quantity;
            }
            return item;
        });
        this.setState({items: new_items});

        // Change quantity in cart
        let new_cart = this.state.cart.map((cart_item) => {
            if(cart_item.key == targetkey) {
                cart_item.quantity = new_quantity;
            }
            return cart_item;
        });
        this.setState({cart: new_cart});
        
    }
    
    handleDeleteItem(target_item) {
        // Delete in items
        let new_items = this.state.items.filter(item => item.key != target_item.key);
        this.setState({items: new_items});

        //Delete in cart
        let new_cart = this.state.cart.filter(cart_item => cart_item.key != target_item.key);
        this.setState({cart: new_cart});
    }

    getSubtotal() {
        let subtotal = 0;
        this.state.cart.map((cart_item) => {
            subtotal += cart_item.price * cart_item.quantity;
        })
        return subtotal;
    }
    getItemCount() {
        let cart_item_count = 0;
        this.state.cart.map((cart_item) => {
            cart_item_count += cart_item.quantity;
        })
        return cart_item_count;
    }

    CartItem(item) {
        return  (
            <div className="row" key={item.key}>
                <div className="col-3 d-flex align-items-center">
                    <div className="form-check d-flex align-items-center">
                        <input 
                            className="form-check-input sellectItem" 
                            type="checkbox"
                            onChange={e => this.handleChooseCartItem(e.target.checked, item)}
                        />
                    </div>
                    <a href={item.link}>
                        <img src={item.img} className="img-fluid"/>
                    </a>
                </div>
                <div className="col-7 ctdetail-itemdetail">
                    <a 
                        href={item.link} 
                        className="ctdetail-item-title erase-underline text-black"
                    >
                        {item.name}
                    </a>
                    <p className="ctdetail-item-sm-detail text-green"><b>{item.status}</b></p>
                    <p className="ctdetail-item-sm-detail">Delivered from and sold by {item.brand}</p>
                    <p className="ctdetail-item-me-detail"><b>Your option: </b>{item.notice}</p>
                    
                    <div className="row mt-2 mb-2">
                        <div className="col form-group">
                            <label htmlFor={item.key}>Quantity: </label>
                            <span className="d-inline-block">
                                <input 
                                    type="number" 
                                    className="form-control small-img" 
                                    id={item.key} 
                                    defaultValue={item.quantity} 
                                    min={0}
                                    onChange={e => this.ChangeQuantity(e, item.key)}
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="row h-50">
                        <p 
                            className="d-flex justify-content-start align-items-center cart-item-price"
                        >
                            <b>{item.price}.000VNĐ</b>
                        </p>
                    </div>
                    <div className="row h-50">
                        <div className="d-flex justify-content-end align-items-end">
                            <button 
                                className="btn ctdetail-delete-button"
                                onClick={e => this.handleDeleteItem(item)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="m-2"/>
            </div>
        )
    }

    sellectAllClick(e) {
        if (e.currentTarget.checked) {
            $('.sellectItem').prop('checked', true); 
            let addTotal = 0;
            let addItemCount = 0;
            this.state.items.map((item) => {
                let isExist = false;
                this.state.cart.map((cartitem) => {
                    if(cartitem.key == item.key)
                        isExist = true;
                });
                if(!isExist) {     
                    addTotal += item.price * item.quantity;
                    addItemCount += item.quantity;
                    // Add item to cart
                    this.state.cart.push(item);
                }
            }); 
            this.setState({subtotal: this.state.subtotal + addTotal});
            this.setState({item_count: this.state.item_count + addItemCount});
        } else {    
            $('.sellectItem').prop('checked', false);
            this.setState({subtotal: 0});
            this.setState({item_count: 0});
            // Empty the cart
            this.state.cart = [];
        }
    };

    handleChooseCartItem(type, item) {
        if(type) {
            // Add item to cart
            let newCart = this.state.cart;
            // this.state.cart.push(item);
            newCart.push(item);
            this.setState({cart: newCart});

            // Check if all item is select, then check the select all
            if($('.sellectItem:checked').length == $('.sellectItem').length) {
                $('#selectAll').prop('checked', true);
            }
        }
        else{
            // Remove item from cart
            let newCart = this.state.cart;
            for(let i = 0; i < newCart.length; i++) {
                if(newCart[i].key == item.key) {
                    newCart.splice(i, 1);
                    break;
                }
            }
            this.setState({cart: newCart});
            // Check if sellect all is checked, then uncheck it
            if(document.getElementById('selectAll').checked) {
                $("#selectAll").prop('checked', false);
            }
        }
    }

    CartRenderItem(itemlist) {
        let result;
        if(Array.isArray(itemlist) && itemlist.length > 0)
            result = itemlist.map((item, index) => {
                return this.CartItem(item);
            });
        else if(Array.isArray(itemlist) && itemlist.length == 0) {
            result = (
                <a 
                    href="/" 
                    className='erase-underline'
                >
                    Your cart is empty, go to buy something?
                </a>
            );
        }
        else {
            result = (
                <a 
                    href="/" 
                    className='erase-underline'
                >
                    Cart error! Go back to home page.
                </a>
            );
        }
    
        return (
            <>
                {result}
            </>
        )
    };

    RenderCast(amount) {
        if(amount == 0) return amount + " VNĐ";
        else return amount + ".000 VNĐ";
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row pb-5">
                    {/* {{!-- Main content --}} */}
                    <div className="col-12 col-xl-9">
                        <div className="bg-white ctdetail">
                            <p className="ctdetail-xxlg-title">Shopping Cart</p>
                            <div>
                                <div className="form-check align-left">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" id="selectAll" 
                                        onChange={e => this.sellectAllClick(e)}
                                    />
                                    <label className="form-check-label" htmlFor="selectAll">Sellect All</label>
                                </div>
                                <p className="align-right">Price</p>
                            </div>
                            <br/><hr/>

                            {/* {{!-- Items --}} */}
                            {this.CartRenderItem(this.state.items)}
                    

                            <div className="row" id="subtotal-main">
                                <span>
                                    <p 
                                        className="me-title align-right wrap-text"
                                    >
                                        Subtotal ({this.getItemCount()} items):&nbsp; 
                                        <b>
                                            {this.RenderCast(this.getSubtotal())}
                                        </b>
                                    </p>
                                </span>
                                <a href="/buy">
                                    <button 
                                        className="btn btn-outline-dark rtab-detail-button align-right" 
                                        id="checkout-btn-main"
                                    >
                                        Checkout
                                    </button>
                                </a>
                            </div>
                        </div>
                        {/* {{!-- End page expand --}} */}
                        <div id="endpage-expand">
                            <div className="bg-white ctdetail mb-2"><br/></div>
                            <p className="ctdetail-smler-text">The price and availability of items at Sunrise.sg are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price. Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
                        </div>
                    </div>
                    {/* {{!-- Right site bar --}} */}
                    <div className="col-12 col-xl-3">
                        <div className="bg-white rtab mb-4" id="subtotal-rtab">
                            <i className="bi bi-credit-card-2-front-fill"><span className="lg-title"> Payment</span></i>
                            <div className="text-center">
                                <p 
                                    className="lg-title mt-2 wrap-text" 
                                    id="cart-subtotal"
                                >
                                    Subtotal ({this.getItemCount()} items):&nbsp;
                                    <b>
                                        {this.RenderCast(this.getSubtotal())}
                                    </b>
                                </p>
                                <a href="/buy">
                                    <button className="rtab-buying-button" id="checkout-btn-rtab">Checkout</button>
                                </a>
                            </div>
                        </div>
                        <RightTab items={recommend}/>
                        {/* {{!-- second end page expand --}} */}
                        <div id="scnd-endpage-expand">
                            <div className="bg-white ctdetail mt-4 mb-2"><br/></div>
                            <p className="ctdetail-smler-text">The price and availability of items at Sunrise.sg are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price. Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default CartDetail;
