
const AsyncIncreaseAge = (val) =>{
    return {
        type: "AGE_UP",
        value: val
    }
};

export const increaseAge = (val) =>{
    return (dispatch) =>{
        dispatch(loading());
        setTimeout(()=>{
            dispatch(AsyncIncreaseAge(val));
        }, 5000)
    }
};

export const decreaseAge = (val) =>{
    return {
        type: "AGE_DOWN",
        value: val
    }
};


const loading = ()=>{
    return {
        type: "LOADING"
    }
};