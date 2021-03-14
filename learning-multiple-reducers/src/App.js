import React, { Component } from 'react';

import './App.css';

import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{display: 'inline-block', padding: '20px'}}>
            <span>A: {this.props.a}</span>
            <span>B: {this.props.b}</span>
        </div>
          <br/>
         <div style={{display: 'inline-block', padding: '20px'}}>
             <button onClick={this.props.updateA.bind(this, this.props.b)}>update A</button>
             <button onClick={this.props.updateB.bind(this, this.props.a)}>update B</button>
         </div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
    return{
        a: state.rA.a,
        b: state.rB.b
    }
};

const mapDispatchToProps  = (dispatch) =>{
    return {
        updateA: (b) => dispatch({type: "UPDATE_A", b:b}),
        updateB: (a) => dispatch({type: "UPDATE_B", a:a})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
