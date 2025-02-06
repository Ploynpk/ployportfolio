import React from 'react';
import './intro.css';


function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-left">
        {/* profile image */}
        <img src="/assests/me.png" alt="Your Name" className="profile-image" />
      </div>

      <div className="intro-right">
        <h1 className="intro-top">
          Building Scalable <br />Solutions Through <br /><code>Code</code> and <code>Design.</code>      
        </h1>
        <p className="intro-summary">
          As a full-stack software engineer, I specialize in building robust <br />and efficient web applications. I turn complex requirements into <br />seamless, user-friendly experiences.
        </p>

        {/* resume Button */}
        {/* resume and contact container */}
<div className="resume-contact-container">
  <a href="assests/PloynapaYang(Resume)-2025.pdf" className="resume">
    <button>
      Resume
      <img src="/assests/a.png" alt="Arrow Icon" className="resume-arrow" />
    </button>
  </a>


        {/* contact link */}
        <a href="mailto:ploy@ploynapa.com" className="contact">Contact Me</a>
        </div>
        {/* <p>Explore my work to see how I transform challenges into elegant, user-centric solutions <br />across both frontend and backend technologies.</p> */}

      </div>
    </div>
  );
}

export default Intro;
