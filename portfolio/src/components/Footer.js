import React from 'react';
import twitter from '../twitter.svg';
import linkedin from '../linkedin.svg';
import github from '../github.svg';
import instagram from '../instagram.svg';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
            <p>©|2021|Ulkesh Chendwankar</p>
            <ul>
                <li><a href="https://www.linkedin.com/in/ulkesh-chendwankar-66a215116/"><img src={linkedin} alt="" /></a></li>
                <li><a href="https://github.com/ulkesh99"><img src={github} alt="" /></a></li>
                <li><a href="https://twitter.com/UChendwankar"><img src={twitter} alt="" /></a></li>
                <li><a href="https://www.instagram.com/ulkesh_chendwankar/"><img src={instagram} alt="" /></a></li>
            </ul>
            </div>
        </div>
    )
}

export default Footer
 

// <div className="footer-items">
//                 <img src={twitter} alt="" />
//             </div>

//             <div className="footer-items">
//                 <img src={linkedin} alt="" />
//             </div>

//             <div className="footer-items">
//                 <img src={github} alt="" />
//             </div>

//             <div className="footer-items">
//                 <img src={instagram} alt="" />
//             </div>