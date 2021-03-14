const {createStore} = require('redux');

const initialState = {
    number: 0
};

const myReducer = (state = initialState , action) =>{

    if(action.type === 'ADD'){
        let newState = {...state};
        newState.number += action.value;
        return newState;
    }
    if(action.type === 'SUB'){
        let newState = {...state};
        newState.number -= action.value;
        return newState;
    }
};


const store  = createStore(myReducer);
store.subscribe(
    ()=>{
        console.log(JSON.stringify(store.getState()));
    }
);

store.dispatch( {type: 'ADD', value: 2});
store.dispatch( {type: 'SUB', value: -2});