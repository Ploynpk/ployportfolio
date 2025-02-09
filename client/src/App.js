import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import HomePage from './components/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Projects from './components/Projects/Projects.jsx';
import ChatPage from './components/ChatAI/Chat.jsx';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <div className="app">
      
      {/* navbar */}
     <nav className="navbar">
      <Navbar />
      </nav>
      
        {/* Sections with unique ids for scrolling */}
        <div id="home" className="section">
          <HomePage />
        </div>

        <div id="aboutme" className="section">
          <AboutMe />
        </div>

        <div id="projects" className="section">
          <Projects />
        </div>

        <div id="chat" className="section">
          <ChatPage />
        </div>

        {/* monkey background */}
        {/* <div className="background-row">
          <img src="/assests/bcc.png" alt="monkey" id="mon3" />
          <img src="/assests/bc3.png" alt="monkey" id="mon2" />
          <img src="/assests/bcc2.png" alt="monkey" id="mon4" />
          <img src="/assests/bc2.png" alt="monkey" id="mon1" />
        </div> */}

      </div>

    </BrowserRouter>
  );
}

export default App;
