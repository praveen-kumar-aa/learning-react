import React, {PureComponent} from 'react';



class Child extends PureComponent{

    state={
        val: 100
    };

    changeState = () =>{
        const prevState = {...this.state};
        this.setState({
            val: prevState.val+1
        })
    };

    dontChangeState = () =>{
        const prevState = {...this.state};
        this.setState({
            val: prevState.val
        })
    };

    render(){
        console.log("re-rednering child...");
        return(
        <div>
            <span> Child's state: {this.state.val}</span>
            <button onClick={this.changeState}>change Child state</button>
            <button onClick={this.dontChangeState}>DON'T change Child state</button>
        </div>
        )
    }
}

export default Child;