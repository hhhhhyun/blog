import React from 'react';
import './Activity.css';
import lion_icon from '../images/likelion.png';

function Activity() {
  return (
    <div className="activity-container">
      <div className="text-container">
        <h2>Activity</h2>
        <p><span className="bold">2024.03.</span> ~ 한국외국어대학교(서울) 멋쟁이사자처럼 12기 FE</p>
      </div>
      <div className="image-container">
        <img src={lion_icon} className="lion_icon" alt="LikeLion"></img>
      </div>
    </div>
  );
}

export default Activity;