import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Task } from '../types/task';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Task[]>([]);

    const addTodo = (text: string) => {
        const newTodo: Task = {
            id: Date.now(),
            text: text,
            completed: false,
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id: number) => {
        setTodos(prevTodos => 
            prevTodos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div>
            <h1>TODO List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
        </div>
    );
};

export default TodoApp;