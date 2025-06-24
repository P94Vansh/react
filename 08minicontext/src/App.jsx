import Login from "./components/login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
function App() {

  return (
    <>
      <h2>Learning useContext hook</h2>
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
