
import {ADD_TODO} from '../actions';
import {TOGGLE_TODO} from '../actions';


function todos(state = [], action){
    // Possible filters: AddTodo or ToggleTodo
    switch(action.type){
        case ADD_TODO:
            return [
                // copy the previous state
                ...state,
                // add another todo
                {
                    id: action.id,
                    text: action.text,
                    completed:false
                }
            ];
        case TOGGLE_TODO:
            // From the action you can extract the index and mark the
            return state.map((todo) => {
                if(todo.id === action.id) {
                    // Clone the found element to another object with the reverse completed state
                    return Object.assign({},todo,{
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        default:
            return state;
    }
};
export default todos;