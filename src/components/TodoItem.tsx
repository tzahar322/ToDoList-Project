import React from 'react';
import { Task } from '../types/task';

interface TodoItemProps {
    todo: Task;
    removeTodo: (id: number) => void;
    toggleComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo, toggleComplete }) => {

    const ItemStyles = todo.completed ? 'line-through' : 'none';

    return (
        <li className='todo-item'>
            <span style={{ textDecoration: ItemStyles }}>{todo.text}</span>
            <button className='complete-btn' onClick={() => toggleComplete(todo.id)}>Выполнено</button>
            <button className='delete-btn' onClick={() => removeTodo(todo.id)}>Удалить</button>
        </li>
    );
};

export default TodoItem;