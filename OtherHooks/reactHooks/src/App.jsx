import React, { useState } from "react";
import "./App.css";

import ScreenComponent from './ScreenComponent';


function App() {
  

  // const increment = () => setCounter(counter + 1);
  // const decrement = () => setCounter(counter - 1);

  return (
    <>
      <div className="App border">
        <h2>Custome Hook Examples</h2>
        <ScreenComponent />
      </div>
    </>
  );
}

export default App;
