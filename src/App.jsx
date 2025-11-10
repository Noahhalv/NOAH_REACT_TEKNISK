import './App.css'
import { useState } from "react"
import MyButton from './Components/Count'

function App() {
const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1);
    }
  return (
    <>
      <MyButton onClick={handleClick} count={count} />
      <MyButton onClick={handleClick} count={count} />
      <MyButton onClick={handleClick} count={count} />
    </>
  )
}

export default App