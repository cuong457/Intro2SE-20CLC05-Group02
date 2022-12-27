
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

import rightArrow from '../../assets/images/icons/right.png'
import leftArrow from '../../assets/images/icons/left.png'

import React from 'react'
import $ from 'jquery'
import { useState } from 'react'

const datapage_callAPI = [
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89, brand: "Friggitoria"},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", rating: 3.5, rvcount: 8.291, price: 25, brand: "Flavour of India"},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999, brand: "Sunrise Foods"},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56, brand: "Sunrise Foods"},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102, brand: "Panzer Hot"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"},
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89, brand: "Friggitoria"},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", rating: 3.5, rvcount: 8.291, price: 25, brand: "Flavour of India"},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999, brand: "Sunrise Foods"},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56, brand: "Sunrise Foods"},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102, brand: "Panzer Hot"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"},
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89, brand: "Friggitoria"},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", rating: 3.5, rvcount: 8.291, price: 25, brand: "Flavour of India"},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999, brand: "Sunrise Foods"},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56, brand: "Sunrise Foods"},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102, brand: "Panzer Hot"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102, brand: "Panzer Hot"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"},
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89, brand: "Friggitoria"},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", rating: 3.5, rvcount: 8.291, price: 25, brand: "Flavour of India"},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999, brand: "Sunrise Foods"},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56, brand: "Sunrise Foods"},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102, brand: "Panzer Hot"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"}
];

let foods = [
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89, brand: "Friggitoria"},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", rating: 3.5, rvcount: 8.291, price: 25, brand: "Flavour of India"},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999, brand: "Sunrise Foods"},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56, brand: "Sunrise Foods"},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102, brand: "Panzer Hot"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"},
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89, brand: "Friggitoria"},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", rating: 3.5, rvcount: 8.291, price: 25, brand: "Flavour of India"},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999, brand: "Sunrise Foods"},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56, brand: "Sunrise Foods"},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102, brand: "Panzer Hot"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"},
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89, brand: "Friggitoria"},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", rating: 3.5, rvcount: 8.291, price: 25, brand: "Flavour of India"},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999, brand: "Sunrise Foods"},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56, brand: "Sunrise Foods"},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102, brand: "Panzer Hot"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102, brand: "Panzer Hot"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"},
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89, brand: "Friggitoria"},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", rating: 3.5, rvcount: 8.291, price: 25, brand: "Flavour of India"},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999, brand: "Sunrise Foods"},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56, brand: "Sunrise Foods"},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102, brand: "Panzer Hot"},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89, brand: "Sunrise Foods"}
];

const restaurant_brand = [
    {img: sunrise_logo, name: "Sunrise Foods"},
    {img: flavorofindia_logo, name: "Flavour of India"},
    {img: panzerhot_logo, name: "Panzer Hot"},
    {img: friggitoria, name: "Friggitoria"}
];

const SORT = { DECREASE: 0, INCREASE: 1 };
const LIST_LENGTH = 9;
const MAX_PAGENUMBER_SHOW = 3;
const isLowerPriceThan = (a, b) => {
    if(a.price <= b.price) return true; 
    else return false;
}
const isHigherPriceThan = (a, b) => {
    if(a.price >= b.price) return true; 
    else return false;
}
const isMoreBuyThan = (a, b) => {
    if(a.rvcount >= b.rvcount) return true; 
    else return false;
}
const isMoreRateThan = (a, b) => {
    if(a.rating >= b.rating) return true; 
    else return false;
}

