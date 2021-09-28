import React from "react";
import stocks from "../stocks.JPG";
import weatherpot from "../weatherpot.JPG";
import cash from "../cash.JPG";


const Portfolio = () => {
    return (
        <div className="container-fluid">
        <div className="portfolio-wrapper">
          
                <h1 className="text-uppercase portfolio-heading text-center py-5">portfolio</h1>


                <div className="portfolio-image-box">
                        <img src={stocks} alt="" className="portfolio-image" />
                </div>

                <div className="portfolio-image-box">
                        <img src={weatherpot} alt="" className="portfolio-image" />
                </div>      

                <div className="portfolio-image-box">
                    <img src={cash} alt="" className="portfolio-image" />
                </div>

                
                <div className="portfolio-image-box">
                    <img src={cash} alt="" className="portfolio-image" />
                </div>


            </div>
        </div>
    )
}

export default Portfolio
