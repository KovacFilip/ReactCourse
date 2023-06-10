import React, { FC } from "react";
import { Todo as todoType } from "../models/todo";
import { Todo } from "./Todo";
import classes from "./Todos.module.css";

interface todosProps {
    items: todoType[];
    removeTodoHandler: (todoId: string) => void;
    children?: React.ReactNode;
}

export const Todos: FC<todosProps> = (props) => {
    return (
        <ul className={classes.ul}>
            {props.items.map((item) => (
                <Todo
                    key={item.id}
                    todo={item}
                    removeTodoHandler={props.removeTodoHandler}
                />
            ))}
        </ul>
    );
};
