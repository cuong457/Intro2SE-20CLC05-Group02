
import { useState } from 'react'
import $ from 'jquery'

import SellerList from '../SellerList/SellerList'

import user1 from '../../assets/images/user/avt/003.jpeg'
import user2 from '../../assets/images/user/avt/004.jpeg'
import user3 from '../../assets/images/user/avt/005.jpeg'
import user4 from '../../assets/images/user/avt/006.jpeg'
import user5 from '../../assets/images/user/avt/007.jpeg'
import user6 from '../../assets/images/user/avt/008.jpeg'
import user7 from '../../assets/images/user/avt/009.jpeg'
import user8 from '../../assets/images/user/avt/010.jpeg'
import user9 from '../../assets/images/logo/hawaii.png'
import user10 from '../../assets/images/logo/ichisando.png'
import user11 from '../../assets/images/logo/longboard.png'
import user12 from '../../assets/images/logo/panadicto.png'
import user13 from '../../assets/images/logo/PanzerHot-logo.png'
import user14 from '../../assets/images/logo/quellipizza.png'
import user15 from '../../assets/images/logo/shokudo.png'
import user16 from '../../assets/images/logo/vinny.png'

import rightArrow from '../../assets/images/icons/right.png'
import leftArrow from '../../assets/images/icons/left.png'

const user_detail = [
    {time: '4/9/2022', users: 3400, sales: 4000},
    {time: '4/10/2022', users: 11000, sales: 54000},
    {time: '4/11/2022', users: 15000, sales: 90300},
    {time: '4/12/2022', users: 18870, sales: 352000}
]

const LIST_LENGTH = 6;
const MAX_PAGENUMBER_SHOW = 3;

const thisIsCallFromAPI = [
    {img: user1, name: "Raiden Shogun", rating: 4, rvcount: 12.567, total_sales: 890, usn: 'sunrisefoods'},
    {img: user2, name: "Kamisato Ayaka", rating: 3.5, rvcount: 8.291, total_sales: 250, usn: 'assikoreanfood'},
    {img: user3, name: "Ganyu", rating: 5, rvcount: 163.523, total_sales: 9990, usn: 'burgerzone'},
    {img: user4, name: "I Dont Know", rating: 3.5, rvcount: 1.286, total_sales: 560, usn: 'caravansekai'},
    {img: user5, name: "Lightning Keqing", rating: 4, rvcount: 15.927, total_sales: 1020, usn: 'flavorofindia'},
    {img: user6, name: "Nilou", rating: 3, rvcount: 26.546, total_sales: 890, usn: 'lafriggitoria'},
    {img: user7, name: "Yae Miko", rating: 4, rvcount: 12.567, total_sales: 890, usn: 'goichi'},
    {img: user8, name: "Lumine", rating: 3.5, rvcount: 8.291, total_sales: 250, usn: 'gyroshop'},
    {img: user9, name: "Hawaii", rating: 5, rvcount: 163.523, total_sales: 9990, usn: 'hawaii'},
    {img: user10, name: "Ichi Sando", rating: 3.5, rvcount: 1.286, total_sales: 560, usn: 'ichisando'},
    {img: user11, name: "Longboard", rating: 4, rvcount: 15.927, total_sales: 1020, usn: 'longboard'},
    {img: user12, name: "Pan Adicto", rating: 3, rvcount: 26.546, total_sales: 890, usn: 'panadicto'},
    {img: user13, name: "Panzer Hot", rating: 3, rvcount: 26.546, total_sales: 890, usn: 'panzerhot'},
    {img: user14, name: "Quelli Pizza", rating: 3.5, rvcount: 1.286, total_sales: 560, usn: 'quellipizza'},
    {img: user15, name: "Shokudo", rating: 4, rvcount: 15.927, total_sales: 1020, usn: 'shokudo'},
    {img: user16, name: "Vinny", rating: 3, rvcount: 26.546, total_sales: 890, usn: 'vinny'}
];

