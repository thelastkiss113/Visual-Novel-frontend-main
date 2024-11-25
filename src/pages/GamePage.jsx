// frontend/src/pages/GamePage.jsx
import React, { useState, useEffect } from 'react';
import { initializeGame, renderNode } from '/src/renjs/renjsIntegration.js';
import './GamePage.css';

const GamePage = ({ player }) => {
  const [remainingLives, setRemainingLives] = useState(player?.lives || 9);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentStoryText, setCurrentStoryText] = useState('');
  const [availableChoices, setAvailableChoices] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState('');

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
    setCurrentCharacter(node.character || '');
  };

  const handleCorrectChoice = (nextNodeId) => {
    renderNode(nextNodeId, renderStoryNode);
  };

  const handleWrongChoice = () => {
    setRemainingLives((prevLives) => {
      const newLives = prevLives - 1;
      if (newLives <= 0) {
        setIsGameOver(true);
        return 9; // Reset lives to 9
      }
      return newLives;
    });
  };

  return (
    <div className="game-container">
      <div className="lives-counter">Lives Remaining: {remainingLives}</div>
      {isGameOver && <div className="game-over">Game Over! Please start a new game.</div>}

      <h1>Welcome, {player?.name || 'Player'}!</h1>

      <div id="gameCanvas">
        {currentCharacter && (
          <div className="character-container">
            <img src={currentCharacter} alt="Character" className="character-image" />
          </div>
        )}
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
    </div>
  );
};

export default GamePage;