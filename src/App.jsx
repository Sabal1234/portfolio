import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import MyWork from './components/MyWork/MyWork.jsx'

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