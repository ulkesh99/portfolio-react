import React from 'react'

const Skills = () => {
    return (
        <div className="skills">
            <h1 className="skills-heading py-5">my skills</h1>
            <div className="container-fluid">
                <div className="lang">
                 <div className="row">
                        <div className="lang col-md-3 col-sm-6">
                            <div className="box">
                            <img class="skills-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                                <h3>JavaScript</h3>
                            </div>
                        </div>

                        <div className="lang col-md-3 col-sm-6">
                            <div className="box">
                            <img class="skills-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                <h3>React</h3>
                            </div>
                        </div>

                        <div className="lang col-md-3 col-sm-6">
                            <div className="box"><img class="skills-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                                <h3>MySQL</h3>
                            </div>
                        </div>

                        <div className="lang col-md-3 col-sm-6">
                            <div className="box">
                            <img class="skills-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />

                                <h3>Figma</h3>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default Skills