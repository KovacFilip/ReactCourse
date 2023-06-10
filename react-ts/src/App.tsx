import { useState } from "react";
import classes from "./App.module.css";
import { NewTodo } from "./components/NewTodo";
import { Todos } from "./components/Todos";
import { Todo as todoModel } from "./models/todo";

function App() {
    const [todos, setTodos] = useState<todoModel[]>([]);

    const addTodoHandler = (newTodoText: string) => {
        const newTodo: todoModel = {
            id: Date.now().toString(),
            text: newTodoText,
        };
        setTodos((prev: todoModel[]) => [...prev, newTodo]);
    };

    const removeTodoHandler = (todoId: string) => {
        const newTodos: todoModel[] = todos.filter(
            (todo) => todo.id !== todoId
        );

        setTodos(newTodos);
    };

    return (
        <div className={classes.global}>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} removeTodoHandler={removeTodoHandler} />
        </div>
    );
}

export default App;
