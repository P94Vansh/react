import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <div>I am directly writing in main file</div>
  )
}
// we can't inject it directly because react has written it's own render function
// const reactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click Me To visit google'
// }
// const anotherElement=(
//   <div>I am anotherElement</div>
// )
const anotherUser="vansh"
const reactElement=React.createElement(
  'a',
  {
    'href':'https://google.com',
    'target':'_blank'
  },
  'click me',
  anotherUser
)
createRoot(document.getElementById('root')).render(
    // <MyApp />
    // anotherElement
    reactElement
    // reactElement
    // <App/>
)
