import React, { useState, useEffect } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() =>{
    AOS.init({duration: "1000"});
  },[]);

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "b0f67239-dc2a-4b53-9a30-11c2350a2b1a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    setIsSubmitting(false);
    if (res.success) {
      console.log("Success", res);
      setFormValues({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 1500); // Hide success message after 3 seconds
    } else {
      console.error("Error", res);
    }
  };

  return (
    <div id='contact' className='contact' >
      {(isSubmitting || isSubmitted) && (
        <div className="progress-container">
          {isSubmitting && <p className="progress-message">Progress...</p>}
          {isSubmitted && <p className="success-message">Successfully sent!</p>}
          <div className="progress-bar">
            <div className="progress-bar-inner" style={{ width: isSubmitting ? '100%' : '0%' }}></div>
          </div>
        </div>
      )}
      <div className="title-box" data-aos="fade-up">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left" data-aos="fade-up">
            <h1>Let's talk</h1>
            <p>We're currently available to take on new projects, so feel free to send us a message about anything that you want us to work on. You can contact us anytime.</p>
            <div className="contact-details">
                <div className="contact-detail" data-aos="fade-up">
                    <img src={mail_icon} alt="" /> <p>codeeraws@yahoo.com</p>
                </div>
                <div className="contact-detail" data-aos="fade-up">
                    <img src={call_icon} alt="" /> <p>+91 6397123694, +91 7252058269</p>
                </div>
                <div className="contact-detail" data-aos="fade-up">
                    <img src={location_icon} alt="" /> <p>Haldwani - 263139, India</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name" data-aos="fade-up">Your Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder='Enter your name' 
              name='name' 
              value={formValues.name} 
              onChange={handleChange}
              data-aos="fade-up"
            />
            <label htmlFor="email" data-aos="fade-up">Your Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder='Enter your email' 
              name='email' 
              value={formValues.email} 
              onChange={handleChange}
              data-aos="fade-up" 
            />
            <label htmlFor="message" data-aos="fade-up">Write your message here</label>
            <textarea 
              name="message" 
              id="message" 
              rows="8" 
              placeholder='Enter your message' 
              value={formValues.message} 
              onChange={handleChange} 
              data-aos="fade-up"
            ></textarea>
            <button type='submit' className="contact-submit" data-aos="fade-up">Submit Now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
