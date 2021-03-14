const initialState = {
    age: 21,
    loading: false
};

const reducer = (state = initialState, action) => {

    switch(action.type){
        case "AGE_UP":
            return {
                age: state.age + action.value,
                loading: false
            };
        case "AGE_DOWN":
            return {
                age: state.age - action.value
            };
        case "LOADING":
            return {
                age: state.age,
                loading: true
            };
        default:
            return state;
    }
};

export default reducer;