import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>AGE: {this.props.age}</div>
        <button onClick = {this.props.ageUp}  >Age up</button>
        <button onClick = {this.props.ageDown}  >Age Down</button>
      </div>
    );
  }
}
// We can access the state with props. Thats why we are mapping state to props.
const mapStateToProps = (state) =>{
    return {
       age: state.age
    }
};
//we can trigger the dispatch methods with props. Thats why we are mapping dispatch methods to props.
const mapDispatchToProps = (dispatch) =>{
    return {
        ageUp: () => dispatch({type: 'AGE_UP'}),
        ageDown: () => dispatch({type: 'AGE_DOWN'})
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
