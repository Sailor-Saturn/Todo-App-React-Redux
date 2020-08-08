import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos'

const todoApp = combineReducers({
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