let users = [
    {img: user1, name: "Raiden Shogun", rating: 4, rvcount: 12.567, total_sales: 890, usn: 'sunrisefoods'},
    {img: user2, name: "Kamisato Ayaka", rating: 3.5, rvcount: 8.291, total_sales: 250, usn: 'assikoreanfood'},
    {img: user3, name: "Ganyu", rating: 5, rvcount: 163.523, total_sales: 9990, usn: 'burgerzone'},
    {img: user4, name: "I Dont Know", rating: 3.5, rvcount: 1.286, total_sales: 560, usn: 'caravansekai'},
    {img: user5, name: "Lightning Keqing", rating: 4, rvcount: 15.927, total_sales: 1020, usn: 'flavorofindia'},
    {img: user6, name: "Nilou", rating: 3, rvcount: 26.546, total_sales: 890, usn: 'lafriggitoria'},
    {img: user7, name: "Yae Miko", rating: 4, rvcount: 12.567, total_sales: 890, usn: 'goichi'},
    {img: user8, name: "Lumine", rating: 3.5, rvcount: 8.291, total_sales: 250, usn: 'gyroshop'},
    {img: user9, name: "Hawaii", rating: 5, rvcount: 163.523, total_sales: 9990, usn: 'hawaii'},
    {img: user10, name: "Ichi Sando", rating: 3.5, rvcount: 1.286, total_sales: 560, usn: 'ichisando'},
    {img: user11, name: "Longboard", rating: 4, rvcount: 15.927, total_sales: 1020, usn: 'longboard'},
    {img: user12, name: "Pan Adicto", rating: 3, rvcount: 26.546, total_sales: 890, usn: 'panadicto'},
    {img: user13, name: "Panzer Hot", rating: 3, rvcount: 26.546, total_sales: 890, usn: 'panzerhot'},
    {img: user14, name: "Quelli Pizza", rating: 3.5, rvcount: 1.286, total_sales: 560, usn: 'quellipizza'},
    {img: user15, name: "Shokudo", rating: 4, rvcount: 15.927, total_sales: 1020, usn: 'shokudo'},
    {img: user16, name: "Vinny", rating: 3, rvcount: 26.546, total_sales: 890, usn: 'vinny'}
];

function convertUsersToString(number_of_user) {
    if(number_of_user / 1000 > 1) {
        return '' + (number_of_user / 1000).toFixed(2) + ' K'
    }
    else {
        return '' + number_of_user;
    }
}
function percentCompareToLastMonth (type) {
    let length = user_detail.length;

    if(type === 'users') {
        return (((user_detail[length - 1].users - user_detail[length - 2].users) / user_detail[length - 1].users)  * 100).toFixed(2)
    }
    else if(type === 'sales') {
        return (((user_detail[length - 1].sales - user_detail[length - 2].sales) / user_detail[length - 1].sales)  * 100).toFixed(2)
    }
}

function renderPercent (type) {
    let percent = percentCompareToLastMonth(type);
    let pc_tag;
    if(percent < 0) {
        percent *= -1;
        pc_tag = (
            <p className='text-green text-bold text-sm percent-wrapper'>
                <i className="fa-solid fa-arrow-down"></i>
                &nbsp;{percent + ' %'}
            </p>
        );
    }
    else {
        pc_tag = (
            <p className='text-sm'>
                <span className='percent-wrapper text-green'>
                    <i className="fa-solid fa-arrow-up"></i>
                    &nbsp;{percent + ' %'}
                </span>
                <span className='text-thin opacity-75'> vs. Previous month</span>
            </p> 
        );
    }
    return (
        <div className='pt-2 ps-2'>
            {pc_tag}
        </div>
    )
}

