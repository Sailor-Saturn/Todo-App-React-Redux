import React from 'react';
import PropTypes from 'prop-types';

/**
 * Creating the Todo element, for each todo we a onClick,
 * an boolean to verify if the task is completed and the text of
 * the todo
 *
 */
const Todo = ({onClick, completed, text}) => (
    <li
        onClick = {onClick}
        style = {{
            textDecorations: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};
export default Todo;