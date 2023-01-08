import "./WorkCardStyles.css"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"

import React from 'react'




const Work = () => {
  return (
    <div className="work-contaier">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {WorkCardData.map((val, ind) =>{
               return(
                  <WorkCard 
                  key={ind}
                  imgsrc={val.imgscr}
                  title={val.title}
                  text={val.text}
                  view={val.view}
                  source={val.source}
                  /> 
               )
           })}
        </div>
    </div>
  )
}

export default Work