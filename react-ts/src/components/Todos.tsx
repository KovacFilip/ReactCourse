import React, { FC } from "react";
import { Todo as todoType } from "../models/todo";
import { Todo } from "./Todo";

interface todosProps {
    items: todoType[];
    children?: React.ReactNode;
}

export const Todos: FC<todosProps> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <Todo todo={item} />
            ))}
        </ul>
    );
};
