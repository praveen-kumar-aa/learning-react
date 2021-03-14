import React from 'react';

const FuncComp = React.memo((props)=>{
    console.log("rendering....")
    return <div>{props.value}</div>
});

export default FuncComp;