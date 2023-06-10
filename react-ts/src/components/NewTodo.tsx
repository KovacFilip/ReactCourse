import { useRef } from "react";
import classes from "./NewTodo.module.css";

interface newTodoProps {
    onAddTodo: (newState: string) => void;
}

export const NewTodo: React.FC<newTodoProps> = ({ onAddTodo }) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // TODO: do something
            return;
        }

        onAddTodo(enteredText);
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
