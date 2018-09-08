import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchProducts } from '../services/products';

import { GET_PRODUCTS, SET_PRODUCTS, APP_ERROR } from '../actions/index';

function* actionProducts() {
  try {
    const result = yield call(fetchProducts);
    yield put({ type: SET_PRODUCTS, payload: result.items });
  } catch (e) {
    yield put({ type: APP_ERROR, message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(GET_PRODUCTS, actionProducts);
}

export default mySaga;
