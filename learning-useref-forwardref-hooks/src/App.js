import React, {useRef, useEffect} from 'react';
import './App.css';
import Input from "./Component/Input";

const App =()=> {


    const handleSubmit = () =>{
        alert('submitted...!')
    };
    const detectEnterFirstName =(e)=>{
        if(e.key === 'Enter')
            lastNameRef.current.focus();
    };
    const detectEnterLastName =(e)=>{
        if(e.key === 'Enter')
            submitRef.current.focus();
    };
    const detectEnterSubmit =(e)=>{
        if(e.key === 'Enter')
            firstNameRef.current.focus();
    };

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const submitRef = useRef(null);

    useEffect(
        () => {
            firstNameRef.current.focus();
        }, []
    );


    return (
      <div className="App">
          <div>
              <input ref={firstNameRef} onKeyDown={detectEnterFirstName} type = "text" placeholder="Enter first name..."></input>
          </div>
          <div>
              <Input ref={lastNameRef}  onKeyDown={detectEnterLastName} type = "text" placeholder="Enter last name..."></Input>
          </div>
          <div>
              <button ref={submitRef} onClick={handleSubmit} onKeyDown={detectEnterSubmit} >submit</button>
          </div>
      </div>
    );

};

export default App;
