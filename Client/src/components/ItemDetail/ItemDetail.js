
import $ from 'jquery'; 
import {Link} from 'react-router-dom'

import RatingStarGenerator from '../RatingStars/RatingStars'
import FoodMenu  from '../FoodMenu/FoodMenu'

import foodThum_1 from '../../assets/images/FoodThumnail/bun.png'
import foodThum_2 from '../../assets/images/FoodThumnail/pho.png'
import foodThum_3 from '../../assets/images/FoodThumnail/doannhanh.png'
import foodThum_4 from '../../assets/images/FoodThumnail/dohan.png'
import foodThum_5 from '../../assets/images/FoodThumnail/lau.png'
import foodThum_6 from '../../assets/images/FoodThumnail/donhat.png'

import about_1 from '../../assets/images/abouts/about-1.png'

import food_item_1 from '../../assets/images/foods/food_1.png'

import achievement_icon from '../../assets/images/icons/achievement.png'
import certificate_icon from '../../assets/images/icons/certificate.png'
import star_icon from '../../assets/images/icons/star.png'

const MENU_TYPE = {SMALL: 0,LARGE: 1};

const food = {
    img: food_item_1,
    name: "SALAD NGŨ VỊ HOÀNG GIA ANH",
    link: "/item",
    brand: "Sunrise Foods",
    rating: 4.5,
    rvcount: "41.002", 
    price: 49,
    status: "Còn hàng"
};

