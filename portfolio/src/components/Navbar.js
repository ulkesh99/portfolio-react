import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";


const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo....." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#e76f51" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-100} className="nav-link" href="#">about me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="skills" offset={-90} className="nav-link" href="#">skills</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-90} className="nav-link" href="#">portfolio</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contacts" offset={-90} className="nav-link" href="#">contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

)
}

export default Navbar