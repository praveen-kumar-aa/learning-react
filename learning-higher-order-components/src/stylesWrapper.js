import commonStyles from "./commonStyles";

// import React from 'react';




const translateProps = (props) =>{
    let _styles = {...commonStyles.default};
    if(props.disable){
        _styles = { ..._styles, ...commonStyles.disable}
    }
    const newProps = {...props, _styles};
    return newProps;
};


export default (WrappedComponent) => {
    return function WrappedRender(args){
        return WrappedComponent(translateProps(args));
    }
}