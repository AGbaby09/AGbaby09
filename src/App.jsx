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
import Talk from './components/Talk/Talk'
import PostReviews from './components/PostReviews/PostReviews'

function App() {
  const {callReview, callTalk} = useContext(ContextVariales)
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <main className="App scrollable">
        {callReview && <Reviews />}
        {callTalk && <Talk />}
        <NavBar />
        <Hero />
        <Me />
        <Projects />
        <Contact />
        <PostReviews />
      </main>
    </BrowserRouter>
  )
}

export default App
