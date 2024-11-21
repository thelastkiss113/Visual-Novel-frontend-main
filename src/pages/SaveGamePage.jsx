// frontend/src/pages/SaveGamePage.jsx

import React, { useState } from 'react';

const SaveGamePage = ({ player }) => {
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/players/' + player._id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: player.name,
          email: player.email,
          level: player.level,
          lives: player.lives,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save game');
      }

      setSaved(true);
      console.log('Game saved successfully!');
    } catch (error) {
      console.error('Error saving game:', error);
    }
  };

  return (
    <div>
      <h2>Save Game</h2>
      <p>Player: {player.name}</p>
      <p>Email: {player.email}</p>
      <p>Level: {player.level}</p>
      <p>Lives: {player.lives}</p>
      <button onClick={handleSave}>Save Game</button>
      {saved && <p>Game saved successfully!</p>}
    </div>
  );
};

export default SaveGamePage;
