import React, { useState } from 'react';
import './navbar.css';

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
        <img src="/favicon.ico" alt="Logo" />
      </div>

    {/* right navbar (not left) */}
      <div className="navbar-left">
  <a
    href="https://www.linkedin.com/in/ploynapa-py/"
    target="_blank"
    rel="noopener noreferrer"
    className="tooltip-container"  > 
    <img
      aria-hidden
      src="/assests/lnl.png"
      alt="LinkedIn"
      id="github"
    />
    <span className="tooltip">LinkedIn</span> 
  </a>

  <a
    href="https://github.com/Ploynpk"
    target="_blank"
    rel="noopener noreferrer"
    className="tooltip-container"  > 
    <img
      aria-hidden
      src="/assests/i.png"
      alt="GitHub"
      id="github"
    />
    <span className="tooltip">GitHub</span>
  </a>

  <a 
    href="assests/PloynapaYang(Resume)-2025.pdf" 
    rel="noopener noreferrer"
    className="tooltip-container"  > 
    <img
      aria-hidden="true"
      src="/assests/rebtn.png"
      alt="Resume"
      id="github"
    />
    <span className="tooltip">Resume</span>
  </a>

  <a 
    href="mailto:ploy@ploynapa.com" 
    rel="noopener noreferrer"
    className="tooltip-container"  > 
    <img
      aria-hidden="true"
      src="/assests/mr.png"
      alt="Contact Me"
      id="github"
    />
    <span className="tooltip">Contact Me</span>
  </a>

      </div>
    </nav>
  );
}

export default Navbar;
