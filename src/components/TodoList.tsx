import React from 'react';
import TodoItem from './TodoItem';
import { Task } from '../types/task';

interface TodoListProps {
    todos: Task[];
    removeTodo: (id: number) => void;
    toggleComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo, toggleComplete }) => {
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