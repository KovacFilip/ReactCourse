import { FC } from "react";
import { Todo as todoType } from "../models/todo";
import classes from "./Todo.module.css";

interface todoProps {
    todo: todoType;
}

export const Todo: FC<todoProps> = ({ todo }) => {
    return <li className={classes.li}>{todo.text}</li>;
};
