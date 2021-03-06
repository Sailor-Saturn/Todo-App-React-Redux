import {connect} from 'react-redux';
import {toggleTodo} from '../actions';
import TodoList from '../components/TodoList';
import {VisibilityFilters} from '../actions';
import { decrementCount } from '../actions';

/**
 * Method that filters the todo list
 * @param {*} todos List of the todos
 * @param {*} filter Type of filter applied
 */
const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter:' + filter);
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    decrementTodo: count => dispatch(decrementCount())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)