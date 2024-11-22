// frontend/src/components/NavBar.jsx
// frontend/src/components/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { stopAllAudio } from '../renjs/renjsIntegration'; // Import the stopAllAudio function
import '../styles/App.css';

const Navbar = ({ createNewGame, updatePlayerProgress, deletePlayerProgress, loadGame }) => {
  // Handle link clicks to stop the audio
  const handleNavClick = () => {
    stopAllAudio(); // Stop the current background audio
  };

  return (
    <nav className="navbar">
      <h1>9 Lives: a Cat Café Escape Room</h1>
      <div className="navbar-buttons">
        <Link to="/start-new-game" className="link-button" onClick={handleNavClick}>
          Start New Game
        </Link>
        <Link to="/load-game" className="link-button" onClick={handleNavClick}>
          Load Game
        </Link>
        <Link to="/save-game" className="link-button" onClick={handleNavClick}>
          Save Progress
        </Link>
        <Link to="/delete-player" className="link-button" onClick={handleNavClick}>
          Delete Player
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
