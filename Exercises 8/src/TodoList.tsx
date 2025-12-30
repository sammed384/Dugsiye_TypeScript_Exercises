import { useState } from "react";

interface Todo {
    id: number;
    task: string;
    done: boolean;
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = () => {
        const newTodo: Todo = {
            id: todos.length + 1,
            task: `New task ${todos.length + 1}`,
            done: false,
        };
        setTodos((prev) => [...prev, newTodo]);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task} {todo.done ? "Done" : "Pending"}
                    </li>
                ))}
            </ul>

            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
};

export default TodoList;
