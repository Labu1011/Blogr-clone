import React from 'react'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import SectionFour from './components/SectionFour'
import SectionThree from './components/SectionThree'
import SectionTwo from './components/SectionTwo'
import './sass/main.scss'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  )
}

export default App
