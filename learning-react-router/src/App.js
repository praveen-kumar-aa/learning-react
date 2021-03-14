import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Route from 'react-router-dom/Route';
import {Link, NavLink, Redirect, Prompt } from "react-router-dom";
import './App.css';


const User = (props) => {
    return <h1>User: {props.name}</h1>
};


class App extends Component {


    state = {
        isLoggedIn: false
    };
    toggleState = () =>{
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    };
  render() {
    return (
      <Router>
          <div className="App">
              <Route path="/" exact strict render={
                  () => {
                      return (<h1>Home page</h1>)
                  }
              }/>

              <Route path="/about"  exact strict render={
                  () => {
                      return (<h1>About the app</h1>)
                  }
              }/>
              <Route path="/user/:username"  exact strict render={
                  ({match}) => {
                    return (
                        this.state.isLoggedIn?
                            <User name={match.params.username} /> : <Redirect to = "/"/>
                    )
                  }
              }/>

              <Prompt
                when = {!this.state.isLoggedIn}
                message= {
                    (location) =>{
                        return location.pathname.startsWith("/user") ? "please login to continue.." : true
                    }
                }
              ></Prompt>

              {/*<Link to="/">Home</Link>*/}
              {/*<br/>*/}
              {/*<Link to="/about">About</Link>*/}
              {/*<br/>*/}
              {/*<Link to="/user/naveen">User naveen</Link>*/}
              {/*<br/>*/}
              {/*<Link to="/user/praveen">User praveen</Link>*/}

              <NavLink to="/" exact activeStyle={{color: 'green'}}>Home</NavLink>
              <br/>
              <NavLink to="/about" exact activeStyle={{color: 'green'}}>About</NavLink>
              <br/>
              <NavLink to="/user/naveen" exact activeStyle={{color: 'green'}}>User naveen</NavLink>
              <br/>
              <NavLink to="/user/praveen" exact activeStyle={{color: 'green'}}>User praveen</NavLink>
              <br/>
              <button onClick={this.toggleState} >{this.state.isLoggedIn ? 'logout': 'login'}</button>




          </div>
      </Router>

    );
  }
}

export default App;
