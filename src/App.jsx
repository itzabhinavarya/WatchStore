import React from 'react'
import Layout from './structure/Layout'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './aboutus/AboutUs'
import LandingPage from './components/landingpage/LandingPage'
import Services from './services/Services'
import Contact from './contact/Contact'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
