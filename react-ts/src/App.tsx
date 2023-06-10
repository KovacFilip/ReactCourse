import classes from "./App.module.css";
import { NewTodo } from "./components/NewTodo";
import { Todos } from "./components/Todos";
import { TodosContextProvider } from "./store/todos-context";

function App() {
    return (
        <div className={classes.global}>
            <TodosContextProvider>
                <NewTodo />
                <Todos />
            </TodosContextProvider>
        </div>
    );
}

export default App;
