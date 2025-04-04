import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isRervesing, setIsReversing] = useState(false);

  const startRunning = () => {
    setIsRunning(true);
    setIsReversing(false);
  }

  const startReversing = () => {
    setIsRunning(true);
    setIsReversing(true);
  }

  const translateClock = (n: number) => {
    let output = "";
    if (n < 0) {
      n = Math.abs(n)
      output += "-"
    }
    output += (Math.floor(n / 3600) < 10 ? "0" : "") + Math.floor(n / 3600);
    output += ":";
    output += (Math.floor(n / 60 % 60) < 10 ? "0" : "") + Math.floor(n / 60 % 60);
    output += ":";
    output += (n % 60 < 10 ? "0" : "") + (n % 60);
    return output
  }

  useEffect(() => {
    const interval = setInterval(() => {
      isRunning ? isRervesing ? setCount(prev => prev - 1) : setCount(prev => prev + 1) : null;
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, isRervesing]);

  return (
    <div className="grid w-screen h-screen content-center font-mono">
      <p className="flex items-center justify-center text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        {translateClock(count)}
      </p>
      <div className='flex items-center justify-center h-24'></div>
      <div className='flex items-center justify-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-x-8'>
        <button onClick={startRunning}>
          <p className='font-bold'>Start</p>
        </button>
        <button onClick={()=>setIsRunning(false)}>
          <p className='font-bold'>Stop</p>
        </button>
        <button onClick={startReversing}>
          <p className='font-bold'>Reverse</p>
        </button>
      </div>
    </div>
  )
}

export default App
