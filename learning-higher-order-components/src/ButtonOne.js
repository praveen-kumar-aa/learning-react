import React from 'react';
import stylesWrapper from "./stylesWrapper";


// const styles = {
//     default: {
//         backgroundColor: '#AAAA',
//         color: '#23239',
//         padding: '10px',
//     },
//     disable: {
//         backgroundColor: '#AAAA',
//         color: '#EEEE',
//     }
// };

const ButtonOne = (props) =>{
    // let _styles = {...styles.default};
    // if(props.disable){
    //     _styles = { ..._styles, ...styles.disable}
    // }
    return <button style = {props._styles}>Button One</button>
};


export default stylesWrapper(ButtonOne);