const recommend = [
    {img: foodThum_1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89},
    {img: foodThum_2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", rating: 3.5, rvcount: 8.291, price: 25},
    {img: foodThum_3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999},
    {img: foodThum_4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56},
    {img: foodThum_5, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102},
    {img: foodThum_6, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89}
];

function changeSellectToInput() {
    if ($('#qty-itdetail').find(":selected").val() === 'many')
        $('#qty-itdetail').replaceWith('<input type="number" class="form-control small-img" min=0 id="qty-itdetail">');
}

function checkAndAnimate() {
    var reveals = document.querySelectorAll(".ani");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

const ItemDetail = () => {
    window.addEventListener('scroll', checkAndAnimate);
    return (
        <div className="bg-white">
            <div className="container pt-5">
                {/* {{!-- Item Detail --}} */}
                <div className="row pt-4 moveup-fadein-animation">
                    <div className="col-3" id="itdetail-mainimg">
                        <Link to={food.link}>
                            <img src={food.img} className="img-fluid itdetail-food-img" alt={food.name}/>
                        </Link>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6">
                        <p className="itdetail-lger-title">{food.name}</p>
                        <p className="itdetail-me-title text-indigo">Thương Hiệu: {food.brand}</p>
                        
                        <RatingStarGenerator star={food.rating} optionClass={"align-left"}/>

                        <p className="review-count align-left">&nbsp; {food.rvcount} reviews</p>
                        {/* {{!-- Alternative item image --}} */}
                        <div className="row pt-3" id="itdetail-alterimg">
                            <div className="col-4">
                                <Link to={food.link}>
                                    <img src={food.img} className="img-fluid itdetail-food-img" alt={food.name}/>
                                </Link>
                            </div>
                            <div className="col-8">
                                <p className="itdetail-me-title text-green">1 Order from &nbsp;<span className="itdetail-lg-money">{food.price}.000 VNĐ</span></p>

                                <div className="d-flex justify-content-center pt-4">
                                    <p className="text-center p-3 ps-0 itdetail-sm-title wrap-text">
                                        <span className="material-icons itdetail-achievement-icon">restaurant</span>
                                    <br/>Ngon chuẩn 5 sao</p>
                                    <p className="text-center p-3 ps-0 itdetail-sm-title wrap-text">
                                        <span className="material-icons itdetail-achievement-icon">electric_car</span>
                                    <br/>Giao hàng nhanh chóng</p>
                                    <p className="text-center p-3 ps-0 itdetail-sm-title wrap-text">
                                        <span className="material-icons itdetail-achievement-icon">local_police</span>
                                    <br/>Bảo hành dạ dày 24h</p>
                                </div>
                            </div>
                        </div>
                        
                        <div id="itdetail-mainimg">
                            <br/><hr/>
                            <p className="itdetail-me-title text-green">1 Order from &nbsp;<span className="itdetail-lg-money">{food.price}.000 VNĐ</span></p>

                            <div className="d-flex justify-content-center pt-4">
                                <p className="text-center p-3 itdetail-me-title wrap-text">
                                    <span className="material-icons itdetail-achievement-icon">restaurant</span>
                                <br/>Ngon chuẩn 5 sao</p>
                                <p className="text-center p-3 itdetail-me-title wrap-text">
                                    <span className="material-icons itdetail-achievement-icon">electric_car</span>
                                <br/>Giao hàng nhanh chóng</p>
                                <p className="text-center p-3 itdetail-me-title wrap-text">
                                    <span className="material-icons itdetail-achievement-icon">local_police</span>
                                <br/>Bảo hành dạ dày 24h</p>
                            </div>
                        </div>
                        
                        <hr/>
                        <ul className="itdetail-lg-title text-justify">
                            <li>Được sản xuất bởi các đầu bếp danh giá sở hữu từ 2 đến 3 sao Michelin</li>
                            <li>Uy tín của thương hiệu được gây dựng xuyên suốt 69 năm về an toàn thực phẩm</li>
                            <li>Nguyên liệu được vận chuyển trực tiếp từ vùng núi lạnh giá phía Tây Bắc, đảm bảo độ tươi sạch thuần khiết nhất</li>
                            <li>Giao hàng nhanh chóng trong vòng 15 phút trong khu vực TP Hồ Chí Minh và Hà Nội. Riêng ngoại thành thì đừng đặt, xa thế ai mà ship đồ nóng đi được.</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="itdetail-box">
                            <i className="bi bi-credit-card-2-front-fill"><span className="lg-title"> Payment</span></i>
                            <p className="sm-title wrap-text text-justify text-danger pt-3">Món ăn chỉ hỗ trợ những quốc gia như Việt Nam, Anh, Pháp, Nhật Bản, Mỹ. Các quốc gia còn lại sẽ áp dụng chính sách không giao hàng ngoại quốc.</p>
                            
                            <div className="pt-3">
                                <i className="fa-solid fa-location-dot"></i>
                                <span className="sm-title">&nbsp; Giao hàng tại Việt Nam</span>
                            </div>

                            <p className="me-title pt-2">Tình trạng: <span className="text-green">{food.status}</span></p>

                            <form className="form-group pt-2">
                                <label htmlFor="qty-itdetail" className="form-label">Quantity:&nbsp; </label>
                                <span className="d-inline-block">
                                    <select className="form-control" id="qty-itdetail" onChange={changeSellectToInput}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="many">4+</option>
                                    </select>
                                </span>
                            </form>
                            <div className="row w-75 m-auto">
                                <div className="col text-center">
                                    <button className="btn-addtocart mt-3">Thêm vào giỏ hàng</button>
                                    <Link to="/buy"><button className="btn-buynow mt-2" id="item-final-single-buy">Mua ngay</button></Link>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <br/><br/><br/><br/><hr/><br/><br/>
                {/* {{!-- About Restaurant --}} */}
                <div className='ani' id="about-wrapper">
                    <p className="itdetail-lg-title text-center opacity-50">ABOUT US</p>
                    <p className="itdetail-main-lg-title text-center">Về nhà hàng của chúng tôi</p>
                    
                    <div className="itdetail-about">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-xl-7 pe-0 pb-4">
                                <img src={about_1} className="img-fluid itdetail-food-img" alt='restaurant'/>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5 ps-5">
                                <p className="itdetail-lg-title text-center"><b>ĐƯỢC THÀNH LẬP VÀ PHÂN PHỐI BỞI<br/>SUNRISE COMPANY</b><br/><br/></p>
                                <p className="itdetail-me-title wrap-text text-justify light-text">
                                    <i>Chuỗi nhà hàng Sunrise Foods được hình thành và phát triển hơn 69 năm. 
                                    Với uy tín và chất lượng thuộc top đầu thế giới với vô số đầu bếp sở hữu 
                                    sao Michelin và muôn vẻ sáng tạo trong việc đưa những món ăn độc lạ hay 
                                    đặc sản đến mọi miền đất nước trên thế giới. Chúng tôi luôn chú tâm vào 
                                    những nhu cầu và cảm giác của khách hàng, đặt ra những tiêu chí hàng đầu để
                                    có thể làm hài lòng dù là những vị khách khó tính nhất.</i><br/>
                                    <span className="align-right">- Dương Minh -</span>
                                </p>
                                <div className="d-flex justify-content-center pt-4">
                                    <span className="itdetail-achievement-icon text-center">
                                        <img src={star_icon} className="itdetail-icon" alt="star"/>
                                        <p className="p-3 itdetail-me-title">Ngon chuẩn 5 sao</p>
                                    </span>
                                    <span className="itdetail-achievement-icon text-center">
                                        <img src={certificate_icon} className="itdetail-icon" alt="star"/>
                                        <p className="p-3 itdetail-me-title">Chứng nhận quốc tế</p>
                                    </span>
                                    <span className="itdetail-achievement-icon text-center">
                                        <img src={achievement_icon} className="itdetail-icon" alt="star"/>
                                        <p className="p-3 itdetail-me-title">Top 1 thịnh hành</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                {/* {{!-- Recommend --}} */}
                <div className="pb-5 ani" id="recommend-wrapper">
                    <p className='menu-large-font'>Gợi ý hôm nay</p>
                    <div className="row">
                        <FoodMenu imgs={recommend} type={MENU_TYPE.SMALL}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;