// frontend/src/pages/SaveGamePage.jsx
import React, { useState } from 'react'; // Import React and useState hook

const SaveGamePage = ({ player }) => {
  const [saved, setSaved] = useState(false); // Manage the saved state

  // Function to handle saving the player's game progress
  const handleSave = async () => {
    try {
      // Make a PUT request to save the player's progress
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

      setSaved(true); // Set saved to true after a successful save
      console.log('Game saved successfully!');
    } catch (error) {
      console.error('Error saving game:', error); // Log error if the save fails
    }
  };

  return (
    <div>
      <h2>Save Game</h2>
      <p>Player: {player.name}</p>
      <p>Email: {player.email}</p>
      <p>Level: {player.level}</p>
      <p>Lives: {player.lives}</p>

      {/* Button to trigger the save */}
      <button onClick={handleSave}>Save Game</button>

      {/* Show a confirmation message if the game was saved successfully */}
      {saved && <p>Game saved successfully!</p>}
    </div>
  );
};

export default SaveGamePage;
