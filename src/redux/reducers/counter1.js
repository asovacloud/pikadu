import {DECREMENT, INCREMENT, INCREMENT_NUMBER, DECREMENT_NUMBER} from "../actions/actionTypes";

const initialState = {
  counter: 0
};

const counter1 = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      }
    case DECREMENT:
      return {
        counter: state.counter -1
      }
    case INCREMENT_NUMBER:
      return {
        counter: state.counter + action.payload
      }
    case DECREMENT_NUMBER:
      return {
        counter: state.counter + action.payload
      }
    default:
      return state;
  }
};

export default counter1;