// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import BlogPost from './pages/Blog/[slug]'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/blog/:slug" element={<MainLayout><BlogPost /></MainLayout>} />
      </Routes>
    </Router>
  )
}
