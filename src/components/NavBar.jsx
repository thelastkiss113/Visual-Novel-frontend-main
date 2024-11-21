// frontend/src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Navbar = ({ createNewGame, updatePlayerProgress, deletePlayerProgress, loadGame }) => (
  <nav className="navbar">
    <h1>9 Lives: a Cat Café Escape Room</h1>
    <div className="navbar-buttons">
      <Link to="/start-new-game" className="link-button">Start New Game</Link>
      <Link to="/load-game" className="link-button">Load Game</Link>
      <Link to="/save-game" className="link-button">Save Progress</Link> 
      <Link to="/delete-player" className="link-button">Delete Player</Link> 
    </div>
  </nav>
);

export default Navbar;
