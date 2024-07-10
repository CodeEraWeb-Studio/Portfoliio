import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/preloader.json';
import './preloader.css'
const Preloader = () => {
  return (
    <div className="preloader">
      <div className="lottie-container">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  )
}

export default Preloader
