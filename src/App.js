import React, { useEffect } from 'react';
import './js/App.css'; // Your main CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';  // This line is for AOS library CSS (if installed via npm or yarn)
import './aos.css';  // Link to your custom AOS CSS in the public folder

import Header from './js/header';
import HeroSection from './js/herosection';
import AboutSection from './js/about';
import StatsSection from './js/stats';
import ServicesSection from './js/services';
import AppointmentSection from './js/appointments';
// import Departments from './js/departments';
import DoctorsSection from './js/doctors';
// import Gallery from './js/gallery';
// import Contact from './js/contacts';
import Footer from './js/footer';
import FaqSection from './js/faq';
import Contact from './js/contacts';

function App() {
  useEffect(() => {
    // Initialize AOS once when the component mounts
    AOS.init({
      duration: 1000, // Adjust the animation duration
      once: true, // Ensures that animations happen only once
    });

    // Optional: Refresh AOS if content dynamically changes
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <AppointmentSection />
      {/* <Departments /> */}
      <DoctorsSection />
      {/* <Gallery /> */}
      <Contact/>
      <FaqSection />
      <Footer />

    </div>
  );
}

export default App;
