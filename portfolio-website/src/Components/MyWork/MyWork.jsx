import React, {useEffect} from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon  from '../../assets/arrow_icon.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyWork = () => {

  useEffect(() =>{
    AOS.init({duration: "1000"});
  },[]);

  return (
    <div id='work' className='mywork'>
      <div className="title-box"  data-aos="fade-up">
        <h1>Our latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" data-aos="fade-up" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
