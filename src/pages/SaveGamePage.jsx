// frontend/src/pages/SaveGamePage.jsx
import React, { useState } from 'react';

const SaveGamePage = ({ player }) => {
  const [message, setMessage] = useState(''); // Success or error message

  const handleSaveGame = async () => {
    try {
      if (!player) {
        setMessage('No player data to save.');
        return;
      }

      // Send a PUT request to update the player in the database
      const response = await fetch(`http://localhost:5000/api/players/${player._id}`, {
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

      const updatedPlayer = await response.json();
      setMessage(`Game saved successfully for ${updatedPlayer.name}!`);
    } catch (error) {
      console.error('Error saving game:', error);
      setMessage('Error saving game. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Save Game</h1>
      {player ? (
        <>
          <p>Player Name: {player.name}</p>
          <p>Email: {player.email}</p>
          <p>Level: {player.level}</p>
          <p>Lives Remaining: {player.lives}</p>
          <button onClick={handleSaveGame}>Save Game</button>
        </>
      ) : (
        <p>No player data available. Please start or load a game.</p>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default SaveGamePage;
