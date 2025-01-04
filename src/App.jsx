import { useState } from 'react'


function App() {
  const [count, setCount] = useState(15)

  const addValue  =() => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  } 
  const removeValue = () => {
    
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Hello React this is {count} </h1>
    <h2>This is a count app: {count}</h2>
    <button
      onClick={addValue}
      >Add value</button> {" "}
      <button
      onClick={removeValue}
      >remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
