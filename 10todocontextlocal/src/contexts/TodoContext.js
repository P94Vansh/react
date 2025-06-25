import { createContext,useContext } from "react";
export const TodoContext=createContext({
    todos:[{}],
    addTodo:function(todo){},
    updateTodo:function(id,todo){},
    deleteTodo:function(id){}
})
export const TodoProvider=TodoContext.Provider
export const useTodo=()=>{
    return useContext(TodoContext)
}