import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo....." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#e76f51" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">about me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

)
}

export default Navbar