import { Task } from "./task";

export type TodoItemProps = {
    todo: Task;
    removeTodo: (id: number) => void;
    toggleComplete: (id: number) => void;
}