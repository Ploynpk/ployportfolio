import React, { useState } from 'react';
import './navbar.css';
import linkedinIcon from "../../assets/images/lnl.png";
import githubIcon from "../../assets/images/github.png";
import resumeIcon from "../../assets/images/docs.png";
import contactIcon from "../../assets/images/mb1.png";
import logo from "../../assets/images/logo.png";
import resume from "../../assets/images/PloynapaYang(Resume)-2025.pdf";

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  // function to handle link click and set active link
  const handleLinkClick = (e, section) => {
    setActiveLink(section);
  };

  return (
    <nav className="navbar">
      {/* left navbar (not right) */}
      <div className="navbar-right">
        <p>
          <a
            href="#home"
            className={activeLink === '#home' ? 'active' : ''}
            onClick={(e) => handleLinkClick(e, '#home')}
          >
            Home
          </a>
          <a
            href="#aboutme"
            className={activeLink === '#aboutme' ? 'active' : ''}
            onClick={(e) => handleLinkClick(e, '#aboutme')}
          >
            About
          </a>
          <a
            href="#projects"
            className={activeLink === '#projects' ? 'active' : ''}
            onClick={(e) => handleLinkClick(e, '#projects')}
          >
            Projects
          </a>
          <a
            href="#chat"
            className={activeLink === '#chat' ? 'active' : ''}
            onClick={(e) => handleLinkClick(e, '#chat')}
          >
            Chat with me
          </a>
        </p>
      </div>

      <div className="navbar-mid">
        <img src={logo} alt="Logo" style={{borderRadius: '50%'}}/>
      </div>

      {/* right navbar (not left) */}
      <div className="navbar-left">
        <a
          href="https://www.linkedin.com/in/ploynapa-py/"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip-container"
        >
          <img
            aria-hidden
            src={linkedinIcon}
            alt="LinkedIn"
            // id="github"
            width={40}
          />
          <span className="tooltip">LinkedIn</span>
        </a>

        <a
          href="https://github.com/Ploynpk"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip-container"
        >
          <img
            aria-hidden
            src={githubIcon}
            alt="GitHub"
            // id="github"
            width={40}
          />
          <span className="tooltip">GitHub</span>
        </a>

        <a
          href={resume}
          rel="noopener noreferrer"
          className="tooltip-container"
        >
          <img
            aria-hidden="true"
            src={resumeIcon}
            alt="Resume"
            // id="github"
            width={38}
          />
          <span className="tooltip">Resume</span>
        </a>

        <a
          href="mailto:ploy@ploynapa.com"
          rel="noopener noreferrer"
          className="tooltip-container"
        >
          <img
            aria-hidden="true"
            src={contactIcon}
            alt="Contact Me"
            id="github1"
          />
          <span className="tooltip">Contact Me</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
