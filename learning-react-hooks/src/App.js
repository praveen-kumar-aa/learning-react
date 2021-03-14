import React, { useState } from 'react';

import './App.css';




const App = ()=>{
    const [age, setAge] = useState(21);
    const [name, setName] = useState('Peter');
    return (
        <div className="App">
            <span>NAME: {name} | AGE: {age}</span>
            <input onChange = {(event) => setName(event.target.value)}></input>
            <button onClick={()=> setAge(age+1)}>increment age</button>
        </div>
    )


};
export default App;
