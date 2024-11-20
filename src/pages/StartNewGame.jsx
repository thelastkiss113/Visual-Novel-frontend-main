// frontend/src/pages/StartNewGame.jsx
import React, { useState } from 'react';

const StartNewGame = () => {
  console.log('StartNewGame component rendered');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(9);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Submitting form with data:', { name, email, level, lives });
      const response = await fetch('/api/players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, level, lives }),
      });
      const data = await response.json();
      console.log('Received data from server:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
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