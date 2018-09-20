import { ADD_TO_CARD } from '../actions';

const todos = (state: [] = [], action: { type: string; payload: [] }) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todos;
