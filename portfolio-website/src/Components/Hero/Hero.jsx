import React, {useEffect} from 'react'
import './Hero.css'
import profile_img from '../../assets/comm.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    useEffect(() =>{
      AOS.init({duration: "1000"});
    },[]);
  return (
    <div id='home' className='hero' data-aos="fade-up">
      <h1><span>Your Vision</span>, Our Code</h1>
      <p>Welcome to CodeEra Web Studio, We're a organization from India with 3+ years of experience in Website Design, Custom Websites, Graphic Design and many more.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Us</AnchorLink></div>
        <div className="hero-resume"><AnchorLink className='anchor-link' offset={50} href='#team-about'>About Our Team</AnchorLink></div>
      </div>
      <div className='bt-img-box'>
        <img src={profile_img} alt="" className='bt_img' />
      </div>
    </div>
  )
}

export default Hero
