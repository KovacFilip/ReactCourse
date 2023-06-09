import React, { FC } from "react";
import { Todo } from "../models/todo";

interface todosProps {
    items: Todo[];
    children?: React.ReactNode;
}

export const Todos: FC<todosProps> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
};
