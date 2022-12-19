import "./NavbarStyle.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"

//category is Bars and icon is fa 
import { FaBars, FaTimes } from "react-icons/fa"


//The When we clicked the "Link" it will take us to our home page 
const Navbar = () => {

 //useState allows to have state variables in components
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


  return (
    <div className="header">
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu.active" :
        "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{color: "white"}} /> ) : (
            <FaBars size={20} style={{ color: "white" }} /> )}
                     
        </div>
    </div>
  )
}

export default Navbar;

//FaTimes is for the x icon to close 
// used if else 