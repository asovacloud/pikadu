const redux = require('redux');

const initialState = {
    counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                'counter': state.counter + 1
            }
        case 'DECREMENT':
            return {
                'counter': state.counter - 1
            }
        case 'ADD_NUMBER':
            return {
                'counter': state.counter + action.payload
            }
        default:
            return state;
    }
};

// Store
const store = redux.createStore(reducer);

store.subscribe(() => console.log(store.getState()));

// Actions
const incCounter = {
    type: 'INCREMENT'
};
const decCounter = {
    type: 'DECREMENT'
};

store.dispatch(incCounter);
store.dispatch(decCounter);

store.dispatch({
    type: 'ADD_NUMBER',
    payload: 10
});
