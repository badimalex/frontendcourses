import { SET_PRODUCTS } from '../actions/index';

interface IAction {
  type: string;
  payload: [];
}

const todos = (state: {} = { items: [] }, action: IAction) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return Object.assign({}, { items: action.payload });
    default:
      return state;
  }
};

export default todos;
