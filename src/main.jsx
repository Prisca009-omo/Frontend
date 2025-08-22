import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppNavbar from "./App.js";
import TestimonialCarousel from "./TestimonialCarousel.js";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AppNavbar/>
    <TestimonialCarousel/>
  </StrictMode>,
)
