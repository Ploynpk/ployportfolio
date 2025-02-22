import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import linkedinIcon from '../../assets/images/lnl.png';
import githubIcon from '../../assets/images/github.png';
import resumeIcon from '../../assets/images/docs.png';
import contactIcon from '../../assets/images/mb1.png';
import logo from '../../assets/images/logo.png';
import resume from '../../assets/images/PloynapaYang(Resume)-2025.pdf';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [isVisible, setIsVisible] = useState(true); // state for navbar visibility
  const timeoutRef = useRef(null); // store timeout in useRef to preserve it

  // detect current section , dynamic navbar active
  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar immediately when scrolling
      setIsVisible(false);

      // Clear the previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set timeout to show navbar after scrolling stops
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true); // Show navbar after scrolling stops
      }, 500); // 0.5 seconds of idle time to detect scrolling stop

      // initialize all the navbar menu
      const sections = ['home', 'about', 'projects', 'ploybot'];
      let currentSection = '';

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            // reassign the current section
            currentSection = `#${section}`;
            break;
          }
        }
      }
      setActiveLink(currentSection);
    };

    // add event listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run it once for initial section detection

    // remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className="navbar">
      
      {/* Left Navbar */}
      <div className="navbar-right">
        <p>
          {['home', 'about', 'projects', 'ploybot'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={activeLink === `#${section}` ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(section)
                  .scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {section === 'ploybot'
                ? 'PloyBot'
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </p>
      </div>

      {/* Middle Logo */}
      <div className={`navbar-mid ${!isVisible ? 'hidden' : ''}`}>
        <a
          href="#home"
          className="tooltip-container"
          onClick={(e) => {
            e.preventDefault(); // default jump behavior
            document
              .getElementById('home')
              .scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img src={logo} alt="Logo" style={{ borderRadius: '50%' }} />
        </a>
      </div>

      {/* Right Navbar (Visible at all times) */}
      <div className={`navbar-left ${!isVisible ? 'hidden' : ''}`}>
        <a
          href="https://www.linkedin.com/in/ploynapa-py/"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip-container"
        >
          <img src={linkedinIcon} alt="LinkedIn" width={40} />
          <span className="tooltip">LinkedIn</span>
        </a>
        <a
          href="https://github.com/Ploynpk"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip-container"
        >
          <img src={githubIcon} alt="GitHub" width={40} />
          <span className="tooltip">GitHub</span>
        </a>
        <a
          href={resume}
          rel="noopener noreferrer"
          className="tooltip-container"
        >
          <img src={resumeIcon} alt="Resume" width={38} />
          <span className="tooltip">Resume</span>
        </a>
        <a
          href="mailto:ploy@ploynapa.com"
          rel="noopener noreferrer"
          className="tooltip-container"
        >
          <img src={contactIcon} alt="Contact Me" id="github1" />
          <span className="tooltip">Contact Me</span>
        </a>
      </div>

    </nav>
  );
}

export default Navbar;
