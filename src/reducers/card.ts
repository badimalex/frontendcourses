import { ADD_TO_CARD, SET_TO_CARD } from '../actions';

const todos = (state: [] = [], action: { type: string; payload: [] }) => {
  switch (action.type) {
    case SET_TO_CARD:
      return action.payload;
    case ADD_TO_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todos;
