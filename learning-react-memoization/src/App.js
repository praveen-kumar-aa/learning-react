import React, { Component } from 'react';
import './App.css';
import FuncComp from "./FuncComp";

class App extends Component {


    state = {
        value: 1
    };
    //will run immediately after APP is mounted (rendered)
    componentDidMount() {

        setInterval(()=>{
            this.setState({
                val:1
            })
        }, 1000)
    }

    render() {



    return (
      <div className="App">
        <FuncComp value = {this.state.value}></FuncComp>
      </div>
    );
  }
}

export default App;
