import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {decreaseAge} from "./actions/actionCreaters";
import {increaseAge} from "./actions/actionCreaters";


class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.loading ? <div >
          <span className="Loading1">.</span><span className="Loading2">.</span><span className="Loading3">.</span><span className="Loading4">.</span><span className="Loading5">.</span><span className="Loading6">.</span>
        </div> : <div >AGE: {this.props.age}</div>}

        <div>
          <button onClick={this.props.ageUp}>+</button>
          <button onClick={this.props.ageDown}>-</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    age: state.age,
    loading: state.loading
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
    ageUp: ()=> dispatch(increaseAge(1)),
    ageDown: () => dispatch(decreaseAge(1))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
