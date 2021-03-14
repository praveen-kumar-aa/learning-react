const initialState = {
    b: 1
};

const reducerB = (state = initialState, action) =>{
    let newState = {...state};
    if(action.type === 'UPDATE_B'){
        newState.b = state.b + action.a;
        return newState;
    }
    return state;
};

export default reducerB;