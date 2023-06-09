import { FC } from "react";
import { Todo as todoType } from "../models/todo";

interface todoProps {
    todo: todoType;
}

export const Todo: FC<todoProps> = ({ todo }) => {
    return <li key={todo.id}>{todo.text}</li>;
};
