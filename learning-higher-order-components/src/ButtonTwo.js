import React from 'react';
import stylesWrapper from "./stylesWrapper";

const ButtonTwo = (props) =>{
    return <button style = {props._styles}>Button Two</button>
};


export default stylesWrapper(ButtonTwo);