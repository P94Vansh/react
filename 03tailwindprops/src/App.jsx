import Card from './components/Card'
import './App.css'

function App() {
  const arr=[1,2,3,4]
  const obj={
    name: "Vansh Gambhir",
    age: 20,
    city: "Delhi"
  }
  return (
    <>
    {/* <h1 className="text-3xl font-bold underline text-center my-4">Hello World</h1> */}
      <Card title="Vansh Gambhir" arr={arr} obj={obj}/>
    </>
  )
}

export default App
