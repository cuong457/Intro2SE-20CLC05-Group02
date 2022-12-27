import { INIT_STATE } from "../../constant";
import { getProducts, getType } from "../actions";

export default function productsReducer(state = INIT_STATE.products, action) {
    switch(action.type) {
        case getType(getProducts.getProductsRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getProducts.getProductSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case getType(getProducts.getProductFailure):
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
};
