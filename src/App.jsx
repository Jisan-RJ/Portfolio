import React from 'react'
import Header from './components/header/Header'

import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Banner from './components/banner/Banner'

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Skills/>
      <Services/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App