import React, {useEffect} from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() =>{
    AOS.init({duration: "500"});
  },[]);
  return (
    <div className='footer' data-aos="fade-up">
      <div className="footer-top">
        <div className="footer-top-left">
              <a href="https://www.instagram.com/codeews" target='_blank' data-aos="flip-right"><FaInstagram/></a>
              <a href="https://www.linkedin.com/company/codeews" target='_blank' data-aos="flip-right"><FaLinkedin/></a>
              <a href="https://www.x.com" target='_blank' data-aos="flip-right"><BsTwitterX/></a>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 CodeEra Web Studio. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with U</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
