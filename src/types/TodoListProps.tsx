import { Task } from "./task";

export type TodoListProps = {
    todos: Task[];
    removeTodo: (id: number) => void;
    toggleComplete: (id: number) => void;
}