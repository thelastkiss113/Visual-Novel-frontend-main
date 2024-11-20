// frontend/src/pages/GamePage.jsx
import React, { useState, useEffect } from 'react';
import { initializeGame, renderNode, resetGame } from '/src/renjs/renjsIntegration.js';
import './GamePage.css';

const GamePage = ({ player }) => {
  const [remainingLives, setRemainingLives] = useState(player?.lives || 3);
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

    console.log('Rendering story node:', node); // Debugging
    setCurrentStoryText(node.text);
    setAvailableChoices(node.choices || []);
  };

  const handleWrongChoice = () => {
    setRemainingLives((prevLives) => {
      const newLives = prevLives - 1;

      if (newLives <= 0) {
        setIsGameOver(true);
        resetGame(renderStoryNode); // Reset the game
        return 3; // Reset lives to 3
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

      <div id="gameCanvas">
        <div className="story-box">
          <p>{currentStoryText}</p> {/* Story text */}
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
