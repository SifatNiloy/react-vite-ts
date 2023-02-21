import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import TimeTracker from './TimeTracker/TimeTracker.js'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App' >
      <TimeTracker/>
        
    </div>
  )
}

export default App
