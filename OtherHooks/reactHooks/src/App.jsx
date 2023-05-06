import React, { useState } from "react";
import "./App.css";
import useCounter from "./useCounter";


function App() {
  const [counter, increment, decrement, reset] = useCounter(0);

  // const increment = () => setCounter(counter + 1);
  // const decrement = () => setCounter(counter - 1);

  return (
    <>
      <div className="App border">
        <h1>Custome Hook Examples</h1>
        <h2>{counter}</h2>
        <button className="btn" onClick={increment}>
          Increment
        </button>
        <button className="btn" onClick={decrement}>
          Decrement
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
