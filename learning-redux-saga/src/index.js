import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import createSaga from 'redux-saga';
import reducer from "./store/reducer";
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';

import watchAgeUp from "./sagas/saga";


const saga = createSaga();
const store = createStore(reducer, applyMiddleware(saga));
saga.run(watchAgeUp);


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
 ,
  document.getElementById('root')
);
