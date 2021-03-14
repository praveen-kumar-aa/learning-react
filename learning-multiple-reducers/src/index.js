import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore, combineReducers} from "redux";
import reducerA from "./Reducers/reducerA";
import reducerB from "./Reducers/reducerB";
import {Provider} from 'react-redux'

const rootReducer = combineReducers({
    rA: reducerA, rB: reducerB
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
  ,
  document.getElementById('root')
);
