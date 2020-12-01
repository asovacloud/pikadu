const initialState = {
  counter2: 200
};

const counter2 = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT2':
      return {
        counter2: state.counter2 + 1
      }
    case 'DECREMENT2':
      return {
        counter2: state.counter2 -1
      }
    default:
      return state;
  }
};

export default counter2;