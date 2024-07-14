import React from 'react'
import '../About/About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    // useEffect(() =>{
    //     AOS.init({duration: "1000"});
    //   },[]);

  return (
    <div id='about' className='about-Warpper' data-aos="fade-up">
        <div className="about-left">
            <h1>
                Exceeding our customers' expectations is important to us
            </h1>
            <p><span>10*</span> Websites</p>
            <p className='para'>*number of sites to have exceeded our clients' expectations</p>
        </div>
        <div className="about-right" >
            <p>Every project we design on <span>CodeEra Web-Studio</span> is a challange for us. We do not only want to deliver an optimized website, but also a positive and rewarding experience for all our clients.</p>
        </div>
    </div>
  )
}

export default About