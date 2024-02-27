import { GET_BY_NAME, GET_DOGS } from "../actions"


let initialState = {allDogs: []}

function rootReducer (state = initialState, action) {
    switch (action.type) {
case GET_DOGS:
return {
    ...state,
    allDogs: action.payload,
    dogsCopy: action.payload,
};
case GET_BY_NAME:
    return {
    ...state,
    allDogs: action.payload,
};
    default:
        return state
    }
}

export default rootReducer;
