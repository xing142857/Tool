import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="grid w-screen h-screen content-center">
      <p className="flex items-center justify-center text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-mono">
        00:00:00{count}
      </p>
      <div className='flex items-center justify-center h-24'></div>
      <div className='flex items-center justify-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
        <button>
          Start
        </button>
        <div className="w-1/6"></div>
        <button>
          Stop
        </button>
        <div className="w-1/6"></div>
        <button>
          Reverse
        </button>
      </div>
    </div>
  )
}

export default App
