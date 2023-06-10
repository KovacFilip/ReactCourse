import { useState } from "react";
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

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} />;
        </div>
    );
}

export default App;
