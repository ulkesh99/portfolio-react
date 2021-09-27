import React from "react";
import about from "../about.svg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <img className="about-img" src={about} alt="img here...." />
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-header">about me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, a assumenda quod magnam, rerum nulla alias vel velit ut iusto cupiditate perspiciatis, esse totam impedit et excepturi illo harum repellat!
                    Doloremque dolorum accusamus quibusdam pariatur suscipit. Temporibus, placeat quas! Voluptate odit accusantium repudiandae quod, rerum beatae odio minima amet tempore nemo asperiores laboriosam enim non, magnam totam atque a ab!
                    At earum reprehenderit, fugiat blanditiis soluta hic veniam, quibusdam nobis ipsum praesentium esse quaerat illo obcaecati dolore optio odio laborum quam officiis voluptatibus doloremque aliquid consequatur quis ut? Numquam, harum?
                    Esse voluptas eaque cum officiis repudiandae repellendus provident totam, deserunt placeat unde corrupti impedit et officia itaque quod perferendis voluptatem expedita doloremque, accusamus aut labore! Suscipit praesentium tempora corporis porro?
                    Quod aspernatur explicabo voluptates saepe ipsam neque enim quae, dolorem animi fugit repellendus natus possimus repudiandae ratione praesentium sapiente maxime, nemo laboriosam fugiat consectetur. Laboriosam quo sed voluptates vitae dolorem.
                    Error, repellendus natus soluta iure suscipit magnam, voluptatum numquam vitae accusantium libero dolorem. Atque similique non adipisci inventore consectetur culpa tempore. Modi unde tenetur maiores hic aperiam laudantium, consequatur similique?</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
