import React from "react";
import './Hero.css';
import newArrival_icon from '../Images/newArrival_icon.png';
import arrow_icon from '../Images/arrow.png';
import hero_image from '../Images/hero_image.jpg';

const Hero = ()=>{
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals only</h2>
                <div>
                    <div className="hero-icon">
                        <p>New</p>
                        <img src={newArrival_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-button">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero;