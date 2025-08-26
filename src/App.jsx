import { useState } from 'react'
// import Home from './Home'
import "./index.css";
// import "./global.css";
import Navbar from "./components/Home Page/Navbar";
import Hero from "./components/Home Page/Hero";
// import SingleReview from "./SingleReview";
import TestimonialCarousel from "./components/Home Page/TestimonialCarousel";
import Service from "./components/Home Page/Services";
import AboutUs01 from "./components/Home Page/AboutUs01";
import WorkingProcess from "./components/Home Page/WorkingProcess";
import AboutUs02 from "./components/Home Page/AboutUs02";
import Portfolio from "./components/Home Page/Portfolio";
import ClientLogo from "./components/Home Page/ClientLogo";
import CTA from "./components/Home Page/CTA";
import Reviews from './components/Home Page/Reviews'
import ProfesionalsTeam from "./components/Home Page/ProfesionalsTeam";
import Pricing from "./components/Home Page/Pricing";
import ContactForm from "./components/Home Page/ContactForm";
import BlogSection from "./components/Home Page/BlogSection";
import LogoSection from "./components/Home Page/LogoSection";

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
