//frontend/src/api/apiCalls.js
const API_BASE_URL = 'http://localhost:5000/api';

// Fetch all players
export const fetchPlayers = async () => {
  const response = await fetch(`${API_BASE_URL}/players`);
  return response.json();
};

// Add a new player
export const addPlayer = async (player) => {
  const response = await fetch(`${API_BASE_URL}/players`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(player),
  });
  return response.json();
};

// Load player's saved progress
export const loadProgress = async (playerId) => {
  const response = await fetch(`${API_BASE_URL}/progress/${playerId}`);
  return response.json();
};

// Update player's progress
export const updateProgress = async (playerId, progress) => {
  const response = await fetch(`${API_BASE_URL}/progress/${playerId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(progress),
  });
  return response.json();
};

// Delete player's progress
export const deleteProgress = async (playerId) => {
  await fetch(`${API_BASE_URL}/progress/${playerId}`, { method: 'DELETE' });
};

