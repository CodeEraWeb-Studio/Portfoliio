import React from 'react'
import '../OurWork/OurWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon  from '../../assets/arrow_icon.svg'
import { IoMdArrowForward } from "react-icons/io";
import project_IMG from '../../assets/project-image1.svg'

const OurWork = () => {
  return (
    <div id='work' className='OurWork-Wrapper'>
        <div className="work-leftbox">
        <h2>The projects of our <br /> <span>CodeEra agency</span> </h2>
      {/* <div className='underline'></div> */}

        <div className="project-img">
            <img src={project_IMG} alt="" />
        </div>
        </div>
        <div className="work-rightbox">
      <div className='underline'></div>
        <div className="mywork-container">
          {
            mywork_data.map((work , index)=>{
              return <div key={index} className='project-Wrapper'>
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
          <div className="space"></div>
      </div>
        </div>
    </div>
  )
}

export default OurWork