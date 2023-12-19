import { useState } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './component/Header/Header'
import Landing from './component/Landing/Landing'
import { useEffect } from 'react'
import Schedule from './component/Schedule/Schedule';
import Pricing from './component/Pricing/Pricing';
import Footer from './component/Footer/Footer'
import Classes from './component/Classes/Classes';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Header />
      <Landing />
      <Schedule />
      <Classes />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
