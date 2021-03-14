import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import './App.css';

const App = () =>{

    const count = useSelector( (state) => state.count);
    const dispatch = useDispatch();


    return (
        <div className="App">
            <span>COUNT: {count}</span>
            <button onClick = {() => dispatch({type: "INCR"})}>INCREMENT-COUNTER</button>
            <button onClick = {() => dispatch({type: "DECR"})}>DECREMENT-COUNTER</button>
        </div>
    )
};

export default App;
