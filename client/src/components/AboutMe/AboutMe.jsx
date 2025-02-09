import React from 'react';
import './aboutme.css';

function AboutMe() {
  const techSkills = [
    '/assests/AWS.svg',
    '/assests/Cloudflare.svg',
    '/assests/RasberryPi.svg',
    '/assests/HTML.svg',
    '/assests/CSS.svg',
    '/assests/JavaScript.svg',
    '/assests/TypeScript.svg',
    '/assests/Python.svg',
    '/assests/React.png',
    '/assests/MaterialUI.svg',
    '/assests/Git.svg',
    '/assests/GitHub.svg',
    '/assests/JQuery.svg',
    '/assests/NodeJS.svg',
    '/assests/Express.svg',
    '/assests/MongoDB.svg',
    '/assests/PostgresQL.png',
    '/assests/Docker.png',
    '/assests/Websocket.png',
    '/assests/RabbitMQ.svg',
    '/assests/CICD.png',
    '/assests/Redis.svg',
    '/assests/Redux.svg',
    '/assests/SQLite.svg',
    '/assests/Postman.png',
    '/assests/Supabase.svg',
    '/assests/Jest.svg',
    '/assests/Jira.png',
    '/assests/Vite.svg',
    '/assests/Webpack.svg',
  ];

  return (
    <div>
      <div className="aboutme-wrapper">
        {/* left intro */}
        <h1 className="brief">A <br />Brief <br />Story</h1>

        {/* about me */}
        <div className="aboutme-container">
          <div className="aboutme-header">
            <h1>Ploynapa Yang</h1>
            <img src='/assests/IMG_5695.png' alt="ploypic" className="mypic"/>
          </div>
          <h2>I'm a software engineer, I enjoy tackling complex problems. 
            My main focus is on JavaScript/TypeScript, React, Node.js, 
            and I also specialize in both NoSQL and SQL databases.
          </h2>
          <p>Outside of work, I enjoy outdoor runs as a form of meditation, experimenting with Thai-Italian fusion cuisine in my kitchen, and tinkering with AI-enhanced home automation systems. When winter comes, you’ll find me shredding the slopes on my snowboard.</p>
          <p>Growing up in Thailand taught me the value of adaptability and collaboration, which I bring to every team I work with.</p>
          <p>"I am a hard worker who stays determined and persistent until I achieve my goals."</p>
        </div>
      </div>

      {/* tech skills */}
      <div className="tech-container">
        <h1>MY SKILLS</h1>
        <div className="tech-slider">
          {[...techSkills, ...techSkills].map((src, index) => {
            const techName = src.split('/').pop().split('.')[0];
            return (
              <div key={index} className="tooltip-container">
                <img src={src} alt={techName} />
                <span className="tooltip">{techName}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
