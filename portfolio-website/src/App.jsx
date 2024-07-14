import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Team from './Components/Team/Team';
import Preloader from './Components/Preloader/Preloader';
import './Components/Preloader/Preloader.css'
import About from './Components/About/About';
import Contact2 from './Components/Contact2/Contact2';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import OurWork from './Components/OurWork/OurWork';


const App = () => {


  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Preloader />;
  // }

  return (
    <div>
      {/* <OurWork/> */}
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>    


      {/* <Navbar />
      <Hero />
      <MyWork />
      <About/>
      <Team />
      <Contact2/>
      <Footer /> */}
    </div>
  );
};

export default App;
