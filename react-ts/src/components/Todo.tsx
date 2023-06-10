import { FC } from "react";
import { Todo as todoType } from "../models/todo";
import classes from "./Todo.module.css";

interface todoProps {
    todo: todoType;
    removeTodoHandler: (todoId: string) => void;
}

export const Todo: FC<todoProps> = ({ todo, removeTodoHandler }) => {
    return (
        <li onClick={() => removeTodoHandler(todo.id)} className={classes.li}>
            {todo.text}
        </li>
    );
};
