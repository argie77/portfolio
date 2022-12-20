import "./HeroImgStyles.css";

import React from 'react';

import animeImg from "../assets/anime.jpeg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="anime-jpeg" src={animeImg} alt="animeImg"/>
        </div>
        <div className="content">
            <p> Hello! I'm a Software Engineer</p>
            <h1>My name is Argeline</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg