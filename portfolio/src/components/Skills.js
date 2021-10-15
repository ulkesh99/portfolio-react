import React from 'react';
import 'animate.css';

const Skills = () => {
    return (
        <div className=" animate__animated animate__zoomInDown skills-container ">
      <h2 className="skills-heading">my skills</h2>
      <div className="skills-flex-container">
  
      <div className="animate__animated animate__zoomInDown skills-wrapper">
        <div className="skills-logo">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt=""></img>
        </div>
        <div className="skills-name">
            <h2>JavaScript</h2>
        </div>
      </div>

      <div className="animate__animated animate__zoomInDown skills-wrapper">
        <div className="skills-logo">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt=""></img>
        </div>
        <div className="skills-name">
          <h2>React</h2>
        </div>
      </div>

      <div className="animate__animated animate__zoomInDown skills-wrapper">
        <div className="skills-logo">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt=""></img>
        </div>
        <div className="skills-name">
          <h2>Figma</h2>
        </div>
      </div>

      <div className="animate__animated animate__zoomInDown skills-wrapper">
        <div className="skills-logo">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt=""></img>
        </div>
        <div className="skills-name">
          <h2>MySQL</h2>
        </div>
      </div>
      </div>
  </div>

      
    )
}

export default Skills
