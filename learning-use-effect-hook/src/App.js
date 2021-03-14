import React, { useState, useEffect } from 'react';

import './App.css';



//all the useEffect() hooks will have a callback function that gets executed.
//all the useEffect() hooks will get executed once during app renders. That is during page refresh.
//So use some flags to stop some of the hooks in executing as per requirement.
const App = ()=>{

    const [age, setAge] = useState(10);
    const [ageReachedFifty, setAgeReachedFifty] = useState(true);
    useEffect(()=>{
        console.log('component did mount...i am born ')
    }, []);

    useEffect(()=>{
        if(age>=50)
            setAgeReachedFifty(false);
        console.log('component did update...i will update when state changes ')
    });

    useEffect(()=>{
        console.log('Age reached 50 ')
    }, [ageReachedFifty]);

    return (
        <div className="App">
            <div>Age: {age}</div>
            <button onClick={()=> setAge(age+10)}>increase age</button>
        </div>
    )

}


export default App;
