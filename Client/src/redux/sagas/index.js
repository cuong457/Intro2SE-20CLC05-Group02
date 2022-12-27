
import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchProductSaga(action) {
    const products = yield call(api.fetchProduct);
    console.log('[products]', products)
    yield put(actions.getProducts.getProductSuccess(products));
};

function* mySaga() {
    yield takeLatest(actions.getProducts.getProductsRequest, fetchProductSaga)
};

export default mySaga;
