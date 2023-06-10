import { FC, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import { Todo } from "./Todo";
import classes from "./Todos.module.css";

export const Todos: FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.ul}>
            {todosCtx.items.map((item) => (
                <Todo
                    key={item.id}
                    todo={item}
                    removeTodoHandler={todosCtx.removeTodo}
                />
            ))}
        </ul>
    );
};
