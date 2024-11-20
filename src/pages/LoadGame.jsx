// frontend/src/pages/LoadGame.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadGame = ({ setPlayer }) => {
  const [players, setPlayers] = useState([]); // To hold all the players from the database
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation after loading a player

  // Fetch players from the backend when the component mounts
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('/api/players');
        if (!response.ok) {
          throw new Error('Failed to fetch players');
        }
        const data = await response.json();
        setPlayers(data); // Store the players in the state
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPlayers();
  }, []);

  // Function to handle loading a player's game
  const handleLoadPlayerGame = async (playerId) => {
    try {
      const response = await fetch(`/api/players/${playerId}`);
      const playerData = await response.json();
      setPlayer(playerData); // Set the selected player's data
      console.log('Player data loaded:', playerData);
      navigate('/'); // Redirect to the main game page
    } catch (error) {
      console.error('Error loading player game:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffcc', padding: '20px', borderRadius: '10px' }}>
      <h1>Load Game</h1>

      {/* Error handling */}
      {error && <p>Error: {error}</p>}

      <div>
        <h2>Select a Player</h2>
        <ul>
          {players.map((player) => (
            <li key={player._id}>
              <button onClick={() => handleLoadPlayerGame(player._id)}>
                Load {player.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoadGame;

