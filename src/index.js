import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './redux/rootReducer';
import './index.scss';

const loggerMiddleware = store => next => action => {
  const result = next(action);

  return result;
};

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

const app = (
    <Provider store={store}>
        <App title={'This title from props.'} />
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('root')
);
