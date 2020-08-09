import React from 'react';
import PropTypes from 'prop-types';

/**
 * Creating the Todo element, for each todo we a onClick,
 * an boolean to verify if the task is completed and the text of
 * the todo
 *
 */
const Todo = ({onClick, text}) => (
    <div className="do">
        <input type="checkbox"
            onClick = {onClick}
        />
        <label>
            <span className="label">{text}</span>
        </label>
    </div>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};
export default Todo;