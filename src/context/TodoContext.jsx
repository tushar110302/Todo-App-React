import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Todo Message",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {}
})

export const TodoProvide = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext);
}