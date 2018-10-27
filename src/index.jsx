import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './style.css';
import printMe from './print';

import * as reducers from './store/reducers';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

const Hello = () => (
  <div>
    <h1>{_.join(['Hello', 'Brand'], ' ')}</h1>
    <button type="submit" onClick={printMe}>Click Me and look at the console</button>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('appContainer'),
);
