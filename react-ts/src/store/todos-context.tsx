import React, { useState } from "react";
import { Todo as todoModel } from "../models/todo";

interface contextInitModel {
    items: todoModel[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<contextInitModel>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
});

interface contextProviderProps {
    children: React.ReactNode;
}

export const TodosContextProvider: React.FC<contextProviderProps> = ({
    children,
}) => {
    const [todos, setTodos] = useState<todoModel[]>([]);

    const addTodoHandler = (newTodoText: string) => {
        const newTodo: todoModel = {
            id: Date.now().toString(),
            text: newTodoText,
        };
        setTodos((prev: todoModel[]) => [...prev, newTodo]);
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    };

    const contextValue: contextInitModel = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {children}
        </TodosContext.Provider>
    );
};
