import React from "react";
import stocks from "../stocks.JPG";
import weatherpot from "../weatherpot.JPG";
import cash from "../cash.JPG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';




const Portfolio = () => {
    return (
        <div className="container-fluid">
            <h1 className="text-uppercase portfolio-heading text-center py-5">portfolio</h1>
            <div className="portfolio-wrapper">
                <div className="portfolio-image-box">
                    <img src={stocks} alt="" className="portfolio-image" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon= {faSearchPlus} />
                </div>

                <div className="portfolio-image-box">
                    <img src={weatherpot} alt="" className="portfolio-image" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon= {faSearchPlus} />
                </div>      

                <div className="portfolio-image-box">
                    <img src={cash} alt="" className="portfolio-image" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon= {faSearchPlus} />
                </div>

                
                <div className="portfolio-image-box">
                    <img src={cash} alt="" className="portfolio-image" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon= {faSearchPlus} />
                </div>


            </div>
        </div>
    )
}

export default Portfolio
