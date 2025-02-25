import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux';
import { store } from './app/store';
import Form from './components/Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Provider store={store}>
        <Form/>
      </Provider>

  )
}

export default App
