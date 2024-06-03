import React from 'react';
import './Education.css';
import univ_icon from '../images/univ.gif';

function Education() {
  return (
    <div className="education-container">
      <div className="text-container">
        <h2>한국외국어대학교 재학</h2>
        <p><span className="bold">1st Major</span> Diparmento di Italianistica</p>
        <p><span className="bold">2nd Major</span> AI융합전공(Software&AI)</p>
      </div>
      <div className="image-container">
        <img src={univ_icon} className="univ_icon" alt="Univ"></img>
      </div>
    </div>
  );
}

export default Education;