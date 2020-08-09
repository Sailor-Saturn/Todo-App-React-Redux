import {nanoid} from '@reduxjs/toolkit';
/**
 * Types of actions: add a todo, toggle a todo as completed and set a type of visibility filter
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// COUNT_TODOS is reponsible to say how many tasks are active
export const INCREMENT_TODOS = 'INCREMENT_TODOS';
export const DECREMENT_TODOS = 'DECREMENT_TODOS';

/**
 * Types of visibility filters: Show every todo, show only completed, show only active todos
 * This is a enum, it's easier to
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/**
 * Action creator for the addtodo, to add a task it's only necessary to add the text of the todo
 */
export function addTodo(text){
    return {
        type: ADD_TODO,
        id: nanoid(),
        text
    }
}

/**
 * Action creator for the toggleTodo, to toggle a todo, it's only necessary to indicate the index of the todo
 */
export function toggleTodo(id){
    return {
        type: TOGGLE_TODO,
        id
    }
}

/**
 * Action creator for the setVisibilityFilter, for this is only necessary to pass the type of visibility filter from the enum stated above
 */
export function setVisibilityFilter(filter){
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

/**
 * Action creator for the counter of tasks
 *
 */
export function incrementCount(){
    return {
        type: INCREMENT_TODOS,
        count: 0
    }
}

/**
 * Action creator for the counter of tasks
 *
 */
export function decrementCount(){
    return {
        type: DECREMENT_TODOS,
        count: 0
    }
}