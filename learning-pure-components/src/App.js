import React, { Component, PureComponent } from 'react';
import './App.css';
import Child from "./Child";

class App extends PureComponent {


    state = {
        val: 1
    };

    changeState = () =>{
        const prevState = {...this.state};
        this.setState({
            val: prevState.val+1
        })
    };

    dontChangeState = () =>{
        const prevState = {...this.state};
        this.setState({
            val: prevState.val
        })
    };

  render() {
    console.log("re-rendering....");
    return (
        <div>
            <div className="App">
                <span>{this.state.val}</span>
                <button onClick={this.changeState}>change state</button>
                <button onClick={this.dontChangeState}>DON'T change state</button>
            </div>
            <div className ='App'>
                <Child></Child>
            </div>
        </div>

    );
  }
}

export default App;
