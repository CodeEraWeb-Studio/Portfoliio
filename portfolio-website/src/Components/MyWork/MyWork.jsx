import React, {useEffect} from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon  from '../../assets/arrow_icon.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../assets/project_1.svg'
import { IoMdArrowForward } from "react-icons/io";


const MyWork = () => {

  useEffect(() =>{
    AOS.init({duration: "1000"});
  },[]);

  return (
    <div id='work' className='mywork'>
      <div className="title-box-work"  data-aos="fade-up">
        <h2>The projects of our <span>CodeEra agency</span> </h2>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className='underline'></div>
      <div className="mywork-container">
          {
            mywork_data.map((work , index)=>{
              return <div className='project-Wrapper' data-aos="fade-up">
              <div className="project-image">
                <img src={work.w_img} alt="error" />
              </div>
                <h3>{work.w_title}</h3>
                <div className="tool-wrapper">
                  {
                    work.w_tool.map((t , i)=>{
                      return <div key={i.t_id} className="tool">
                        {t.t_name}
                      </div>
                    })
                  }
                </div>
                <button className='tool-btn'> See the case study <IoMdArrowForward size={23}/>
                </button>
           </div>
            })
          }
        
        {/* {mywork_data.map((work,index)=>{
            return
        })} */}
        {/* <img key={index} src={work.w_img} alt="" data-aos="fade-up" /> */}
      </div>
      <div className="mywork-showmore" data-aos="fade-up">
        <p>Show More</p>
        <img src={arrow_icon} alt="Error" />
      </div>
    </div>
  )
}

export default MyWork
