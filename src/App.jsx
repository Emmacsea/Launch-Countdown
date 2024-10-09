import { useState } from 'react'
import Launch from './Components/Launch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Launch/>
    </>
  )
}

export default App
