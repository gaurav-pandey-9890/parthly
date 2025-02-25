import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Works from './components/Works'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Works />
      <Features/>
      <FAQ/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App