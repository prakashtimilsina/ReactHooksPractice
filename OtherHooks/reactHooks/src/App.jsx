import React, { useState } from 'react'
import './App.css'

function App() {
 const [counter, setCounter] = useState(0);

 const increment = () => setCounter(counter + 1);
 const decrement = () => setCounter(counter - 1);

  return (
    <>
      <div className='App border'>
      <h1>Custome Hook Examples</h1> 
      <h2 style={{color: "green"}}>{counter}</h2>
      <button className="btn" onClick={increment}>Increment</button>
      <button className="btn" onClick={decrement}>Decrement</button>
      </div>
    
    </>
  )
}

export default App
