import React, { useState } from 'react'
import './App.css'

function App() {
 const [counter, setCounter] = useState(0);

 const increment = () => setCounter(counter + 1);
 const decrement = () => setCounter(counter - 1);

  return (
    <>
      <div className='App'>
      <h1>useState Hook</h1> 
      <h2 style={{color: "green"}}>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
    
    </>
  )
}

export default App
