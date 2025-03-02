import React, { useState } from 'react';

interface TodoFormProps {
    addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!inputValue) return;
        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(event) => setInputValue(event.target.value)} 
                placeholder="Добавьте новую задачу" 
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default TodoForm;