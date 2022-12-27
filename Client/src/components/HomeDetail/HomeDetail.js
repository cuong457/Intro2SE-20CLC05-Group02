
import {Link} from 'react-router-dom'

import Banner from '../Banner/Banner'
import FoodMenu from '../FoodMenu/FoodMenu'

import banner1 from '../../assets/images/banners/banner-1.png'
import banner2 from '../../assets/images/banners/banner-2.png'
import banner3 from '../../assets/images/banners/banner-3.png'

import smbanner1 from '../../assets/images/banners/small-banner-1.png'
import smbanner2 from '../../assets/images/banners/small-banner-2.png'
import smbanner3 from '../../assets/images/banners/small-banner-3.png'
import smbanner4 from '../../assets/images/banners/small-banner-4.png'

import rectbanner1 from '../../assets/images/banners/rect-banner-1.png'
import rectbanner2 from '../../assets/images/banners/rect-banner-2.png'


import foodThum1 from '../../assets/images/FoodThumnail/bun.png'
import foodThum2 from '../../assets/images/FoodThumnail/pho.png'
import foodThum3 from '../../assets/images/FoodThumnail/doannhanh.png'
import foodThum4 from '../../assets/images/FoodThumnail/dohan.png'
import foodThum5 from '../../assets/images/FoodThumnail/lau.png'
import foodThum6 from '../../assets/images/FoodThumnail/donhat.png'

const MENU_TYPE = {SMALL: 0,LARGE: 1};

let large_banner = [
    {img: banner3, link: "banner3.com", index: 0, id: "#main-large-banner"},
    {img: banner1, link: "banner1.com", index: 1, id: "#main-large-banner"},
    {img: banner2, link: "banner2.com", index: 2, id: "#main-large-banner"}
]

let small_banners_1 = [
    {img: smbanner3, link: "sm_banner1.com", index: 0, id: "#first-small-banner"},
    {img: smbanner1, link: "sm_banner3.com", index: 1, id: "#first-small-banner"}
]

let small_banners_2 = [
    {img: smbanner2, link: "sm_banner2.com", index: 0, id: "#scnd-small-banner"},
    {img: smbanner4, link: "sm_banner4.com", index: 1, id: "#scnd-small-banner"}
]

let rect_banners = [
    {img: rectbanner1, link: "re_banner1.com", index: 0, id: "#sale-banner"},
    {img: rectbanner2, link: "re_banner2.com", index: 1, id: "#sale-banner"}
]

let recommend = [
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item",rating: 3.5, rvcount: 8.291, price: 25},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56},
    {img: foodThum5, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102},
    {img: foodThum6, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89}
]

let sale_thumnails_1 = [
    {img: foodThum1, name: "Bún Đậu Mắm Tôm", link: "/item", brand: "Sunrise Foods", rating: 4, rvcount: 12.567, price: 89, status: "Còn hàng"},
    {img: foodThum2, name: "Cơm Tấm Thôn Quê", link: "/item", brand: "Sunrise Foods", rating: 3.5, rvcount: 8.291, price: 25, status: "Còn hàng"},
]

const HomeDetail = () => {
    return (
        <div className="container pt-4 mt-4 moveup-fadein-animation">
            <section>
                <div className='row'>
                    <div className='col-12 col-md-8 '>
                        <div id="main-large-banner" className="carousel slide" data-bs-ride="carousel">
                            <Banner imgs={large_banner}/>
                        </div>
                    </div>
                    <div className='col-12 col-md-4' id="separate-top-md">
                        <div className='row'>
                            <div id="first-small-banner" className="carousel slide" data-bs-ride="carousel">
                                <Banner imgs={small_banners_1}/>
                            </div>
                        </div>
                        <div className='row pt-2'>
                            <div id="secnd-small-banner" className="carousel slide" data-bs-ride="carousel">
                                <Banner imgs={small_banners_2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-3 bg-white">
                <p className='menu-large-font'>Bạn muốn ăn gì?
                    <span>
                        <Link 
                            to='/products' 
                            className='erase-underline sm-title ps-2 text-green'
                        >
                                Xem thêm
                        </Link>
                    </span>
                </p>
                <div className='m-0 pb-2'>
                    <FoodMenu imgs={recommend} type={MENU_TYPE.SMALL}/>
                </div>
            </div>
            <div className="mt-3 bg-white">
                <p className='menu-large-font'>Đang giảm giá siêu sốc!
                    <span>
                        <Link 
                            to='/products' 
                            className='erase-underline sm-title ps-2 text-green'
                        >
                                Xem thêm
                        </Link>
                    </span>
                </p>
                <div className='row'>
                    <div className='col-12 col-lg-4 ps-4 pe-0 pb-3'>
                        <div id="sale-banner" className="carousel slide me-4" data-bs-ride="carousel">
                            <Banner imgs={rect_banners}/>
                        </div>
                    </div>
                    <div className='col-12 col-lg-8'>
                        <div className='h-50'>
                            <FoodMenu imgs={sale_thumnails_1} type={MENU_TYPE.LARGE}/>
                        </div>
                        <div className='h-50'>
                            <FoodMenu imgs={sale_thumnails_1} type={MENU_TYPE.LARGE}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 bg-white mb-5">
                <p className='menu-large-font'>Gợi ý hôm nay
                    <span>
                        <Link 
                            to='/products' 
                            className='erase-underline sm-title ps-2 text-green'
                        >
                                Xem thêm
                        </Link>
                    </span>
                </p>
                <div className='m-0'>
                    <FoodMenu imgs={recommend} type={MENU_TYPE.SMALL}/>
                </div>
            </div>
        </div>
    );
};

export default HomeDetail;