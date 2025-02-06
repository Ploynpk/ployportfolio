import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  // function to handle link click and set active link
  const handleLinkClick = (e, section) => {
    setActiveLink(section);
  };

  // highlight active section on page load
  useEffect(() => {
    const currentPath = window.location.hash; 
    setActiveLink(currentPath);
  }, []);

  return (
    <nav className="navbar">
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
            href="#about"
            className={activeLink === '#about' ? 'active' : ''}
            onClick={(e) => handleLinkClick(e, '#about')}
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

      <div className="navbar-left">
        <a
          href="https://www.linkedin.com/in/ploynapa-py/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            aria-hidden
            src="/assests/lnl.png"
            alt="LinkedIn"
            height={35}
          />
        </a>

        <a
          href="https://github.com/Ploynpk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            aria-hidden
            src="/assests/i.png"
            alt="GitHub"
            id="github"
          />
        </a>

        <a href="mailto:ploy@ploynapa.com" rel="noopener noreferrer">
          <img
            aria-hidden="true"
            src="/assests/mr.png"
            alt="Contact Me"
            id="github"
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
