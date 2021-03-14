const initialState = {
    count: 1
};


const reducer  = (state = initialState, action)=>{

    switch (action.type) {
        case "INCR":
            return {
                count: state.count+1
            }
        case "DECR":
            return {
                count: state.count-1
            }
    }



    return state;
};

export default reducer;