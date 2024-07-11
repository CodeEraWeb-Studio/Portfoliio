import React from 'react'
import '../Contact2/Contact2.css'
import { BsArrowRight } from "react-icons/bs";

const Contact2 = () => {
  return (
    <div id='contact2' className='Contact2-Wrapper'>

        <div className="contact2-left">
            <h3>Ready to take your website to the next level?</h3>
            <p>Your vision, our expertise – a perfect match, because Your success is our mission.</p>
        </div>

        <div className="contact2-right">
        <button className="contact-submit2">Contact us <BsArrowRight size={25}/>
        </button>
        </div>
    </div>
  )
}

export default Contact2