// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import HomePage from './components/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Projects from './components/Projects/Projects.jsx';
import ChatPage from './components/ChatAI/Chat.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Navbar />
      </nav>

      {/* effect */}
      <div className="shimmer-effect" />
      <div className="shimmer-effect2" />
      {/* content */}
      <div id="home" className="section">
        <HomePage />
      </div>

      <div id="about" className="section">
        <AboutMe />
      </div>

      <div id="projects" className="section">
        <Projects />
      </div>

      <div id="ploybot" className="section">
        <ChatPage />
      </div>
    </div>
  );
}

export default App;
