import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getProducts = createActions({
    getProductsRequest: undefined,
    getProductSuccess: (payload) => payload,
    getProductFailure: (err) => err,
});