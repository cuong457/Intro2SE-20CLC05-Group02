import $ from "jquery";
import React from "react";
import { Link } from "react-router-dom";

import RatingStarGenerator from "../RatingStars/RatingStars";

class SellerStoreTest extends React.Component {
  state = {
    items: this.foods,
  };
  handleDeleteItem(target_item) {
    // Delete in items
    let new_items = this.state.items.filter(
      (item) => item.key != target_item.key
    );
    this.setState({ items: new_items });
  }
  SellerStoreTest(items) {
    return(
      <div class="col-6 col-lg-4 pb-3" key={items.key}>
        <div class="card card-hover">
          <a href={items.link}>
            <img src={items.img} class="card-img-top p-3" />
          </a>
          <div class="card-body ">
            <a href={items.link} class="erase-underline">
              <p class="me-title text-lightblue">{items.name}</p>
            </a>
            <RatingStarGenerator star={items.rating} />
            <p class="review-count">{items.rvcount}</p>
            <p class="sm-title">
              1 offer from <span class="rtab-money">{items.price}.000 VNĐ</span>
            </p>

            <div class="d-flex justify-content-between text-center">
              <a href="/seller/edit">
                <button
                  class="btn btn-outline-info rtab-detail-button"
                  onclick="changepage()"
                >
                  Edit
                </button>
              </a>
              <button
                class="btn btn-danger rtab-detail-button"
                onclick={(e) => this.handleDeleteItem(items)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  StoreRenderItem(itemlist) {
    let result;
    if (Array.isArray(itemlist) && itemlist.length > 0)
      result = itemlist.map((item, index) => {
        return this.SellerStoreTest(item);
      });
    else if (Array.isArray(itemlist) && itemlist.length == 0) {
      result = (
        <Link to="/" className="erase-underline">
          Your Store is empty, wanna add something?
        </Link>
      );
    } else {
      result = (
        <Link to="/" className="erase-underline">
          Cart error! Go back to home page.
        </Link>
      );
    }

    return <>{result}</>;
  }
  render() {
    return (
      <div class="card">
        <div class="card-header">
          <h4 class="card-header d-flex justify-content-between">
            Store
            <a
              class="btn btn-sm btn-outline-primary"
              href="/seller/add"
              role="button"
            >
              <i class="fa fa-plus pe-1" aria-hidden="true"></i>Add
            </a>
          </h4>
        </div>
        {/* Hiện danh sách món ăn của seller */}
        <div class="row">
            {this.StoreRenderItem(this.state.items)}
        </div>
        
        {/* Thanh đổi trang */}
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="/seller">
              Previous
            </a>
          </li>
          <li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
          </li>
          <li class="page-item">
            <a class="page-link" href="/seller">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/seller">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/seller">
              Next
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SellerStoreTest;
