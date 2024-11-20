// frontend/src/pages/StartNewGame.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartNewGame = ({ createNewGame }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(9);
  const navigate = useNavigate(); // Hook to navigate to the GamePage

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a POST request to the backend to create a new player
      const response = await fetch('http://localhost:5000/api/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, level, lives }), // Send the form data
      });

      if (!response.ok) {
        throw new Error('Failed to create player');
      }

      const newPlayer = await response.json();
      console.log('New player created:', newPlayer);

      // Pass the new player data back to the parent App.jsx
      createNewGame(newPlayer);

      // Redirect to the GamePage
      navigate('/');
    } catch (error) {
      console.error('Error creating player:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffcc', padding: '20px', borderRadius: '10px' }}>
      <h1 style={{ color: '#333' }}>Start New Game</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Level:
          <input type="number" value={level} onChange={(event) => setLevel(event.target.value)} />
        </label>
        <br />
        <label>
          Lives:
          <input type="number" value={lives} onChange={(event) => setLives(event.target.value)} />
        </label>
        <br />
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
};

export default StartNewGame;
