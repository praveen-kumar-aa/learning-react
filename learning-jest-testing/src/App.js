import React, { Component } from 'react';
import './App.css';
import Button from "./components/button/Button";
class App extends Component {
  render() {
    return (
      <div className="App">
          <Button label = "click me"/>
      </div>
    );
  }
}

export default App;
