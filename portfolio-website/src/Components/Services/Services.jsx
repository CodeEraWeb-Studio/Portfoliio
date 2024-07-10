import React, {useEffect} from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  
    useEffect(() =>{
      AOS.init({duration: "1000"});
    },[]);

  return (
    <div id='services' className='services'>
      <div className="title-box"  data-aos="fade-up">
        <h1>Services We Offer</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container" >
        {Services_Data.map((service,index)=>{
          return <div key={index} className='services-format' data-aos="fade-up">
             <h3>{service.s_no}</h3>
             <h2>{service.s_name}</h2>
             <p>{service.s_desc}</p>
             <div className='services-readmore'>
              <p>Read More</p>
              <img src={arrow_icon} alt="" />
             </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services
