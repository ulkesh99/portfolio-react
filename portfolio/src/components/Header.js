import React from 'react';
import Typed from "react-typed";


const Header = () => {
return (
<div className="banner-container">
        <div className="banner-heading">
            <h1 className="main-heading">Hi,I'm Ulkesh</h1>
            <p className="sub-heading">I am a &nbsp;
                <Typed className="typed-text" strings={["Frontend Developer", "UI/UX Designer" ]} typeSpeed={40}
                    backSpeed={60} loop />
            </p><br /><br />
        </div>
</div>)
}

export default Header