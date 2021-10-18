import React from "react";
import stocks from "../stocks.JPG";
import weatherpot from "../weatherpot.JPG";
import cash from "../cash.JPG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"




const Portfolio = () => {

    //Weather
    const openPopubboxWeather = () => {
        const content = (
            <>
                <img className="portfolio-img-popupbox" src={weatherpot} alt="Weather Report" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat assumenda dignissimos libero quas. Iusto quos eveniet, nesciunt tempore sed corporis reprehenderit vitae, exercitationem eos soluta consequatur, voluptatibus ea repudiandae possimus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus eaque praesentium deleniti ipsa aspernatur ipsum, non dolores maiores vitae numquam aut provident accusantium porro atque dolorum alias sed, illo expedita?</p>
                {/* <b>Github : </b> <a className="hyper-link" onClick={() => window.open("https://github.com/ulkesh99/weather-app")}> https://github.com/ulkesh99/weather-app</a> */}
                <a className="githublink" href="https://github.com/ulkesh99/weather-app">Github</a> 
                <button>Live</button>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigWeather = {
        titleBar: {
            enable: true,
            text: "Weather App"
        },
        fadeIn: true,
        fadeInSpeed: 500

    }


    //Stocks
    const openPopubboxStocks = () => {
        const content = (
            <>
                <img className="portfolio-img-popupbox" src={stocks} alt="Stocks profit/loss" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat assumenda dignissimos libero quas. Iusto quos eveniet, nesciunt tempore sed corporis reprehenderit vitae, exercitationem eos soluta consequatur, voluptatibus ea repudiandae possimus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus eaque praesentium deleniti ipsa aspernatur ipsum, non dolores maiores vitae numquam aut provident accusantium porro atque dolorum alias sed, illo expedita?</p>
                {/* <b>Github : </b> <a className="hyper-link" onClick={() => window.open("https://github.com/ulkesh99/weather-app")}> https://github.com/ulkesh99/weather-app</a> */}
                <a className="githublink" href="https://github.com/ulkesh99/weather-app">Github</a> 
                <button>Live</button>
            </>
        )
        PopupboxManager.open({content})
    }


    
    const popupboxConfigStocks = {
        titleBar: {
            enable: true,
            text: "Stocks Calculate Profit or Loss"
        },
        fadeIn: true,
        fadeInSpeed: 500

    }


    //Cash
    const openPopubboxCash = () => {
        const content = (
            <>
                <img className="portfolio-img-popupbox" src={cash} alt="Cash Manager" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat assumenda dignissimos libero quas. Iusto quos eveniet, nesciunt tempore sed corporis reprehenderit vitae, exercitationem eos soluta consequatur, voluptatibus ea repudiandae possimus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus eaque praesentium deleniti ipsa aspernatur ipsum, non dolores maiores vitae numquam aut provident accusantium porro atque dolorum alias sed, illo expedita?</p>
                {/* <b>Github : </b> <a className="hyper-link" onClick={() => window.open("https://github.com/ulkesh99/weather-app")}> https://github.com/ulkesh99/weather-app</a> */}
                <a className="githublink" href="https://github.com/ulkesh99/weather-app">Github</a> 
                <button>Live</button>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigCash = {
        titleBar: {
            enable: true,
            text: "Cash Manager"
        },
        fadeIn: true,
        fadeInSpeed: 500

    }





    return (
        <div id="portfolio" className="container">
            <h2 className="project-heading">my projects</h2>
                <div className="project-container">
                <div className="portfolio-img-1" onClick={openPopubboxStocks} >
                    <img src={stocks} alt="" className="pimg" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon= {faSearchPlus} />
                </div>

                <div className="portfolio-img-1" onClick={openPopubboxWeather}>
                    <img src={weatherpot} alt="" className="pimg" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon= {faSearchPlus} />
                </div>      

                <div className="portfolio-img-1" onClick={openPopubboxCash}>
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
            <PopupboxContainer {...popupboxConfigWeather} {...popupboxConfigStocks} {...popupboxConfigCash}/>
        </div>
    )
}

export default Portfolio
