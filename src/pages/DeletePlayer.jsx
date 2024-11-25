// frontend/src/pages/DeletePlayer.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DeletePlayer = ({ player, setPlayer }) => {
  const [confirmation, setConfirmation] = useState(false); // Confirmation state 
  const navigate = useNavigate(); // For navigation after deletion

  useEffect(() => {
    if (!player) {
      navigate('/'); // Redirect if no player exists
    }
  }, [player, navigate]);

  // Handle delete player request
  const handleDeletePlayer = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your player and progress?');
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:5000/api/players/${player._id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Player has been deleted.');
          setPlayer(null); // Clear the current player data
          navigate('/'); // Redirect to the home page after deletion
        } else {
          alert('Failed to delete player.');
        }
      } catch (error) {
        console.error('Error deleting player:', error);
        alert('An error occurred while deleting the player.');
      }
    } else {
      navigate('/'); // If no, go back to the current game
    }
  };

  return (
    <div>
      <h2>Delete Player</h2>
      <p>Are you sure you want to delete your account and progress?</p>
      <p>Name: {player.name}</p>
      <p>Email: {player.email}</p>
      <p>Level: {player.level}</p>
      <p>Lives: {player.lives}</p>

      <button onClick={handleDeletePlayer}>Delete Player</button>
    </div>
  );
};

export default DeletePlayer;