function Products () {
    const [current_food, setCurrenFood] = useState([
        {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89},
        {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", rating: 3.5, rvcount: 8.291, price: 25},
        {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999},
        {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", rating: 3.5, rvcount: 1.286, price: 56},
        {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", rating: 4, rvcount: 15.927, price: 102},
        {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", rating: 3, rvcount: 26.546, price: 89},
        {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", rating: 4, rvcount: 12.567, price: 89},
        {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", rating: 3.5, rvcount: 8.291, price: 25},
        {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", rating: 5, rvcount: 163.523, price: 999}
    ]);
    const [lastfood_index, setLastFoodIndex] = useState(8);
    const [page_count, setPageCount] = useState(foods.length % 9 !== 0 ? Math.floor(foods.length / 9) + 1 : Math.floor(foods.length / 9));

    const mergeSort = (arr, comparator) => {
        if(arr.length <= 1) return arr;
        const right = [...arr];
        const middlePoint = arr.length / 2;
        const left = right.splice(0, middlePoint);
    
        return mergeUnsortedArrs(mergeSort(left, comparator), mergeSort(right, comparator), comparator);
    }
    const mergeUnsortedArrs = (left, right, comparator) => {
        const sortedItems = [];
    
        while(left.length && right.length) {
            if(comparator(left[0], right[0]))
                sortedItems.push(left.shift())
            else
                sortedItems.push(right.shift())
        }
        
        return [...sortedItems, ...left, ...right];
    }
    const sortEngine = (order, compareHandler) => {
        if(order === SORT.DECREASE)
            foods = mergeSort(foods, compareHandler);
        else if(order === SORT.INCREASE)
            foods = mergeSort(foods, compareHandler);
        changepagenumber(1, state.page_count);
    }
    const handleFilterOption = (type) => {
        if($(type).prop('checked') === true) {
            switch(type) {
                case "#highrate": {
                    sortEngine(SORT.INCREASE, isMoreRateThan);
                    break;
                }
                case "#bestseller": {
                    sortEngine(SORT.INCREASE, isMoreBuyThan);
                    break;
                }
                case "#lowprice": {
                    sortEngine(SORT.INCREASE, isLowerPriceThan);
                    break;
                }
                case "#highprice": {
                    sortEngine(SORT.DECREASE, isHigherPriceThan);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }
    const handleFilterPrice = () => {
        let minPrice = $('#minprice-input').val().trim();
        let maxPrice = $('#maxprice-input').val().trim();
        minPrice === "" ? minPrice = 0 : minPrice = Number(minPrice);
        maxPrice === "" ? maxPrice = 0 : maxPrice = Number(maxPrice);
    
        foods = [];
        for(let i = 0; i < datapage_callAPI.length; i++) {
            if(datapage_callAPI[i].price >= minPrice && datapage_callAPI[i].price <= maxPrice) {
                foods.push(datapage_callAPI[i]);
            }
        }
        setPageCount((foods.length % 9 !== 0 ? Math.floor(foods.length / 9) + 1 : Math.floor(foods.length / 9)));
        changepagenumber(1, page_count);
    }
    const deleteFilterPrice = () => {
        foods = datapage_callAPI; // Refresh
        setPageCount((foods.length % 9 !== 0 ? Math.floor(foods.length / 9) + 1 : Math.floor(foods.length / 9)));
        changepagenumber(1, page_count);
    }
    const handleFilterBrand = (brandName) => {
        const newFoodArr = [];
        for(let i = 0; i <= lastfood_index; i++) {
            if(foods[i].brand === brandName)
                newFoodArr.push(foods[i]);
        }
        setCurrenFood(newFoodArr);
    }
    const changepagenumber = (index, total) => {
        if(index > 0 && index <= total) {
            let newFoodList = [];
            let start = (index - 1) * LIST_LENGTH;
            let end = start + LIST_LENGTH;
    
            // Move to the head of page
            $('html, body').animate({ scrollTop: 0 }, 'fast');
    
            if(foods.length <= end)
                end = foods.length;
            for(; start < end; start++) {
                newFoodList.push(foods[start]);
            }
            setLastFoodIndex(--end);
            setCurrenFood(newFoodList);
        }
    }
    const createPageNumber = (total) => {
        if(total > 1) {
            let current_page = Math.floor(lastfood_index / LIST_LENGTH) + 1;
            let pageNumBtn = [];
            let numberOfNBTN = 0;
    
            // Create prevpage_btn
            pageNumBtn.push (
                <span className='pe-1' key='prev'>
                    <button type='button' className='page-number-btn' onClick={() => changepagenumber(current_page - 1, total)}>
                        <img src={leftArrow} className='img-fluid' alt='prev'/>
                    </button>
                </span>
            )
            // Create numberpage_btn
            for(let i = 1; i <= total && numberOfNBTN < MAX_PAGENUMBER_SHOW; i++) {
                let class_name = 'page-number-btn';
                if(i === current_page)
                    class_name += ' page-number-btn-active';
                pageNumBtn.push (
                    <span className='pe-1' key={i}>
                        <button 
                            type='button' 
                            className={class_name}
                            onClick={() => changepagenumber(i, total)}
                            id={'page-btn-' + i}
                        >
                            {i}
                        </button>
                    </span>
                )
                ++numberOfNBTN;
                if(numberOfNBTN === MAX_PAGENUMBER_SHOW && current_page >= i && i + 1 <= total) {
                    pageNumBtn.splice(1, 1);
                    --numberOfNBTN;
                }
            }
            // Create nextpage_btn
            pageNumBtn.push (
                <span className='pe-1' key='next'>
                    <button type='button' className='page-number-btn' onClick={() => changepagenumber(current_page + 1, total)}>
                        <img src={rightArrow} className='img-fluid' alt='next'/>
                    </button>
                </span>
            )
    
            return (
                <div className='d-flex justify-content-center align-items-center'>
                    {pageNumBtn}
                </div>
            )
        }
        else {
            return (<></>);
        }
    }

    return (
        <div className="bg-white">
            <div className="container pt-5">
                <div className='scale-fade-in-normal-animation'>
                    <p className="xlg-title mb-0">RESULTS</p>
                    <p className="me-title opacity-75">Price and other details may vary based on product size and colour.</p>
                </div>
                <hr className='hr-out-animation'/>
                <div className="row mt-4">
                    <div className="col-12 col-md-4 scale-fade-in-normal-animation">
                        <i className="bi bi-sliders2-vertical me-title">&nbsp; Bộ lọc</i>
                        <div className="row mt-4">
                            <p className="lger-title pb-2">Khoảng giá</p>
                            <div className="col-6">
                                <form className="form-floating">
                                    <input type="number" className="form-control" id="minprice-input" placeholder="Từ (.000 VNĐ)" min="0"/>
                                    <label htmlFor="minprice-input">Từ (.000 VNĐ)</label>
                                </form>
                            </div>
                            <div className="col-6">
                                <form className="form-floating">
                                    <input type="number" className="form-control" id="maxprice-input" placeholder="Từ (.000 VNĐ)" min="0"/>
                                    <label htmlFor="maxprice-input">Đến (.000 VNĐ)</label>
                                </form>
                            </div>
                            <div className="col-6 text-center pt-3">
                                <button className='btn btn-primary w-100' onClick={() => handleFilterPrice()}>Xác nhận lọc</button>
                            </div>
                            <div className="col-6 text-center pt-3">
                                <button className='btn btn-secondary w-100' onClick={() => deleteFilterPrice()}>Xóa bộ lọc</button>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <p className="lger-title pb-2">Sắp xếp theo</p>
                            <div className="col-6">
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="flexRadioDefault" 
                                        id="highrate" 
                                        onChange={() => handleFilterOption("#highrate")}
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="highrate">
                                        Đánh giá cao nhất
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="flexRadioDefault" 
                                        id="bestseller"
                                        onChange={() => handleFilterOption("#bestseller")}
                                    />
                                    <label className="form-check-label" htmlFor="bestseller">
                                        Bán chạy nhất
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="flexRadioDefault" 
                                        id="lowprice"
                                        onChange={() => handleFilterOption("#lowprice")}
                                    />
                                    <label className="form-check-label" htmlFor="lowprice">
                                        Giá thấp <i className="bi bi-arrow-right m-auto"></i> cao
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="flexRadioDefault" 
                                        id="highprice"
                                        onChange={() => handleFilterOption("#highprice")}
                                    />
                                    <label className="form-check-label" htmlFor="highprice">
                                        Giá cao <i className="bi bi-arrow-right"></i> thấp 
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <p className="lger-title pb-2">Thương hiệu</p>
                            <BrandMenu brands={restaurant_brand} callback={handleFilterBrand}/>
                        </div>
                        <hr className="list-splitline mb-5"/>
                    </div>
                    <div className="col-12 col-md-8 scale-fade-in-normal-animation">
                        <div className="row">
                            <FoodList foods={current_food}/>
                        </div>
                        <div className='row pb-4'>
                            {createPageNumber(page_count)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;