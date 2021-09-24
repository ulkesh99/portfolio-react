import React from 'react';
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi,I'm Ulkesh</h1>
                <h3>I am a &nbsp; 
                <Typed
                    className="typed-text"
                    strings={["Frontend Developer", "UI/UX Designer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                </h3><br /><br />
                <button type="button" class="btn-resume hover-zoom"><span>resume</span></button>
            
            </div>
            
    </div>
    )
}

export default Header
