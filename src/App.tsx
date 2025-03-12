import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.tsx';
import Services from './pages/Services.tsx';
import Courses from './pages/Courses.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import ServiceDetail from './pages/ServiceDetail.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsAndConditions from './pages/TermsandConditions.tsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:service" element={<ServiceDetail />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;