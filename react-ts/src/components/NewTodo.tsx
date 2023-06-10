import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

export const NewTodo: React.FC = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const todosCtx = useContext(TodosContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // TODO: do something
            return;
        }

        todosCtx.addTodo(enteredText);
        todoTextInputRef.current!.value = "";
    };

    return (
        <form onSubmit={submitHandler}>
            <label className={classes.label} htmlFor="text">
                New Todo:
            </label>
            <input
                className={classes.input}
                type="text"
                id="text"
                ref={todoTextInputRef}
            />
            <button className={classes.button}>Add Todo</button>
        </form>
    );
};
