const initialState = {
    age: 21,
    history: []
};


const reducer = (state = initialState, action)=>{
    let newState = {...state};
    switch(action.type){
        case "AGE_UP" : {
            newState.age += action.value;
           // newState.history = state.history.concat({id: Math.random(), age: state.age});
            newState.history = [...state.history, {id: Math.random(), age: state.age}];
            return newState;
        }
        case "AGE_DOWN" : {
            newState.age -= action.value;
           // newState.history = state.history.concat({id: Math.random(), age: state.age});
            newState.history = [...state.history, {id: Math.random(), age: state.age}];
            return newState;
        }
        case "DELETE" : {
            newState.history = state.history.filter(e => e.id !== action.key);
            return newState;
        }
        default:
            return newState;
    }
};

export default reducer;