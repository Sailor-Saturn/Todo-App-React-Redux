import {INCREMENT_TODOS,DECREMENT_TODOS} from '../actions';
const initialState = 0;

function count(state = initialState, action){
    //Possible count: Increment or decrement
    switch(action.type){
        case INCREMENT_TODOS:
            return state + 1

        case DECREMENT_TODOS:
            return state - 1

        default:
            return state;
    }
};

export default count;
