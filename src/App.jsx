import { useContext, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Me from './components/Me/Me'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reviews from './components/Reviews/Reviews'
import ContextVariales from './context/contextVariables'

function App() {
  const {callReview} = useContext(ContextVariales)
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <main className="App scrollable">
        <NavBar />
        <Hero />
        <Me />
        <Projects />
        <Contact />
        {callReview && <Reviews />}
      </main>
    </BrowserRouter>
  )
}

export default App
