import { useState,useEffect } from "react"
import { ThemeProvider } from "./context/ThemeSwither"
import Card from "./components/Card"
import ThemeBtn from "./components/ThemeBtn"
function App() {
  const [themeMode,setThemeMode]=useState('light')
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  const darktheme=()=>{
    setThemeMode("dark")
  }
  const lighttheme=()=>{
    setThemeMode('light')
  }
  return (
    <>
      <ThemeProvider value={{themeMode,darktheme,lighttheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
