import React, { useEffect, useRef } from 'react';
import './aboutme.css';
import AWS from '../../assets/images/AWS.svg';
import Cloudflare from '../../assets/images/Cloudflare.svg';
import RasberryPi from '../../assets/images/RasberryPi.svg';
import HTML5 from '../../assets/images/HTML5.svg';
import CSS from '../../assets/images/CSS.svg';
import JavaScript from '../../assets/images/JavaScript.svg';
import TypeScript from '../../assets/images/TypeScript.svg';
import Python from '../../assets/images/Python.svg';
import ReactLogo from '../../assets/images/React.png';
import MaterialUI from '../../assets/images/MaterialUI.svg';
import Git from '../../assets/images/Git.svg';
import GitHub from '../../assets/images/GitHub.svg';
import JQuery from '../../assets/images/JQuery.svg';
import NodeJS from '../../assets/images/NodeJS.svg';
import Express from '../../assets/images/Express.svg';
import MongoDB from '../../assets/images/MongoDB.svg';
import PostgreSQL from '../../assets/images/PostgreSQL.png';
import Docker from '../../assets/images/Docker.png';
import Websocket from '../../assets/images/Websocket.png';
import RabbitMQ from '../../assets/images/RabbitMQ.svg';
import CICD from '../../assets/images/CICD.png';
import Redis from '../../assets/images/Redis.svg';
import Redux from '../../assets/images/Redux.svg';
import SQLite from '../../assets/images/SQLite.svg';
import Postman from '../../assets/images/Postman.png';
import Supabase from '../../assets/images/Supabase.svg';
import Jest from '../../assets/images/Jest.svg';
import Jira from '../../assets/images/Jira.png';
import Vite from '../../assets/images/Vite.svg';
import Webpack from '../../assets/images/Webpack.svg';
import PloyPic from '../../assets/images/ploy4.png';

function AboutMe() {
  const techSkills = [
    AWS,
    Cloudflare,
    RasberryPi,
    HTML5,
    CSS,
    JavaScript,
    TypeScript,
    Python,
    ReactLogo,
    MaterialUI,
    Git,
    GitHub,
    JQuery,
    NodeJS,
    Express,
    MongoDB,
    PostgreSQL,
    Docker,
    Websocket,
    RabbitMQ,
    CICD,
    Redis,
    Redux,
    SQLite,
    Postman,
    Supabase,
    Jest,
    Jira,
    Vite,
    Webpack,
  ];

  const experiencesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the "animate" class to all experience items
            const items = entry.target.querySelectorAll('.experience-item');
            items.forEach((item, index) => {
              setTimeout(() => item.classList.add('animate'), index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }, // Trigger when at least 20% of the section is visible
    );

    const experiences = experiencesRef.current;
    if (experiences) observer.observe(experiences);

    return () => {
      if (experiences) observer.unobserve(experiences);
    };
  }, []);

  return (
    <div>
      <div className="aboutme-wrapper">
        {/* Left intro */}
        <img src={PloyPic} alt="ploypic" className="mypic" />

        {/* About me */}
        <div className="aboutme-container">
          <div className="aboutme-header">
            <h1>I am Ploy.</h1>
          </div>
          <h2>
            <span id="i">I</span> am a software engineer passionate about
            creating seamless experiences across the entire development stack.{' '}
            <br />
            <span id="i">I</span> enjoy solving complex problems and building
            high-quality, user-centric solutions.
          </h2>
          <p>
            Outside of work, I enjoy outdoor runs as a form of meditation,
            experimenting with Thai-Italian fusion cuisine in my kitchen, and
            tinkering with AI-enhanced home automation systems. When winter
            comes, you’ll find me shredding the slopes on my snowboard.
          </p>
          <p>
            <br />
            Growing up in Thailand taught me the value of adaptability and
            collaboration, which I bring to every team I work with.
          </p>
          <p style={{ fontStyle: 'italic' }}>
            <br />
            "I am a hard worker who stays determined and persistent until I
            achieve my goals."
          </p>
        </div>

        {/* Experiences Section */}
        <div className="experiences" ref={experiencesRef}>
          <h1 id="ex-header">MY EXPERIENCES.</h1>
          <div className="experience-item current">
            <div>
              <h1>Software Engineer</h1>
              <p>OSLabs | DeClustor</p>
            </div>
            <h1 className="year">2024~</h1>
          </div>

          <div className="experience-item">
            <div>
              <h1>Software Engineer</h1>
              <p>Petder Better</p>
            </div>
            <h1 className="year">2024</h1>
          </div>

          <div className="experience-item">
            <div>
              <h1>Software Engineer</h1>
              <p>LunchBox</p>
            </div>
            <h1 className="year">2024</h1>
          </div>

          <div className="experience-item">
            <div>
              <h1>Shift Lead/Hospitality Specialist</h1>
              <p>Jumpa Co-op</p>
            </div>
            <h1 className="year">2018-2023</h1>
          </div>

          <div className="experience-item">
            <div>
              <h1>Product Manager (Intern)</h1>
              <p>Jumpa Co-op</p>
            </div>
            <h1 className="year">2017-2018</h1>
          </div>

          <div className="experience-item">
            <div>
              <h1>Export and Logistic Operator</h1>
              <p>Mitr Phol Group</p>
            </div>
            <h1 className="year">2013-2015</h1>
          </div>

          <div className="experience-item">
            <div>
              <h1>Procurement Officer (Intern)</h1>
              <p>Mitr Phol Group</p>
            </div>
            <h1 className="year">2012-2013</h1>
          </div>
        </div>
      </div>

      {/* Tech skills */}
      <div className="tech-container">
        <h1>MY SKILLS.</h1>
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
