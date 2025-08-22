import { useState } from 'react'
// import './App.css'
// import Home from './components/Home'
import Service from './components/Services'
import SingleReview from './components/SingleReview'
import AboutUs01 from './components/AboutUs01'
import WorkingProcess from './components/WorkingProcess'
import AboutUs02 from './components/AboutUs02'
import Portfolio from './components/Portfolio'
import ClientLogo from './components/ClientLogo'
import CTA from './components/CTA'
// import Testimonials from './components/Testimonials'
import ProfesionalsTeam from './components/ProfesionalsTeam'
import Pricing from './components/Pricing'
import ContactForm from './components/ContactForm'
import BlogSection from './components/BlogSection'
import LogoSection from './components/LogoSection'

function App() {

  return (
    <>
    {/* <Home/> */}
    <SingleReview/>
    <AboutUs01/>
    <WorkingProcess/>
    <Service/>
    <AboutUs02/>
    <Portfolio/>
    <ClientLogo/>
    <CTA/>
    {/* <Testimonials/> */}
    <ProfesionalsTeam/>
    <Pricing/>
    <ContactForm/>
    <BlogSection/>
    <LogoSection/>
    </>

  )
}

export default App
