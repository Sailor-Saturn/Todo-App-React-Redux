
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
            return state.map(todo =>
                (todo.id === action.id)? {...todo, completed: !todo.completed}:todo)
        default:
            return state;
    }
};

export default todos;