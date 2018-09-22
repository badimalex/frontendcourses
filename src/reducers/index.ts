import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import products from './products';
import card from './card';
import order from './order';

export default combineReducers({
  products,
  card,
  order,
  form: formReducer
});
