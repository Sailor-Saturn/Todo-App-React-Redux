import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';
import count from './countTodos';

const todoApp = combineReducers({
    count,
    visibilityFilter,
    todos
});

// Using the combine reducer is the equivalent of:
//function todoApp(state = {}, action) {
// return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

export default todoApp;