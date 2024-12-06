import React from "react";
import { Link } from "react-router-dom";
import Image from '../images/main_header.png'


function MainHeader() {
  return (
    <header className="main_header">
      <div className="container main_container">
        <div className="main_header_left">
          <h4>#90DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Physically exercises are great for our muscles, heart, and lungs.
            Some more advantages of the physical activities are; it builds our
            bones strong, saves us from obesity by promoting a healthy weight,
            saves us from diabetes, helps us to build healthy habits, keeps us
            away from cancer, prevents high blood pressure, and other major
            problems. Thus, through regular exercises and healthy food in timely
            manner, we can easily maintain our health and fitness.
          </p>
           <Link to ="/plans" className="btn">Get Started</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="header image" />
          </div>
        </div>

      </div>

    </header>
  );
}

export default MainHeader;
