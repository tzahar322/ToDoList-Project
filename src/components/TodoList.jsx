import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, toggleComplete }) => {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    removeTodo={removeTodo} 
                    toggleComplete={toggleComplete} 
                />
            ))}
        </ul>
    );
};

export default TodoList;