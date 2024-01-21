import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('');

  const colorUpdate = (e) => {
    setColor(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <h1>Enter the color:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorInput"></label>
        <input
          type="color"
          id="colorInput"
          value={color}
          onChange={colorUpdate}
        />
        <br />
        <br />
        <br />
        <button type='submit'>Set Color</button>
      </form>
    </>
  )
}

export default App
