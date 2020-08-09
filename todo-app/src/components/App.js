import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';


const App = () => (
    <div className = "todo-list">
        <header>My Todo List</header>
        <div className = "main">
            <AddTodo/>
            <VisibleTodoList/>
        </div>
        <footer>
            <Footer/>
        </footer>
    </div>
);

export default App;