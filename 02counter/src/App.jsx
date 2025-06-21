import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=0;
  // const [counter,setCounter]=useState(10)
  // function increment(){
  //   console.log(counter)
  //   setCounter(counter+1)
  // }
  // function decrement(){
  //   console.log(counter)
  //   setCounter(counter-1)
  // }
  // asignment
  // const [counter,setCounter]=useState(10)
  // function increment(){
  //   counter<20?setCounter(counter+1):console.log("Not allowed to increment more")
  // }
  // function decrement(){
  //   counter>0?setCounter(counter-1):console.log("Not allowed to decrment more")
  // }
  //interview question
  const [counter,setCounter]=useState(10)
  function increment(){
    //increment value by one only due to bundle and fibre thing
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // to make it work use callbacks
    setCounter((prevValue)=> prevValue+1)
    setCounter((prevValue)=> prevValue+1)
    setCounter((prevValue)=> prevValue+1)
    setCounter((prevValue)=> prevValue+1)
  }
  function decrement(){
    setCounter(counter-1)
  }
  return (
    <>
      <div>Counter Project By Vansh</div>
      <div>Value of Counter is : {counter}</div>
      <button onClick={increment}>Value of Counter is : {counter}</button>
      <br/>
      <button onClick={decrement}>Value of Counter is : {counter}</button>
      <footer>Value is {counter}</footer>
    </>
  )
}

export default App
