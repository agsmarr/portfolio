//import { useState } from 'react'
import './App.css'
import Header from './header.tsx'
import Menu from './menu.tsx'
import AboutMe from './aboutMe.tsx'

function App() {

  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    </style>
    <div className = 'app'>
      <div id = 'menu'>
        <Menu></Menu>
      </div>
      <div id = 'bar1'>
      </div>
      <div id = 'header'>
        <Header></Header>
      </div>
      <div className = 'background'>
        <div id = 'bar2'>
        </div>
      </div>
      <div id = 'aboutMe'>
        <AboutMe></AboutMe>
      </div>
    </div>
    </>
  )
}

export default App
