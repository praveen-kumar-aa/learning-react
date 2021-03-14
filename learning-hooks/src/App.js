import React, { Component } from 'react';
import './App.css';
import Child from "./Child";

class App extends Component {



  constructor(){
    super();
    this.state={
      name: "constructor name",
      flag: true
    };

    console.log("parent constructor called...");
  }

  componentWillMount() {
      console.log("parent component will mount called...")
  }

  componentDidMount() {
      console.log("parent component did mount called...")
  }

  componentWillReceiveProps(nextProps, nextContext) {
      console.log("parent component will receive props called..")
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
      console.log("parent should component update called...")
      return true
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
      console.log("parent component will update...")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("parent component did update..")
  }

  componentWillUnmount() {
      console.log("parent component will unmount called..")
  }

    changeState = () =>{
    this.setState({
    name: "name changed...."
  })
};

  unMount =()=>{
      this.setState({
          flag: false
      })
  };
  mount =()=>{
      this.setState({
          flag: true
      })
  };


  render() {
    console.log("parent render called....");

    if(this.state.flag === true){
        return (
            <div className="App">
                <div>
                    <span>{this.state.name}</span>
                </div>
                <div>
                    <Child name = {this.state.name}></Child>
                </div>
                <div>
                    <button onClick={this.changeState}>Change state</button>
                </div>
                <div>
                    <button onClick={this.unMount}>Unmount component</button>
                </div>

            </div>


        );
    }

    else{
        return(
            <div className="App">
                <span>component unmounted :(</span>
                <button onClick={this.mount}>Re-Mount</button>
            </div>
        )
    }

  }
}

export default App;
