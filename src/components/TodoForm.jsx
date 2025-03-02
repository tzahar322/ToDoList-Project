import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (text) => {
        text.preventDefault();
        if (!inputValue) return;
        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(text) => setInputValue(text.target.value)} 
                placeholder="Добавьте новую задачу" 
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default TodoForm;