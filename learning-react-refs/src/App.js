import React, { Component } from 'react';

import './App.css';

const FuncComp = () =>{

   let funcCompName = null;
   let funcCompSubmit =null;
   const keyUpHandler = (param, e) =>{
        if(e.keyCode === 13){
            switch (param){
                case 'name': funcCompSubmit.focus(); break;
                case 'submit': funcCompName.focus(); break;
                default: funcCompName.focus(); break;
            }
        }
    };

    return(
        <div >
            <span>Name From Functional Component: </span>
            <input className="Div"
                onKeyUp={keyUpHandler.bind(this,'name')}
                ref = { (input) => funcCompName = input}
                type="text" />
            <button
                onKeyUp={keyUpHandler.bind(this,'submit')}
                ref = { (input) => funcCompSubmit = input}> Submit </button>

        </div>
    )

};



class App extends Component {

    keyUpHandler = (param, e) =>{
        if(e.keyCode === 13){
            switch (param){
                case 'firstName': this.lastName.focus(); break;
                case 'lastName': this.age.focus(); break;
                case 'age': this.submit.focus(); break;
                default: this.firstName.focus(); break;
            }
        }
    };

  render() {
    return (
      <div className="App">
          <div >
              <FuncComp/>
          </div>
        <div>
            <span>First Name: </span>
            <input className="Div"
                onKeyUp={this.keyUpHandler.bind(this,'firstName')}
                ref = { (input) => this.firstName = input}
                type="text" />
        </div>
        <div>
            <span>Last Name: </span>
            <input className="Div"
                onKeyUp={this.keyUpHandler.bind(this,'lastName')}
                ref = { (input) => this.lastName = input}  type="text" />
        </div>
        <div>
            <span>Age: </span>
            <input className="Div"
                onKeyUp={this.keyUpHandler.bind(this,'age')}
                ref = { (input) => this.age = input} type="text" />
          </div>
          <div>
              <button
                  onKeyUp={this.keyUpHandler.bind(this,'submit')}
                  ref = { (input) => this.submit = input}> Submit </button>
          </div>
      </div>
    );
  }
}

export default App;
