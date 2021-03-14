const initialState = {
    age: 21
};


const reducer = (state = initialState, action) =>{

    if(action.type === 'AGE_UP'){
        // let newState = {...state};
        // newState.age = state.age + action.value;
        // return newState;
        return {
            ...state,
            age: state.age + action.value
        };
    }

    if(action.type === 'AGE_DOWN'){
        // let newState = {...state};
        // newState.age = state.age - action.value;
        // return newState;
        return {
            ...state,
            age: state.age - action.value
        };
    }

    return state;
};

export default reducer;