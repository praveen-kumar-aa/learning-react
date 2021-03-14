import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer/reducer";


//after calling dispatch this log action executes
const logAction = store =>{
    return next =>{
        return action =>{
            const result_action = next(action);
            //console.log(store);
            console.log(result_action); //action object
            return result_action; // this action obj will be going to reducer after this return statement
        }
    }
};
const store = createStore(reducer, applyMiddleware(logAction));

ReactDOM.render(
  <Provider store = {store}>
      <App />
  </Provider>
  ,
  document.getElementById('root')
);
