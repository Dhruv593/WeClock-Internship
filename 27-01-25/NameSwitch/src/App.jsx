import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState(true);

  const handleClick = () => {
    setName(!name);
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200'>
      <h1 className='text-4xl font-bold mb-6 text-gray-800'>Name Switcher</h1>
      <button onClick={handleClick} className='bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105'>
        {name ? 'Dhruv' : 'Lad'}
      </button>
    </div>
  )
}

export default App