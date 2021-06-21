import React from 'react';
import { fetchClosedPRs } from './actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(reducers, applyMiddleware(thunk));

function MergeFetching() {
    const dispatch = useDispatch();
    dispatch(fetchClosedPRs());
} 
export default MergeFetching;



