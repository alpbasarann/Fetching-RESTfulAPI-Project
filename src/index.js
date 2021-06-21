import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {store} from './store'
import Navbar from './components/Navbar';

ReactDOM.render(
  <Provider store= {store}>
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