function UserCenter() {
    const [current_user, setCurrentUser] = useState([
        {img: user1, name: "Raiden Shogun", rating: 4, rvcount: 12.567, total_sales: 890, usn: 'sunrisefoods'},
        {img: user2, name: "Kamisato Ayaka", rating: 3.5, rvcount: 8.291, total_sales: 250, usn: 'assikoreanfood'},
        {img: user3, name: "Ganyu", rating: 5, rvcount: 163.523, total_sales: 9990, usn: 'burgerzone'},
        {img: user4, name: "I Dont Know", rating: 3.5, rvcount: 1.286, total_sales: 560, usn: 'caravansekai'},
        {img: user5, name: "Lightning Keqing", rating: 4, rvcount: 15.927, total_sales: 1020, usn: 'flavorofindia'},
        {img: user6, name: "Nilou", rating: 3, rvcount: 26.546, total_sales: 890, usn: 'lafriggitoria'},
    ]);
    const [lastuser_index, setLastUserIndex] = useState(current_user.length - 1);
    const [page_count, setPageCount] = useState(users.length % LIST_LENGTH !== 0 ? Math.floor(users.length / LIST_LENGTH) + 1 : Math.floor(users.length / LIST_LENGTH));
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const changepagenumber = (index, total) => {
        if(index > 0 && index <= total) {
            let newUserList = [];
            let start = (index - 1) * LIST_LENGTH;
            let end = start + LIST_LENGTH;

            // Move to the head of page
            $('html, body').animate({ scrollTop: 0 }, 'fast');

            if(users.length <= end)
                end = users.length;
            for(; start < end; start++) {
                newUserList.push(users[start]);
            }
            setLastUserIndex(--end);
            setCurrentUser(newUserList);
        }
    }
    const createPageNumber = (total) => {
        if(total > 1) {
            let current_page = Math.floor(lastuser_index / LIST_LENGTH) + 1;
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
    const handleBanUser = (usn) => {
        for(let i = 0; i < users.length; i++) {
            if(users[i].usn === usn) {
                // Call API to set status to STATUS.BAN
                console.log("ban " + usn);
            }
        }
    }
    const handleKeydown = (event) => {
        if(event.key === 'Enter') {
            searchProcess();
        }
    }
    const searchProcess = () => {
        let val = $('#seller-search-box').val().trim().toLowerCase();
        if(val !== '') {
            let newCurrentUsers = [];
            for(let i = 0; i < users.length; i++) {
                if(users[i].name.toLowerCase().search(val) !== -1) {
                    newCurrentUsers.push(users[i]);
                }
            }
            users = newCurrentUsers;
            setPageCount(users.length % LIST_LENGTH !== 0 ? Math.floor(users.length / LIST_LENGTH) + 1 : Math.floor(users.length / LIST_LENGTH));
            changepagenumber(1, page_count);
        }
    }
    const cancelSearch = () => {
        let val = $('#seller-search-box').val().trim();
        if(val !== '') {
            $('#seller-search-box').val('');
            users = thisIsCallFromAPI;
            setPageCount(users.length % LIST_LENGTH !== 0 ? Math.floor(users.length / LIST_LENGTH) + 1 : Math.floor(users.length / LIST_LENGTH));
            changepagenumber(1, page_count);
        }
    }
    const showCancelButton = () => {
        let val = $('#seller-search-box').val().trim();
        if(val !== '') {
            $('.cancel-btn-searchbox').removeClass('undisplay');
        }
        else {
            $('.cancel-btn-searchbox').addClass('undisplay');
        }
    }
    return (
        <div className='admin-content pt-2'>
            <div className='row'>
                <div className='col-12 col-xl-3 ps-0 pe-4'>
                    <div className='row'>
                        <div className='col-6 col-xl-12 pb-3'>
                            <div className='admin-sm-card'>
                                <p className='text-thin formal-font opacity-75 pt-2 ps-2 pb-1'>
                                    Users
                                </p>
                                <div className='card-icon blue-bg'>
                                    <i className="fa-regular fa-user fa-lg"></i>
                                </div>
                                <p className='text-bold text-xlg formal-font pt-4 mt-2 ps-2'>
                                    {convertUsersToString(
                                        user_detail[user_detail.length - 1].users
                                    )}
                                </p>
                                {renderPercent('users')}
                            </div> 
                        </div>
                        <div className='col-6 col-xl-12 pb-3'>
                            <div className='admin-sm-card'>
                                <p className='text-thin formal-font opacity-75 pt-2 ps-2 pb-1'>
                                    Sales
                                </p>
                                <div className='card-icon yellow-bg'>
                                    <i className="fa-solid fa-dollar-sign fa-lg"></i>
                                </div>
                                <p className='text-bold text-xlg formal-font pt-4 mt-2 ps-2'>
                                    {convertUsersToString(
                                        formatter.format(user_detail[user_detail.length - 1].sales)
                                    )}
                                </p>
                                {renderPercent('sales')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-xl-9 bg-white ps-0'>
                    <div className="row p-5 pt-4 pb-0">
                        <div className='col-12 col-xl-5 d-flex align-items-center'>
                            <p className='formal-font text-xlg text-bold'>USER LIST</p>
                        </div>
                        <div className='col-12 col-xl-7'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control search-box"
                                    id="seller-search-box"
                                    placeholder="Find any seller?"
                                    onKeyDown={(e) => handleKeydown(e)}
                                    onChange={showCancelButton}
                                />
                                <button 
                                    type='button' 
                                    className='cancel-btn-searchbox undisplay'
                                    onClick={() => cancelSearch()}
                                >
                                    <i className="fa-solid fa-x"></i>
                                </button>
                                <button 
                                    type="button" 
                                    className="search-btn" 
                                    id="search-button" 
                                    onClick={() => searchProcess()}
                                >
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='row p-5 pt-3'>
                        <SellerList seller_list={current_user} banSeller={handleBanUser}/>
                    </div>
                    <div className='row pb-4'>
                        {createPageNumber(page_count)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCenter;