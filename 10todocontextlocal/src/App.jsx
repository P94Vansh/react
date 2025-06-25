import {TodoForm,TodoItem} from "./components"
import { TodoProvider } from "./contexts"
import { useState,useEffect } from "react"
function App() {
  const [todos,setTodos]=useState([])
  function addTodo(todo){
    setTodos((prev)=> [...prev,{...todo,id:Date.now()}])
  }
  useEffect(()=>{
    const items=JSON.parse(localStorage.getItem('todos'))
    if(items) setTodos(items)
  },[])
  useEffect(()=>{
    if(todos.length>0 && todos){
      localStorage.setItem('todos',JSON.stringify(todos))
    }
  },[todos])
  const updateTodo=(id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id===id?todo:prevTodo)))
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=> prev.filter(prevTodo => (prevTodo.id!==id)))
  }
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                          todos.map((todo)=>(
                            <div key={todo.id}>
                            <TodoItem todo={todo}/>
                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
