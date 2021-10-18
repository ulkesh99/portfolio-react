import React from "react";
import about from "../about.svg";

const AboutMe = () => {
return (
<div id="about" className="about-container">
    <div className="about-img">
                <img className="profile-img" src={about} alt="img here...." />
            </div>
            <div className="about-content">
                <h1 className="about-header">about me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, a assumenda quod magnam,
                    rerum nulla alias vel velit ut iusto cupiditate perspiciatis, esse totam impedit et excepturi illo
                    harum repellat!
                    Doloremque dolorum accusamus quibusdam pariatur suscipit. Temporibus, placeat quas! Voluptate odit
                    accusantium repudiandae quod, rerum beatae odio minima amet tempore nemo asperiores laboriosam enim
                    non, magnam totam atque a ab!
                    At earum reprehenderit, fugiat blanditiis soluta hic veniam, quibusdam nobis ipsum praesentium esse
                    quaerat illo obcaecati dolore optio odio laborum quam officiis voluptatibus doloremque aliquid
                    consequatur quis ut? Numquam, harum?
                   </p>
            </div>
        </div>
)
}

export default AboutMe