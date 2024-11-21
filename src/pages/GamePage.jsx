// frontend/src/pages/GamePage.jsx
import React, { useState, useEffect } from 'react';
import { initializeGame, resetGame, renderNode } from '/src/renjs/renjsIntegration.js';
import './GamePage.css';

const GamePage = ({ player }) => {
  const [remainingLives, setRemainingLives] = useState(player?.lives || 9);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentStoryText, setCurrentStoryText] = useState('');
  const [availableChoices, setAvailableChoices] = useState([]);

  useEffect(() => {
    if (player) {
      initializeGame(renderStoryNode);
    }
  }, [player]);

  const renderStoryNode = (node) => {
    if (!node) {
      console.error('Error: Story node not found.');
      setCurrentStoryText('Error: Story node not found.');
      setAvailableChoices([]);
      return;
    }

    setCurrentStoryText(node.text);
    setAvailableChoices(node.choices || []);
  };

  const handleWrongChoice = () => {
    setRemainingLives((prevLives) => {
      const newLives = prevLives - 1;

      if (newLives <= 0) {
        resetGame(renderStoryNode);
        setIsGameOver(true);
        return 9; // Reset lives to 9
      }

      return newLives;
    });
  };

  const handleCorrectChoice = (nextNodeId) => {
    renderNode(nextNodeId, renderStoryNode);
  };

  return (
    <div className="game-container">
      <div className="lives-counter">Lives Remaining: {remainingLives}</div>

      {isGameOver && (
        <div className="game-over">
          <p>Game Over! Please start a new game.</p>
        </div>
      )}

      <h1>Welcome, {player?.name || 'Player'}!</h1>

      <div id="gameCanvas">
        <div className="story-box">
          <p>{currentStoryText}</p>
          <div className="choices">
            {availableChoices.map((choice, index) => (
              <button
                key={index}
                onClick={() =>
                  choice.isWrongChoice
                    ? handleWrongChoice()
                    : handleCorrectChoice(choice.nextNode)
                }
              >
                {choice.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      <img
        src="/assets/images/maincat1-removebg-preview.png"
        alt="Main Character"
        className="cat-character"
      />
    </div>
  );
};

export default GamePage;
