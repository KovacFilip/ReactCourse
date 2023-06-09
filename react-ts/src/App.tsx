import { Todos } from "./components/Todos";
import { Todo } from "./models/todo";

function App() {
    const todos: Todo[] = [
        { id: "1", text: "Learn React" },
        { id: "2", text: "Learn TypeScript" },
    ];

    return <Todos items={todos} />;
}

export default App;
