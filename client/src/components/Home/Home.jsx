import React from 'react';
import './home.css';

function Intro() {
  return (
    <>
      <div className="intro-container">
        <div className="intro-left">
          {/* profile image */}
          <img
            src="/assests/me.png"
            alt="Your Name"
            className="profile-image"
          />
        </div>
        {/* intro */}
        <div className="intro-right">
          <h1 className="intro-top">
            Building Scalable <br />
            Solutions Through <br />
            <code>Code</code> and <code>Design.</code>
          </h1>
          <p className="intro-summary">
            <span style={{ fontWeight: 'bold', fontSize: '24px' }}>
              Hi, I'm Ploy!{' '}
            </span>{' '}
            Nice to meet you ヅ<br /> I am a full-stack software engineer, I
            specialize in building robust and efficient web applications. I turn
            complex requirements into seamless, user-friendly experiences.
          </p>

          {/* resume and contact container */}
          <div className="resume-contact-container">
            <a href="assests/PloynapaYang(Resume)-2025.pdf" className="resume">
              <button>
                Resume
                <img
                  src="/assests/a.png"
                  alt="Arrow Icon"
                  className="resume-arrow"
                />
              </button>
            </a>

            {/* contact link */}
            <a href="mailto:ploy@ploynapa.com" className="contact">
              Contact
            </a>
          </div>
        </div>
      </div>
      {/* <div className='explore'>
           <p>Explore my work to see how I transform challenges into elegant, user-centric solutions across both <span style={{ fontWeight: 'bold' }}><code>frontend</code></span> and <span style={{ fontWeight: 'bold' }}><code>backend</code></span> technologies.</p>
      </div> */}
    </>
  );
}

export default Intro;
