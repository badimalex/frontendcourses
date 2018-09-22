import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchProducts, saveToLocalStorage } from '../services/products';

import {
  GET_PRODUCTS,
  SET_PRODUCTS,
  APP_ERROR,
  ADD_TO_CARD,
  ACTION_ADD_TO_CARD
} from '../actions/index';

function* actionProducts() {
  try {
    const result = yield call(fetchProducts);
    yield put({ type: SET_PRODUCTS, payload: result.items });
  } catch (e) {
    yield put({ type: APP_ERROR, message: e.message });
  }
}

function* addProduct(action: any) {
  saveToLocalStorage(action.payload);

  yield put({ type: ADD_TO_CARD, payload: action.payload });
}

function* mySaga() {
  yield takeLatest(ACTION_ADD_TO_CARD, addProduct);
  yield takeLatest(GET_PRODUCTS, actionProducts);
}

export default mySaga;
