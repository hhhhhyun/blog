import React from 'react';
import './Introduction.css';
import profile_icon from '../images/profile.jpg';

function Introduction() {
  return (
    <div className="introduction">
      <img src={profile_icon} className="profile_icon" alt="Profile" />
      <div className="intro-text">
        <h1>Ciao,</h1>
        <p>안녕하세요. 프론트엔드 개발자 김현입니다.</p>
      </div>
    </div>
  );
}

export default Introduction;
