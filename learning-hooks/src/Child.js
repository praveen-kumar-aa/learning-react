import React, { Component } from 'react';
import './App.css';

class Child extends Component {



    constructor(){
        super();
        // this.state = {
        //     name: "child constructor"
        // };

        console.log("child constructor called...");
    }

    componentWillMount() {
        console.log("child component will mount called...")
    }

    componentDidMount() {
        console.log("child component did mount called...")
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("child component will receive props called..")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("child should component update called...")
        return true
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("child component will update...")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("child component did update..")
    }

    componentWillUnmount() {
        console.log("child component will unmount called..")
    }

    // changeState = () =>{
    //     this.setState({
    //         name: "child Name changed"
    //     })
    // };
    render() {
        console.log("child render called...")
        return (
            <div className="App">
                <div>
                    <span>{this.props.name}</span>
                </div>
                {/*<div>*/}
                {/*    <button onClick={this.changeState}>change child state</button>*/}
                {/*</div>*/}

            </div>
        );
    }
}

export default Child;
