import "./HeroImgStyles.css";

import React from 'react';

import monitorImg from "../assets/monitor.jpeg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="monitor-jpeg" src={monitorImg} alt="monitorImg"/>
        </div>
        <div className="content">
            <p> HeLLO, I'M ARGELINE</p>
            <h1>FULLSTACK DEVELOPER </h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg