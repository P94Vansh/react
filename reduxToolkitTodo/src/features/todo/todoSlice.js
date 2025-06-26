import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{
        id:nanoid(),
        text:"Hello World"
    }],
    formVal:[{
        text:''
    }]
}
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> (todo.id!==action.payload))
        },
        editTodo:(state,action)=>{
            state.formVal=state.todos.filter(todo => (todo.id===action.payload))
            state.todos=state.todos.filter((todo)=> (todo.id!==action.payload))
        }
    }
})
export const {addTodo,removeTodo,editTodo}=todoSlice.actions
export default todoSlice.reducer