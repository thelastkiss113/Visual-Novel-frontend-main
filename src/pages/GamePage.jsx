// frontend/src/pages/GamePage.jsx
import React, { useState, useEffect } from 'react';
import { initializeGame, resetGame, renderNode } from '/src/renjs/renjsIntegration.js'; // Import RenJS functions
import './GamePage.css'; // Importing CSS for styling

const GamePage = ({ player }) => {
  const [remainingLives, setRemainingLives] = useState(player?.lives || 3); // Player lives
  const [isGameOver, setIsGameOver] = useState(false); // Game Over state
  const [currentStoryText, setCurrentStoryText] = useState(''); // Story text
  const [availableChoices, setAvailableChoices] = useState([]); // Choices for the current story node

  // Initialize the game on mount
  useEffect(() => {
    if (player) {
      initializeGame(renderStoryNode); // Pass renderStoryNode as a callback to initialize the game
    }
  }, [player]);

  // Render a specific story node
  const renderStoryNode = (node) => {
    if (!node) {
      console.error('Error: Story node not found.');
      setCurrentStoryText('Error: Story node not found.');
      setAvailableChoices([]); // Clear choices if the node is missing
      return;
    }

    console.log('Rendering story node:', node); // Debugging

    setCurrentStoryText(node.text); // Set story text
    setAvailableChoices(node.choices || []); // Set choices or empty array
  };

  // Handle wrong choice (decrement lives)
  const handleWrongChoice = () => {
    setRemainingLives((prevLives) => {
      const newLives = prevLives - 1;

      if (newLives <= 0) {
        resetGame(renderStoryNode); // Reset the game
        setIsGameOver(true); // Mark as game over
        return 3; // Reset lives to 3 after game over
      }

      return newLives;
    });
  };

  // Handle correct choice (navigate to the next node)
  const handleCorrectChoice = (nextNodeId) => {
    renderNode(nextNodeId, renderStoryNode); // Navigate to the next story node
  };

  return (
    <div className="game-container">
      {/* Lives Counter */}
      <div className="lives-counter">Lives Remaining: {remainingLives}</div>

      {/* Game Over Message */}
      {isGameOver && (
        <div className="game-over">
          <p>Game Over! Please start a new game.</p>
        </div>
      )}

      {/* Display Player's Name */}
      <h1>Welcome, {player?.name || 'Player'}!</h1> {/* Display player name */}

      {/* Game Canvas */}
      <div id="gameCanvas">
        <div className="story-box">
          <p>{currentStoryText}</p> {/* Display story text */}

          {/* Render choices as buttons */}
          <div className="choices">
            {availableChoices.map((choice, index) => (
              <button
                key={index}
                onClick={() =>
                  choice.isWrongChoice
                    ? handleWrongChoice()  // If it's a wrong choice, handle life loss
                    : handleCorrectChoice(choice.nextNode)  // If it's a correct choice, go to next node
                }
              >
                {choice.text} {/* Display choice text */}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Character Image */}
      <img
        src="/assets/images/maincat1-removebg-preview.png"
        alt="Main Character"
        className="cat-character"
      />
    </div>
  );
};

export default GamePage;
