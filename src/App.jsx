import { useState } from 'react'
// import Home from './components/Home'
import "./index.css";
// import "./global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import SingleReview from "./components/SingleReview";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Service from "./components/Services";
import AboutUs01 from "./components/AboutUs01";
import WorkingProcess from "./components/WorkingProcess";
import AboutUs02 from "./components/AboutUs02";
import Portfolio from "./components/Portfolio";
import ClientLogo from "./components/ClientLogo";
import CTA from "./components/CTA";
import Reviews from './components/Reviews'
import ProfesionalsTeam from "./components/ProfesionalsTeam";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import BlogSection from "./components/BlogSection";
import LogoSection from "./components/LogoSection";

function App() {

  return (
    <>
    {/* <Home/> */}
      <Navbar />
      <Hero />
    {/* <SingleReview/>*/}
    <TestimonialCarousel/>
    <AboutUs01/>
    <WorkingProcess/>
    <Service/>
    <AboutUs02/>
    <Portfolio/>
    <ClientLogo/>
    <CTA/>
    <Reviews/>
    <ProfesionalsTeam/>
    <Pricing/>
    <ContactForm/>
    <BlogSection/>
    <LogoSection/>
    </>

  )
}

export default App
