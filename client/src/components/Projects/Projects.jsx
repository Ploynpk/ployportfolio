import React, { useState } from 'react';
import './project.css';

// Import images
import payProHome from '../../assets/images/payprohome.png';
import pa1 from '../../assets/images/pa1.png';
import pa2 from '../../assets/images/pa2.png';
import pa from '../../assets/images/pa.png';
import payProLogo from '../../assets/images/payprologo.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';
import petderLogo from '../../assets/images/petderlogo.png';
import lunch from '../../assets/images/luch.png';
import l from '../../assets/images/l.png';
import dashboardGif from '../../assets/images/dash3.gif';
import dashboardGif2 from '../../assets/images/dash.gif';
import dashboardGif3 from '../../assets/images/dash1.gif';
import dashboardGif4 from '../../assets/images/dash2.gif';
import j from '../../assets/images/j.png';
import j1 from '../../assets/images/j1.png';
import j3 from '../../assets/images/j3.png';
import j4 from '../../assets/images/jj.gif';
import nextFlickLogo from '../../assets/images/nextflick-logo.png';
import luckyDogLogo from '../../assets/images/luckydog-logo.png';
import githubLogo from '../../assets/images/github.png';

const projectDetails = {
  PayPro:
    'A group financial management web application specifically designed to manage and track shared expenses.',
  'Petder Better':
    'A dating web application for pet lovers to connect and find companionship for their pets.',
  LunchBox: 'A meal prep management app.',
  DeClustor:
    'A cloud management platform simplifying applications running on AWS ECS by offering a centralized, real-time dashboard for monitoring across multi-account.',
  JigglyDex:
    'A Pokémon dashboard featuring API integration for collecting favorites and enabling random battles.',
  NextFlick:
    'A home cinema platform designed to enhance your movie and TV show experience.',
  'Lucky Dog': 'An adoption platform for rescue dogs.',
};

const projectImages = {
  PayPro: [payProHome, pa1, pa2, pa, payProLogo],
  'Petder Better': [p2, p3, petderLogo],
  LunchBox: [lunch, l],
  DeClustor: [dashboardGif, dashboardGif2, dashboardGif3, dashboardGif4],
  JigglyDex: [j4, j1, j3, j],
  NextFlick: [nextFlickLogo],
  'Lucky Dog': [luckyDogLogo],
};

const projectLinks = {
  PayPro: 'https://github.com/Ploynpk/paypro',
  'Petder Better': 'https://github.com/awesome-solution/petder-better',
  LunchBox: 'https://github.com/stab-rabbit-org-48/lunchbox',
  DeClustor: 'https://github.com/oslabs-beta/DeClustor',
  JigglyDex: 'https://github.com/Jigglypuff-pokedex/jigglydex',
  NextFlick: 'https://github.com/Ploynpk/python-django-js-project-nextflick',
  'Lucky Dog': 'https://github.com/Ploynpk/luckydog',
};

const techUsed = {
  PayPro: [
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Webpack',
    'bcrypt',
  ],
  'Petder Better': [
    'JavaScript',
    'React',
    'Redux',
    'Node.js',
    'PostgreSQL',
    'Webpack',
  ],
  LunchBox: [
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'RESTAPIs',
    'MongoDB',
    'Webpack',
    'React Testing Library',
    'SuperTest',
    'Jest',
  ],
  DeClustor: [
    'JavaScript',
    'React',
    'Redux',
    'D3.js/Nivo',
    'MaterialUI',
    'Node.js',
    'Express.js',
    'SQLite',
    'Webpack',
    'Docker',
    'Passport.js',
    'Redis',
    'CI/CD',
    'AWS',
    'React Testing Library',
    'SuperTest',
    'Jest',
  ],
  JigglyDex: [
    'JavaScript',
    'React',
    'MaterialUI',
    'Node.js',
    'Express.js',
    'RESTAPIs',
    'MongoDB',
    'Webpack',
  ],
  NextFlick: ['Python', 'Django', 'SQLite', 'RESTAPIs'],
  'Lucky Dog': ['JavaScript', 'React', 'Node.js', 'Webpack', 'RESTAPIs'],
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState('DeClustor');
  const [imageIndex, setImageIndex] = useState(0);

  const images = projectImages[selectedProject] || [];

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="projects-container">
      {/* Project List */}
      <div className="project-list">
        <h1>MY PROJECTS.</h1>
        <ul>
          {Object.keys(projectDetails).map((project) => (
            <li
              key={project}
              onClick={() => {
                setSelectedProject(project);
                setImageIndex(0);
              }}
              className={selectedProject === project ? 'active' : ''}
            >
              {project}
            </li>
          ))}
        </ul>
      </div>

      {/* Project Details */}
      <div
        className={`project-detail ${selectedProject ? 'active-project' : ''}`}
      >
        {/* project images */}
        {images.length > 0 && (
          <div className="carousel">
            <button className="prev" onClick={prevImage}>
              &#10094;
            </button>
            <img
              src={images[imageIndex]}
              alt={selectedProject}
              className="project-image"
            />
            <button className="next" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        )}
        <h2>{selectedProject}</h2>
        <p>{projectDetails[selectedProject]}</p>

        {/* technologies used */}
        <ul className="tech-list">
          {techUsed[selectedProject].map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        {/* link button */}
        <a
          href={projectLinks[selectedProject]}
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip-container"
        >
          <img aria-hidden src={githubLogo} alt="GitHub" id="github" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
