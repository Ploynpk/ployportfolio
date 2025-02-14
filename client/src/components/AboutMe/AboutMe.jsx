import React, { useEffect, useRef } from 'react';
import './aboutme.css';

function AboutMe() {
  const techSkills = [
    '/assests/AWS.svg',
    '/assests/Cloudflare.svg',
    '/assests/RasberryPi.svg',
    '/assests/HTML5.svg',
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
    '/assests/PostgreSQL.png',
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

  const experiencesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the "animate" class to all experience items
            const items = entry.target.querySelectorAll('.experience-item');
            items.forEach((item, index) => {
              setTimeout(() => item.classList.add('animate'), index * 200); // Staggered delay
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
        <img src="/assests/ploy4.png" alt="ploypic" className="mypic" />

        {/* About me */}
        <div className="aboutme-container">
          <div className="aboutme-header">
            <h1>I'm Ploy.</h1>
          </div>
          <h2>
            I'm a software engineer. I enjoy tackling complex problems. My main
            focus is on JavaScript/TypeScript, React, Node.js, and I also
            specialize in both NoSQL and SQL databases.
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
          <p>
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
              <h1>OSLabs | DeClustor</h1>
              <p>Software Engineer</p>
            </div>
            <h1 className="year">2024~</h1>
          </div>

          <div className="experience-item">
            <div>
              <h1>Petder Better</h1>
              <p>Software Engineer</p>
            </div>
            <h1 className="year">2024</h1>
          </div>

          <div className="experience-item">
            <div>
              <h1>LunchBox</h1>
              <p>Software Engineer</p>
            </div>
            <h1 className="year">2024</h1>
          </div>

          <div className="experience-item">
            <div>
              <h1>Jumpa Co-op</h1>
              <p>Shift Lead/Hospitality Specialist</p>
            </div>
            <h1 className="year">2018-2023</h1>
          </div>

          <div className="experience-item">
            <div>
              <h1>Jumpa Co-op</h1>
              <p>Product Manager (Intern)</p>
            </div>
            <h1 className="year">2017-2018</h1>
          </div>

          <div className="experience-item">
            <div>
              <h1>Mitr Phol Group</h1>
              <p>Export and Logistic Operator</p>
            </div>
            <h1 className="year">2013-2015</h1>
          </div>

          <div className="experience-item">
            <div>
              <h1>Mitr Phol Group</h1>
              <p>Procurement Officer</p>
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
