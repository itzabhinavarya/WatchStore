import React from 'react'
import Layout from './structure/Layout'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './aboutus/AboutUs'
import LandingPage from './components/landingpage/LandingPage'
import Services from './services/Services'
import Contact from './contact/Contact'
import Watches from './watches/Watches'
import Details from './watches/Details'
import Payment from './payment/Payment'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/watches/details/:id" element={<Details />} />
        <Route path="/payment" element={<Payment />} />
      </Route>
    </Routes>
  )
}

export default App
