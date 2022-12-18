import "./NavbarStyle.css"

import React from 'react'
import { Link } from "react-router-dom"


//The When we clicked the "Link" it will take us to our home page 
const Navbar = () => {
  return (
    <div className="header">
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul>
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
    </div>
  )
}

export default Navbar;