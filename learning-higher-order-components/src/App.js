import React, { Component } from 'react';
import './App.css';
import ButtonOne from "./ButtonOne";
import ButtonTwo from "./ButtonTwo";

class App extends Component {
  render() {
    //make "disable" from true to false to see the color change of the text in button
    return (
      <div className="App">
       <ButtonOne disable = {true} />
       <ButtonTwo disable = {false} />
      </div>
    );
  }
}

export default App;
