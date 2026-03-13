import { useState } from 'react'
import './App.css'
import King from './King'
import KingCareers from './KingCareers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <King/>
      <KingCareers/>
    </>
  )
}

export default App
