import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const name = "Prince"

  return (
    <>
      <h1>Hello React this is {name} </h1>
    <h2>This is a count app</h2>
    <button>Add button</button>
    <button>Remove button</button>
    <p>footer: </p>
    </>
  )
}

export default App
