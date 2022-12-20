import React from "react";

import sunrise_logo from '../../assets/images/logo/SunriseFoods-logo.png'
import flavorofindia_logo from '../../assets/images/logo/FlavourOfIndia-logo.png'
import panzerhot_logo from '../../assets/images/logo/PanzerHot-logo.png'
import friggitoria_logo from '../../assets/images/logo/Friggitoria-logo.png'

import qiqifallen_icon from '../../assets/images/icons/qiqi-fallen-emptynoti.png'

export default class NotifyDropdown extends React.Component {
    
    state = {
        notifications: [
            {key: 'notisunrise1', img: sunrise_logo, name: 'Sunrise Foods', content: 'Order some delicious meal today! We have some voucher for you', time: '3 hours ago'},
            {key: 'notiflavorofindia1', img: flavorofindia_logo, name: 'Friggitoria', content: 'Have a breakfast with us?', time: 'A day ago'},
            {key: 'notipanzerhot1', img: panzerhot_logo, name: 'Panzer Hot', content: 'Lots of food coupons are waiting for you!', time: ' December 13'},
            {key: 'notifriggitoria1', img: friggitoria_logo, name: 'Flavour of India', content: 'Try our new ice meat recipes!', time: 'December 7'},
        ]
    };

    deleteNoti = (notikey) => {
        let newNotifications = [];
        for(let i = 0; i < this.state.notifications.length; i++) {
            if(notikey != this.state.notifications[i].key) {
                newNotifications.push(this.state.notifications[i]);
            }
        }
        this.setState({notifications: newNotifications});
        
    }

    renderNotiElement() {
        let renderNoti = this.state.notifications.map((notidata, index) => {
            return (
                <div className='noti' key={index}>
                    <div className='row'>
                        <div className='col-3 m-auto'>
                            <a href='#'><img src={notidata.img} className='img-fluid'/></a>
                        </div>
                        <div className='col-8'>
                            <a href='#' className='erase-underline text-black'>
                                <p className='me-title wrap-text truncate'>{notidata.name} &nbsp;
                                    <span className='sm-title opacity-75'>{notidata.content}</span>
                                </p>
                                <p className='sm-title opacity-75'>{notidata.time}</p>
                            </a>
                        </div>
                        <div className='col-1 d-flex justify-content-center align-items-center'>
                            <button 
                                className='emptyBtn' 
                                onClick={e => this.deleteNoti(notidata.key)}
                            >
                                    <i className='bi bi-x-lg'></i>
                            </button>
                        </div>
                    </div>
                </div>
            );
        });
        if(renderNoti.length == 0) {
            return (
                <div className='notify-dropdown-content h-auto'>
                    <p className='me-title pb-2'>THÔNG BÁO</p>
                    <hr className='mt-0'/>
                    <div className='row'>
                        <img src={qiqifallen_icon} className='img-fluid'/>
                    </div>
                </div>
            )
        }
        else return (
            <div className='notify-dropdown-content'>
                <div className='d-flex justify-content-center d-inline-block align-items-center pb-4'>
                    <p className='me-title'>THÔNG BÁO</p>
                    <button 
                        className='ms-auto me-title erase-underline emptyBtn text-indigo'
                        href="#"
                    >
                        Đánh dấu tất cả đã đọc
                    </button>
                </div>
                <div className='notifield'>
                    {renderNoti}
                </div>
                <hr className='mb-1'/>
                <div className='d-flex justify-content-center align-items-center mt-1'>
                    <a className='me-title text-indigo erase-underline' href="#" >Xem tất cả</a>
                </div>
            </div>
        );
    }
    
    render() {
        return (
            <>
                {this.renderNotiElement()}
            </>
        )
    }
}