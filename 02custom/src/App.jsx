import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter]=useState(0);

  const addValue = () => {
    if(counter>=20){
      alert("Value Cannot Be More Than 20");
    }else{
      setCounter(counter+1);
    }
  }
  const reduceValue = () => {
    if(counter<=0){
      alert("Value Cannot Be Negative");
    }else{
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Custom App</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={reduceValue}>Reduce Value</button>
    </>
  )
}

export default App
