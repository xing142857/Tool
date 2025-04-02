import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          00:00:00
        </p>
        {/* <div className="w-1/4 aspect-square bg-red-500"></div>
        <div className="w-1/6"></div>
        <div className="w-1/4 aspect-square bg-red-500"></div>
        <div className="w-1/6"></div>
        <div className="w-1/4 aspect-square bg-red-500"></div> */}
      </div>
    </>
  )
}

export default App
