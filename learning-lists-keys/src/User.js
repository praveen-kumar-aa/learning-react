import React from "react";


const User = (props) =>{
    return(
        <div>
                <span>Name: {props.name} | Age: {props.age}</span>
                <input onChange = {props.editName}  value = {props.name}></input>
                <button onClick={props.deleteUser}>X</button>
        </div>


    );
};


export default User;