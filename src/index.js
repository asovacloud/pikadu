import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './redux/rootReducer';
import './index.scss';

const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

const app = (
    <Provider store={store}>
        <App title={'This title from props.'} />
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('root')
);
