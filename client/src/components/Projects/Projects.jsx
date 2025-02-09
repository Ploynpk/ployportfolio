import React, { useState } from 'react';
import './project.css';

const projectDetails = {
  PayPro: "A group financial management web application specifically designed to manage and track shared expenses.",
  "Petder Better": "A dating web application for pet lovers to connect and find companionship for their pets.",
  LunchBox: "A meal prep management app.",
  DeClustor: "A cloud management platform simplifying applications running on AWS ECS by offering a centralized, real-time dashboard for monitoring across multi-account.",
  JigglyDex: "A Pokémon dashboard featuring API integration for collecting favorites and enabling random battles.",
  NextFlick: "A home cinema platform designed to enhance your movie and TV show experience.",
  "Lucky Dog": "An adoption platform for rescue dogs."
};

const projectImages = {
  PayPro: ['/assests/payprohome.png', '/assests/pa1.png','/assests/pa2.png', '/assests/pa.png','/assests/payprologo.png'],
  "Petder Better": [ '/assests/p2.png', '/assests/p3.png' ,'/assests/petderlogo.png'],
  LunchBox: [ '/assests/luch.png', '/assests/l.png'],
  DeClustor: [ '/assests/dashboard.gif'],
  JigglyDex: [ '/assests/j.png', '/assests/j1.png', '/assests/j3.png'],
  NextFlick: ['/assests/nextflick-logo.png'],
  "Lucky Dog": ['/assests/luckydog-logo.png']
};

const projectLinks = {
  PayPro: "https://github.com/Ploynpk/paypro",
  "Petder Better": "https://github.com/awesome-solution/petder-better",
  LunchBox: "https://github.com/stab-rabbit-org-48/lunchbox",
  DeClustor: "https://github.com/oslabs-beta/DeClustor",
  JigglyDex: "https://github.com/Jigglypuff-pokedex/jigglydex",
  NextFlick: "https://github.com/Ploynpk/python-django-js-project-nextflick",
  "Lucky Dog": "https://github.com/Ploynpk/luckydog"
};

const techUsed = {
  PayPro: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Webpack' , 'bcrypt'],
  "Petder Better": ['JavaScript', 'React', 'Redux', 'Node.js', 'PostgreSQL', 'Webpack'],
  LunchBox: ['JavaScript', 'React', 'Node.js', 'Express.js', 'RESTAPIs','MongoDB', 'Webpack'],
  DeClustor: ['JavaScript', 'React','Redux', 'D3.js/Nivo', 'MaterialUI', 'Node.js', 'Express.js', 'SQLite', 'Webpack' , 'Docker', 'Passport.js', 'Redis', 'CI/CD', 'AWS'],
  JigglyDex: ['JavaScript', 'React','MaterialUI', 'Node.js', 'Express.js', 'RESTAPIs','MongoDB', 'Webpack'],
  NextFlick: ['Python' , 'Django', 'SQLite', 'RESTAPIs'],
  "Lucky Dog": ['JavaScript', 'React', 'Node.js', 'Webpack' ,'RESTAPIs']
};


function Projects() {
  const [selectedProject, setSelectedProject] = useState("DeClustor");
  const [imageIndex, setImageIndex] = useState(0);

  const images = projectImages[selectedProject] || [];

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='projects-container'>
      {/* Project Details */}
      <div className={`project-detail ${selectedProject ? "active-project" : ""}`}>
        {images.length > 0 && (
          <div className='carousel'>
            <button className='prev' onClick={prevImage}>&#10094;</button>
            <img src={images[imageIndex]} alt={selectedProject} className='project-image' />
            <button className='next' onClick={nextImage}>&#10095;</button>
          </div>
        )}
        <h2>{selectedProject}</h2>
        <p>{projectDetails[selectedProject]}</p>
        <a href={projectLinks[selectedProject]} target='_blank' rel='noopener noreferrer' className="resume">
          <button>
            Learn More
            <img src="/assests/a.png" alt="Arrow Icon" className="resume-arrow" />
          </button>
        </a>
      </div>

      {/* Technologies Used */}
      <div className='tech-used'>
        <h1>Technologies</h1>
        <ul>
          {(techUsed[selectedProject]).map((tech, index) => (
            <li key={index}>
              <span className="checkmark">✓</span> {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Project List */}
      <div className='project-list'>
        <h1>PROJECT LISTS</h1>
        <ul>
          {Object.keys(projectDetails).map((project) => (
            <li 
              key={project} 
              onClick={() => { setSelectedProject(project); setImageIndex(0); }}
              className={selectedProject === project ? "active" : ""}
            >
              {project}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
