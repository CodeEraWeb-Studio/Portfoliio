import React from 'react'
import '../Contact2/Contact2.css'
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Contact2 = () => {
  return (
    <div id='contact2' className='Contact2-Wrapper'>

        <div className="contact2-left">
            <h3>Ready to take your website to the next level?</h3>
            <p>Your vision, our expertise – a perfect match, because Your success is our mission.</p>
        </div>

        <div className="contact2-right">
          <Link to="/contact" id='contact-btn2'>
          <button  className="contact-submit2">Contact us <BsArrowRight size={25}/>
        </button>
          </Link>
        
        </div>
    </div>
  )
}

export default Contact2