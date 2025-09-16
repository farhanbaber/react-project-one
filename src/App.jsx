import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './hero'
import Cards from './cards'
import Footer from './footer' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='navbar'>
        <a href="" id='n'>NDURE.</a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Contact</a>
      </div>
      <Hero />
      <Cards />
      <Footer />
    </>
  )
}

export default App
