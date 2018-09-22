export const SET_PRODUCTS = 'set_products';
export const GET_PRODUCTS = 'get_products';
export const ADD_TO_CARD = 'add_to_card';
export const SET_TO_CARD = 'set_to_card';
export const SUBMIT_FORM = 'submit_form';
export const ACTION_SUBMIT_FORM = 'action_submit_form';
export const ACTION_ADD_TO_CARD = 'action_add_to_card';
export const APP_ERROR = 'app_error';

export function setProducts(data: []) {
  return {
    type: SET_PRODUCTS,
    payload: data
  };
}

export function addToCard(item: {}) {
  return {
    type: ACTION_ADD_TO_CARD,
    payload: item
  };
}

export function submitForm(values: {}) {
  return {
    type: ACTION_SUBMIT_FORM,
    payload: values
  };
}

export function getProducts() {
  return {
    type: GET_PRODUCTS
  };
}
