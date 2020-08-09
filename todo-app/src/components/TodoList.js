import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

/**
 *
 * The component Todo List, lists the todos based on a filter
 * Todo List needs the todos and the ToggleTodo reducer
 */
const TodoList = ({todos, toggleTodo, decrementTodo}) => (
    <div>
        {todos.map(todo =>
            <Todo
                key = {todo.id}
                {...todo}
                onClick={() =>{
                    toggleTodo(todo.id)
                    decrementTodo()
                }}
            />
        )}
    </div>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    decrementTodo: PropTypes.func.isRequired
};

export default TodoList;