import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { incrementCount } from '../actions';

const AddTodo = ({dispatch}) =>{
    let input;
    return (
            <form className="form-inline" onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()){
                    return
                }
                dispatch(addTodo(input.value))
                dispatch(incrementCount())
                input.value = ''
            }}>
                <input  className="w3-input" placeholder="What needs to be done?" ref = {node => input = node} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
    );
};

export default connect()(AddTodo);