import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Layout from './Layout'
import './index.css'
import {Home,About,Contact,Github,User} from './components'
import  { fetchData } from './components/Github/Github'
const router=createBrowserRouter([
  {
    path:"/",Component:Layout,
    children:[
      {
        path:"",Component:Home
      },
      {
        path:"about",Component:About
      },
      {
        path:"contact",Component:Contact
      },
      {
        path:"github",Component:Github, loader:fetchData
      },
      {
        path:":id",Component:User
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
