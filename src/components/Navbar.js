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
    </div>
  )
}

export default Navbar;