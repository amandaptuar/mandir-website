import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import FloatingCall from './components/FloatingCall'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Rooms />
        <Amenities />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCall />
    </>
  )
}

export default App
