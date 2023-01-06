import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from 'jquery'



import sunrise_logo from '../../assets/images/logo/SunriseFoods-logo.png'
import flavorofindia_logo from '../../assets/images/logo/FlavourOfIndia-logo.png'
import panzerhot_logo from '../../assets/images/logo/PanzerHot-logo.png'
import friggitoria from '../../assets/images/logo/Friggitoria-logo.png'

import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney, MdOutlineRefresh } from 'react-icons/md';


const restaurant_logo = [
  {img: sunrise_logo, name: "Sunrise Foods", link: "#"},
  {img: flavorofindia_logo, name: "Flavour of India", link: "#"},
  {img: panzerhot_logo, name: "Panzer Hot", link: "#"},
  {img: friggitoria, name: "Friggitoria", link: "#"}
];

const AddItem = () => {

  return (
    <div class="bg-white d-flex justify-content-center align-content-center py-4">
      <div class="card w-75">
        <div class="card-header h4">
          Food Information Form
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="InputFoodTitle" class="form-label h5">Food title</label>
            <input type="text" class="form-control" id="InputFoodTitle" placeholder="Enter your food title"/>
          </div>
          <div class="mb-3">
            <label for="FoodDescription" class="form-label h5">Description</label>
            <textarea class="form-control" id="FoodDescription" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <div class="w-full border-dotted ph-225 border-gray-300 d-flex justify-content-center align-content-center cursor-pointer">
              <label className="w-full h-full d-flex align-content-center justify-content-center text-center flex-column cursor-pointer">
                <div className=" w-full h-full d-flex justify-content-center align-content-center text-center flex-column">
                  <MdCloudUpload className="text-gray-600 text-3xl hover:text-gray-700 align-self-center" />
                  <p className="text-gray-600 hover:text-gray-700">Upload Image</p>
                </div>
                <input type="file" name="uploadimage" accept="image/*" className="w-0 h-0" id="FoodIMG"/>
              </label>
            </div>
          </div>
          <div class="row gap-3">
            <div class="col">
              <label for="FoodPrize" class="form-label h5">Prize</label>
              <div class="input-group">
                <input type="text" class="form-control" id="FoodPrize" placeholder="Enter Prize"/>
                <span class="input-group-text">.000 VND</span>
              </div>
            </div>
            <div class="col">
              <label for="FoodPrize" class="form-label h5">Categories</label>
              <select class="form-select mb-3" aria-label=".form-select-lg example" id="ItemCate">
                <option selected>Default</option>
                <option value="1">Cơm</option>
                <option value="2">Phở</option>
                <option value="3">Đồ ăn vặt</option>
                <option value="3">Trà sữa</option>
                <option value="3">Bún đậu mắm tôm</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <a class="btn btn-sm btn-outline-danger" href="/seller" role="button">
            <i class="bi bi-arrow-bar-left pe-1" aria-hidden="true"></i>Back
          </a>
          <a class="btn btn-sm btn-success" href="#" role="button" >
            <i class="bi bi-check pe-1" aria-hidden="true"></i>Save
          </a>
        </div>
      </div>
    </div>
  )
}

export default AddItem;