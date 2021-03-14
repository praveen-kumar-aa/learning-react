import React, {useState, useMemo  } from 'react';

import './App.css';
import Child from "./Child";




const App = () =>{



    const [age, setAge] = useState(21);

    const ageUp = () => setAge(age+1);
    const MemoChild = useMemo( () => <Child></Child>, []);

    return (
        <div className="App">
            <div> age: {age}</div>
            <button onClick={ageUp}>AGE-UP</button>
            <Child/>
           <div>{MemoChild}</div>
        </div>

    )
};


export default App;
