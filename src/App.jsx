import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ServiceListings from "./pages/ServiceListing";
import Navbar from "./components/Navbar";
import ServicePageTemplate from "./pages/ServicePageTemplate";
import Home from './pages/Home';
import BackToTop from "./components/BacktoTop";
import Footer from "./components/footer";

function App() {
  return (
    <>

    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={< ServiceListings/>} />
        <Route path="/service/:pageId" element={<ServicePageTemplate/>} />
      </Routes>
    </Router>
    <Footer/>
    <BackToTop />
    </>
  );
}

export default App;
