export const SET_PRODUCTS = 'set_products';
export const GET_PRODUCTS = 'get_products';
export const ADD_TO_CARD = 'add_to_card';
export const APP_ERROR = 'app_error';

export function setProducts(data: []) {
  return {
    type: SET_PRODUCTS,
    payload: data
  };
}

export function addToCard(item: {}) {
  return {
    type: ADD_TO_CARD,
    payload: item
  };
}

export function getProducts() {
  return {
    type: GET_PRODUCTS
  };
}
