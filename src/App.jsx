import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Me from './components/Me/Me'
import Projects from './components/Projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App scrollable">
      <NavBar />
      <Hero />
      <Me />
      <Projects />
    </main>
  )
}

export default App
