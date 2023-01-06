
import $ from 'jquery'

import food from '../../assets/images/FoodThumnail/lau.png'
import momo_icon from '../../assets/images/icons/momo.png'
import banking_icon from '../../assets/images/icons/debit-card.png'
import cod_icon from '../../assets/images/icons/cod.png'
import visa_icon from '../../assets/images/icons/visa.png'
import React from 'react'

const items = [
    {key:"bbt001", img:food, link:"/item", name:"Bò Bít Tết Hoàng Gia", status: "Còn hàng", brand: "Sunrise Foods", quantity: 1, price: 369},
];

class BuyDetail extends React.Component {

    // items = [];
    payment_methods = [
        {key:"momo-method", img: momo_icon, label: "Thanh toán Online bằng Momo (Có mã ưu đãi)"},
        {key:"banking-method", img: banking_icon, label: "Chuyển khoản ngân hàng (Miễn phí phí chuyển)"},
        {key:"cod-method", img: cod_icon, label: "Thanh toán khi nhận hàng (COD)"},
        {key:"visa-method", img: visa_icon, label: "Thanh toán Online bằng Visa, Master, JCB (Miễn phí phí chuyển)"}
    ];

    handleMethodSelect(e, targetkey, methods) {
        if(e.target.checked) {
            methods.map((method) => {
                if(method.key !== targetkey) {
                    $('#' + method.key).prop('checked', false);
                }
            })
        }
    }
    PaymentMethodsMenu(methods) {
        const payment_methods_menu = methods.map((method, index) => {
            return <div className="row pt-2" key={index}>
                        <div className="col-auto d-flex align-items-center">
                            <input 
                                className="form-check-input mt-auto mb-auto me-2" 
                                type="checkbox" 
                                id={method.key}
                                onChange={e => this.handleMethodSelect(e, method.key, methods)}
                            />
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <img src={method.img} className="itdetail-icon" alt='icon'/>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <label className="form-check-label" htmlFor="momo-method">
                                {method.label}
                            </label>
                        </div>
                    </div>
        });
    
        return (
            <>
                {payment_methods_menu}
            </>
        );
    }
    ItemInPurchase(items) {
        const item_list = items.map((item, index) => {
            return  <div className="row p-4" key={index}>
                        <div className="col-4 p-0">
                            <img src={item.img} className="img-fluid small-img smooth-border" alt='item'/>
                        </div>
                        <div className="col-8 p-0">
                            <p className="sm-title wrap-text mb-0">{item.name}</p>
                            <p className="sm-title text-indigo mb-0">Thương Hiệu: {item.brand}</p>
                            <p className="sm-title mb-0">Tình trạng: <span className="text-green">{item.status}</span></p>
                            <div className="sm-title mb-0">
                                <i className="fa-solid fa-location-dot "></i>
                                <span>&nbsp; Giao hàng tại Việt Nam</span>
                            </div>
                            <p className="sm-title"><i className="bi bi-box-seam-fill"></i>&nbsp; Số lượng: {item.quantity}</p>
                        </div>
                    </div>
        });
        return(
            <>
                {item_list}
            </>
        );
    }
    render() {
        return(
            <div className="container pt-5">
                <div className="row pb-4">
                    <div className="col-12 col-lg-8 moveup-fadein-animation">
                        <div className="bg-white">
                            {/* {{!-- Infor fullfill --}} */}
                            <div className="p-4 pt-3">
                                <p className="itdetail-lg-title">Để đặt hàng, vui lòng điền thông tin dưới đây.</p>
                                <div className="row pt-3">   
                                    <div className="col-6">
                                        <input type="text" className="form-control" placeholder="Họ và tên"/>
                                    </div>
                                    <div className="col-6">
                                        <input type="text" className="form-control" placeholder="Số điện thoại"/>
                                    </div>
                                </div>
                                <div className="pt-3">
                                    <input type="text" className="form-control" placeholder="Địa chỉ"/>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-lg-4 pt-3">
                                        <select className="form-select" name="ls_province"></select>
                                    </div>
                                    <div className="col-12 col-lg-4 pt-3">
                                        <select className="form-select" name="ls_district"></select>
                                    </div>
                                    <div className="col-12 col-lg-4 pt-3">
                                        <select className="form-select" name="ls_ward"></select>
                                    </div>
                                </div>

                                <div className="pt-3">
                                    <input type="text" className="form-control" placeholder="Lời nhắn cho nhà hàng"/>
                                </div>
                            </div>
                            {/* {{!-- End infor fullfill --}} */}
                        </div>

                        <div className="col mb-3">
                            <div className="bg-white mt-3 p-4 pt-3">
                                {/* {{!-- Payment methods select --}} */}
                                <p className="itdetail-lg-title pb-4">Hãy chọn phương thức thanh toán.</p>
                                {this.PaymentMethodsMenu(this.payment_methods)}
                                {/* {{!-- End payment methods select --}}    */}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 moveleft-fadein-animation">
                        <div className="bg-white h-100">
                            <div className="rtab">
                                <i className="bi bi-credit-card-2-front-fill"><span className="lg-title"> Payment</span></i>

                                {this.ItemInPurchase(items)}
                                <div className="row p-4 pt-0 pb-3">
                                    <hr/>
                                    <div className="col-8 p-0">
                                        <input type="text" className="form-control" id="coupon-input" placeholder="Mã giảm giá"/>
                                    </div>
                                    <div className="col-4 pe-0">
                                        <button className="smooth-square-button">Áp dụng</button>
                                    </div>
                                </div>
                                <div className="row p-4 pt-0 pb-3">
                                    <hr/>
                                    <div className="d-flex">
                                        <p className="me-title m-auto ms-0">Tạm tính:</p>
                                        <p className="me-title">49.000 VNĐ</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="me-title m-auto ms-0">Phí vận chuyển:</p>
                                        <p className="me-title">20.000 VNĐ</p>
                                    </div>
                                </div>
                                <div className="row p-4 pt-0">
                                    <hr/>
                                    <div className="d-flex">
                                        <p className="lg-title m-auto ms-0">Tổng cộng</p>
                                        <p className="lg-title">69.000 VNĐ</p>
                                    </div>
                                </div>
                                <div className="row p-4 pt-0">
                                    <div className="d-flex justify-content-end p-0">
                                        <button className="rtab-buying-button"><p className="me-title">Đặt hàng</p></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default BuyDetail;