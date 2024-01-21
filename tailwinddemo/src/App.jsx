import { useState } from 'react'
import Cards from './Components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username:"Shantanu Sirohi",
    button:"Visit Profile"
  }

  return (
    <>
      <h1 className='bg-green-200 p-6 rounded-xl text-black'>Tailwind</h1>
      <Cards username="Shantanu Sirohi" button="Visit my profile"/>
    </>
  )
}

export default App
