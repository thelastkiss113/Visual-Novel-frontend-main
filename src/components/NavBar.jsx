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
      <button onClick={updatePlayerProgress}>Save Progress</button>
      <button onClick={deletePlayerProgress}>Delete Progress</button>
    </div>
  </nav>
);

export default Navbar;