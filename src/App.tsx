import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isRervesing, setIsReversing] = useState(false);

  const startRunning = () => {
    
  }

  useEffect(() => {
    const interval = setInterval(() => {
      isRunning ? setCount((prev) => prev + 1) : null;
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="grid w-screen h-screen content-center">
      <p className="flex items-center justify-center text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-mono">
        00:00:00{count}
      </p>
      <div className='flex items-center justify-center h-24'></div>
      <div className='flex items-center justify-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-x-8'>
        <button onClick={()=>setIsRunning(true)}>
          Start
        </button>
        <button onClick={()=>setIsRunning(false)}>
          Stop
        </button>
        <button onClick={()=>setIsReversing(true)}>
          Reverse
        </button>
      </div>
    </div>
  )
}

export default App
