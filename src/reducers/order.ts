import { SUBMIT_FORM } from '../actions';

const todos = (state: [] = [], action: { type: string; payload: [] }) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return action.payload;
    default:
      return state;
  }
};

export default todos;
