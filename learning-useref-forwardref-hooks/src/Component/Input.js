import React, {forwardRef} from 'react';



const Input =(props, ref)=>{

    return (
        <input {...props} ref = {ref}></input>
    )
};
export default forwardRef(Input);