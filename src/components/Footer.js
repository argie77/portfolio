import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa"

//below are components
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                   <FaHome size={20} style={{
                     color: "black", marginRight: "2rem" }} /> 
                    New York, New York
                    <div>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{
                     color: "black", marginRight: "2rem" }} /> 
                     +1 (347-748-3442)</h4>        
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{
                     color: "black", marginRight: "2rem" }} /> 
                     ALEUTERIO97@GMAIL.COM</h4>        
                </div>
            </div>
            
            <div className="right">
                <h4>About me</h4>
                <p>passionate software developer who is continuously 
                learning and growing. 
                I know the importance of writing highly readable and 
                maintainable code and I strive to learn new technologies 
                and continually improve.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer