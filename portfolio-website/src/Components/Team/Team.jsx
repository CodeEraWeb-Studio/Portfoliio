import React from 'react';
import { useEffect } from 'react';
import './Team.css';
import '../MyWork/MyWork.css';
import prof from '../../assets/profile_img.svg';
import theme_pattern from '../../assets/theme_pattern.svg';
import lokesh from '../../assets/lokesh.jpg';
import deepak from '../../assets/deepak.jpg';
import neha from '../../assets/neha.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
  useEffect(() =>{
    AOS.init({duration: "1000"});
  },[]);

  const socials = [
    {
      index: 1,
      namee: "Lokesh Singh Mewari",
      img: lokesh,
      ps: "Freelancer",
      insta: "https://www.instagram.com/lokeshmewari11",
      linked: "https://www.linkedin.com/in/ilokeshmewari",
      x: "https://www.twitter.com/ilokeshmewari"
    },
    {
      index: 2,
      namee: "Deepak Negi",
      img: deepak,
      ps: "Freelancer",
      insta: "https://www.instagram.com/deepakthakur_07",
      linked: "https://www.linkedin.com/in/deepak-thakur-85336b170",
      x: "https://www.twitter.com/deepakthakur"
    },
    {
      index: 3,
      namee: "Neha Mewari",
      img: neha,
      ps: "Intern at Moneycontrol.com",
      insta: "https://www.instagram.com/inehamewari",
      linked: "https://www.linkedin.com/in/nehamewarii",
      x: "https://www.twitter.com/inehamewari"
    }
  ];

  return (
    <div id='team-about' className="team">
      <div className='team-box mywork'>
        <div className="title-box" data-aos="fade-up">
          <h1>Our Team</h1>
          <img src={theme_pattern} alt="" />
        </div>
      </div>

      <div className="prsn-hold">
        <div className='prsn'>
          {socials.map(({ index, namee, img, ps, insta, linked, x }) => {
            return (
              <div key={index} className="prsn1 boxer">
                <div className="imgs" data-aos="fade-up">
                  <img src={img} alt={namee} />
                </div>
                <span data-aos="fade-up">{namee}</span>
                <p data-aos="fade-up">{ps}</p>
                <div className="soc-icon" data-aos="fade-up">
                  <a href={insta} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href={linked} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={x} target="_blank" rel="noopener noreferrer">
                    <BsTwitterX />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
