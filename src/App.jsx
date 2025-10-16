import React from 'react'
import About from './components/About/About.jsx'
import Hero from './components/Hero/Hero.jsx'
import MyWork from './components/MyWork/MyWork.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
    </div>
  )
}

export default App