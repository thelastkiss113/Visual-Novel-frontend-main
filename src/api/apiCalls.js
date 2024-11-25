// frontend/src/api/apiCalls.js

const API_BASE_URL = import.meta.env.REACT_API_BASE_URL || 'http://localhost:5000/api';

// Fetch all players
export const fetchPlayers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/players`);
    if (!response.ok) {
      throw new Error('Failed to fetch players');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
};

// Add a new player
export const addPlayer = async (player) => {
  try {
    const response = await fetch(`${API_BASE_URL}/players`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(player),
    });
    if (!response.ok) {
      throw new Error('Failed to create player');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding player:', error);
    throw error;
  }
};

// Load player's saved progress
export const loadProgress = async (playerId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/progress/${playerId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch progress');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading progress:', error);
    throw error;
  }
};

// Update player's progress
export const updateProgress = async (playerId, progress) => {
  try {
    const response = await fetch(`${API_BASE_URL}/progress/${playerId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(progress),
    });
    if (!response.ok) {
      throw new Error('Failed to update progress');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating progress:', error);
    throw error;
  }
};

// Delete player's progress
export const deleteProgress = async (playerId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/progress/${playerId}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error('Failed to delete progress');
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting progress:', error);
    throw error;
  }
};

// Delete player profile
export const deletePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/players/${playerId}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error('Failed to delete player');
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting player:', error);
    throw error;
  }
};

// Save player profile
export const savePlayer = async (playerId, playerData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/players/${playerId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(playerData),
    });
    if (!response.ok) {
      throw new Error('Failed to save player');
    }
    return await response.json();
  } catch (error) {
    console.error('Error saving player:', error);
    throw error;
  }
};

