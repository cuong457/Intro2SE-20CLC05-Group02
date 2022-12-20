
import BrandMenu from '../BrandMenu/BrandMenu'
import FoodList from '../FoodList/FoodList'

import foodThum1 from '../../assets/images/FoodThumnail/bun.png'
import foodThum2 from '../../assets/images/FoodThumnail/pho.png'
import foodThum3 from '../../assets/images/FoodThumnail/doannhanh.png'
import foodThum4 from '../../assets/images/FoodThumnail/dohan.png'
import foodThum6 from '../../assets/images/FoodThumnail/donhat.png'

import sunrise_logo from '../../assets/images/logo/SunriseFoods-logo.png'
import flavorofindia_logo from '../../assets/images/logo/FlavourOfIndia-logo.png'
import panzerhot_logo from '../../assets/images/logo/PanzerHot-logo.png'
import friggitoria from '../../assets/images/logo/Friggitoria-logo.png'

const foods = [
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", rating: 3.5, rvcount: 8.291, price: 25},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89},
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", rating: 3.5, rvcount: 8.291, price: 25},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89}
];

const restaurant_logo = [
    {img: sunrise_logo, name: "Sunrise Foods", link: "/list"},
    {img: flavorofindia_logo, name: "Flavour of India", link: "/list"},
    {img: panzerhot_logo, name: "Panzer Hot", link: "/list"},
    {img: friggitoria, name: "Friggitoria", link: "/list"}
];

const Products = () => {
    return (
        <div className="bg-white">
            <div className="container pt-5">
                <p className="xlg-title mb-0">RESULTS</p>
                <p className="me-title opacity-75">Price and other details may vary based on product size and colour.</p>
                <hr/>
                <div className="row mt-3">
                    <div className="col-12 col-md-4">
                        <i className="bi bi-sliders2-vertical me-title">&nbsp; Bộ lọc</i>
                        <div className="row mt-4">
                            <p className="lger-title pb-2">Khoảng giá</p>
                            <div className="col-6">
                                <form className="form-floating">
                                    <input type="number" className="form-control" id="minprice-filter" placeholder="Từ (.000 VNĐ)" min="0"/>
                                    <label htmlFor="minprice-filter">Từ (.000 VNĐ)</label>
                                </form>
                            </div>
                            <div className="col-6">
                                <form className="form-floating">
                                    <input type="number" className="form-control" id="maxprice-filter" placeholder="Từ (.000 VNĐ)" min="0"/>
                                    <label htmlFor="maxprice-filter">Đến (.000 VNĐ)</label>
                                </form>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <p className="lger-title pb-2">Sắp xếp theo</p>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="highrate-radios" defaultChecked/>
                                    <label className="form-check-label" htmlFor="highrate-radios">
                                        Đánh giá cao nhất
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="bestseller-radios"/>
                                    <label className="form-check-label" htmlFor="bestseller-radios">
                                        Bán chạy nhất
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="lowprice-radios"/>
                                    <label className="form-check-label" htmlFor="lowprice-radios">
                                        Giá thấp <i className="bi bi-arrow-right m-auto"></i> cao
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="highprice-radios"/>
                                    <label className="form-check-label" htmlFor="highprice-radios">
                                        Giá cao <i className="bi bi-arrow-right"></i> thấp 
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <p className="lger-title pb-2">Thương hiệu</p>
                            <BrandMenu logos={restaurant_logo}/>
                        </div>
                        <hr className="list-splitline mb-5"/>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                            <FoodList foods={foods}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;