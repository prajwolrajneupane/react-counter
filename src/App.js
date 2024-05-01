import React, { useState } from 'react';
import './App.css';
function App() {

  const [value,changeValue]=useState(0);


  function increment(){
changeValue(value+1)
  }


  function decrement(){
  if(value!=0)
    changeValue(value-1)

  }
  return (
    <div>
    <p>counter:</p>
    <span><button onClick={increment}>+</button></span>
    <span >{value}</span>
    <span><button onClick={decrement}>-</button></span>

    </div>
  )
}

export default App
