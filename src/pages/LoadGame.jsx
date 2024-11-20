import React, { useState, useEffect } from 'react';

const LoadGame = () => {
  const [players, setPlayers] = useState([]); // To hold all the players from the database
  const [selectedPlayer, setSelectedPlayer] = useState(null); // To store the selected player
  const [error, setError] = useState(null);

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
      const response = await fetch(`/api/players/${playerId}`); // Get specific player by ID
      const playerData = await response.json();
      setSelectedPlayer(playerData); // Set the selected player's data
      console.log('Player data loaded:', playerData);
      // Optionally, you can now load the player’s progress here too (e.g. load their saved progress from /api/progress)
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

      {/* Display selected player's information */}
      {selectedPlayer && (
        <div>
          <h3>Selected Player</h3>
          <p>Name: {selectedPlayer.name}</p>
          <p>Email: {selectedPlayer.email}</p>
          <p>Level: {selectedPlayer.level}</p>
          <p>Lives: {selectedPlayer.lives}</p>
          {/* Optionally, add other player info or progress details here */}
        </div>
      )}
    </div>
  );
};

export default LoadGame;
