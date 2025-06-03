import { useState } from 'react'
import './App.css'


function App() {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter - {counter}</h1>
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <button onClick={() => setCounter((val) => val - 1)}>Decrement</button>
    </>
  )
}

export default App;
