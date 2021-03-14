import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div> AGE: {this.props.age} </div>
       <div>
           <button onClick = {this.props.ageUp}>+</button>
           <button onClick = {this.props.ageDown}>-</button>
       </div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
    return {
        age: state.age
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        ageUp: () => dispatch({type: "AGE_UP", value: 1 }),
        ageDown: () => dispatch({type: "AGE_DOWN", value: 1 })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
