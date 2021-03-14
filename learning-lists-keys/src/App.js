import React, { Component } from 'react';
import './App.css';
import User from "./User";
class App extends Component {


  state = {
    users : [
      {name: "bala", age: 20},
      {name: "sai", age:21},
      {name: "purush", age:22}
    ]
  };

  deleteUser = (index) => {
    const users = [...this.state.users];
    users.splice(index,1);
    this.setState({users: users});
  };

  changeName  = (index, event) =>{
    const users = [...this.state.users];
    users[index].name = event.target.value;
    this.setState({users: users});
  };

  addUser = ()=>{
    const users = [...this.state.users];
    users.push({name: "", age: ""});
    this.setState({users:users});
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.addUser}>Add more users</button>
        <ul>
          { this.state.users.map(
              (user, index) => {
                return <User
                        key = {index}
                        editName = {this.changeName.bind(this, index)}
                        deleteUser={this.deleteUser.bind(this, index)}
                        name ={user.name} age={user.age}>

                </User>
              }
          ) }
        </ul>
      </div>
    );
  }
}

export default App;
