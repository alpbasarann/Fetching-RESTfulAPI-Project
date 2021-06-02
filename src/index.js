import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Navbar from './components/Navbar';
import reducers from './reducers';



const store = createStore(reducers, applyMiddleware(thunk));



ReactDOM.render(
  <Provider store= {store}>
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

