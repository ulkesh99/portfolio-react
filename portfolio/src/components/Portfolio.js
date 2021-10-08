import React from "react";
import stocks from "../stocks.JPG";
import weatherpot from "../weatherpot.JPG";
import cash from "../cash.JPG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';




const Portfolio = () => {
    return (
        <div className="container">
            <h2 className="project-heading">my projects</h2>
                <div className="project-container">
                <div className="portfolio-img-1">
                    <img src={stocks} alt="" className="pimg" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon= {faSearchPlus} />
                </div>

                <div className="portfolio-img-1">
                    <img src={weatherpot} alt="" className="pimg" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon= {faSearchPlus} />
                </div>      

                <div className="portfolio-img-1">
                    <img src={cash} alt="" className="pimg" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon= {faSearchPlus} />
                </div>

                
                <div className="portfolio-img-1">
                    <img src={cash} alt="" className="pimg" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon= {faSearchPlus} />
                </div>


            </div>
        </div>
    )
}

export default Portfolio
