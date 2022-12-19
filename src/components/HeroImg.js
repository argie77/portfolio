import "./HeroImgStyles.css";

import React from 'react';

import twoImg from "../assets/two.jpeg"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="2.jpeg" src={twoImg} alt="twoImg"/>
        </div>
    </div>
  )
}

export default HeroImg