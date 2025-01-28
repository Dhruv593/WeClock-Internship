import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Form from './components/Form'
import Display from './components/Display'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <Form/>
      <Display/>
    </UserContextProvider>
  )
}

export default App
