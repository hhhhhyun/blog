import React, { useState } from 'react';
import './Introduction.css';
import profile_icon from '../images/profile.jpg';
import Activity from './Activity';
import Contact from './Contact';
import Education from './Education';
import Strengths from './Strengths';
import Values from './Values';

function Introduction() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`introduction ${showDetails ? 'show-details' : ''}`}>
      <img src={profile_icon} className="profile_icon" alt="Profile" />
      <div className="intro-text">
        <h1>Ciao,</h1>
        <p>안녕하세요. 프론트엔드 개발자 김현입니다.</p>
        <button onClick={toggleDetails}>Introduce Myself</button>
        {showDetails && (
          <>
            <Education />
            <Activity />
            <Strengths />
            <Values />
            <Contact />
          </>
        )}
      </div>
    </div>
  );
}

export default Introduction;
