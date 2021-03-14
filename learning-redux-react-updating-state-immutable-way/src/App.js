import React, { Component } from 'react';

import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>AGE: {this.props.age}</div>
        <div>
          <button onClick ={this.props.ageUp}>+</button>
          <button onClick={this.props.ageDown}>-</button>
        </div>

        <div>
          <ul>
            {
              this.props.history.map(
                  e => <li className="ListItem" key = {e.id} onClick={this.props.onDelete.bind(this, e.id)}>{e.age}</li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state)=>{
  return {
    age: state.age,
    history: [...state.history]
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
    ageUp: () => dispatch({type: "AGE_UP", value: 1}),
    ageDown: () => dispatch({type: "AGE_DOWN", value: 1}),
    onDelete: (id) => dispatch({type: "DELETE", key: id })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
