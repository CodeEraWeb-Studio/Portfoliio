import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
// import Services from './Components/Services/Services';
import MyWork from '../MyWork/MyWork';
// import Contact from './Components/Contact/Contact';
import Footer from '../Footer/Footer';
import Team from '../Team/Team';
import Preloader from '../Preloader/Preloader';
import '../Preloader/Preloader.css'
import About from '../About/About';
import Contact2 from '../Contact2/Contact2';
import OurWork from '../OurWork/OurWork';

const LandingPage = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return <Preloader />;
    }

  return (
    <div>
        <Navbar />
      <Hero />
      <About/>
      {/* <MyWork /> */}
      <OurWork/>
      <Team />
      <Contact2/>
      <Footer />
    </div>
  )
}

export default LandingPage