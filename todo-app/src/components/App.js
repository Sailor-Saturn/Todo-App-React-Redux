import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import CountComponent from '../containers/CountComponent';

const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <CountComponent/>
        <Footer/>
    </div>
);

export default App;