import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [numAllowed,setNumAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [pass,setPass]=useState('')
  const passRef=useRef(null)
  const passGenerator=useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let p=''
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    for(let i=1;i<=length;i++){
      let random=Math.floor(Math.random()*str.length)
      p+=str[random]
    }
    setPass(p)
  },[numAllowed,charAllowed,length])
  useEffect(()=>{
    passGenerator()
  },[length, numAllowed, charAllowed, passGenerator])
  const copyPass=useCallback(()=>{
    window.navigator.clipboard.writeText(pass)
    passRef.current?.select()
    // passRef.current?.setSelectionRange(0,10)
  },[pass])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            value={pass}
            ref={passRef}
            readOnly
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPass}
        >copy</button>
      </div>
       <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        value={length}
        onChange={(e)=> setLength(e.target.value)}
        min={6}
        max={100}
         className='cursor-pointer'
          />
          <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          onChange={()=> setNumAllowed((prev)=> !prev)}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
       <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              onChange={()=> setCharAllowed((prev)=> !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
