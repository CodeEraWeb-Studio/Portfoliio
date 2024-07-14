import React, {useEffect} from 'react'
import './Hero.css'
import profile_img from '../../assets/hera3.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

const Hero = () => {

    useEffect(() =>{
      AOS.init({duration: "1000"});
    },[]);
  return (
    <div id='home' className='hero' data-aos="fade-up">
      <h1 className='typing-demo'><span>Your Vision</span>, Our Code</h1>
      <p>Welcome to CodeEra Web Studio, We're a organization from India with 3+ years of experience in Website Design, Custom Websites, Graphic Design and many more.</p>
      <div className="hero-action">
      <AnchorLink className='anchor-link' offset={50} href='#contact2'><div className="hero-connect">Connect With Us <IoIosArrowRoundForward size={30} /></div></AnchorLink>
        <AnchorLink className='anchor-link' offset={50} href='#team-about'><div className="hero-resume">About Our Team <IoIosArrowRoundDown size={25} />
        </div></AnchorLink>
      </div>
      <div className='bt-img-box'>
        <img src={profile_img} alt="" className='bt_img' />
      </div>
    </div>
  )
}

export default Hero
