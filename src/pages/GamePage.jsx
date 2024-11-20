// frontend/src/pages/GamePage.jsx
import React, { useState, useEffect } from 'react';
import { initializeGame, resetGame } from '/src/renjs/renjsIntegration.js'; // Import RenJS functions
import './GamePage.css'; // Importing CSS for styling

const GamePage = () => {
  const [lives, setLives] = useState(3); // State to track player's remaining lives
  const [gameOver, setGameOver] = useState(false); // State to indicate if the game is over
  const [storyText, setStoryText] = useState(''); // State to store the current story text
  const [choices, setChoices] = useState([]); // State to store the available choices

  // Initialize the game on component mount
  useEffect(() => {
    initializeGame(renderStoryNode); // Initialize the game with the node rendering callback
  }, []);

  // Function to render the story node
  const renderStoryNode = (node) => {
    if (node) {
      setStoryText(node.text); // Update the story text
      setChoices(node.choices); // Update the choices for this node
    } else {
      setStoryText('Error: Story node not found.'); // Handle missing node
      setChoices([]);
    }
  };

  // Handle a wrong choice and reduce lives
  const handleWrongChoice = () => {
    setLives((prevLives) => {
      const newLives = prevLives - 1; // Decrease lives
      if (newLives <= 0) {
        // If no lives are left, reset the game
        resetGame(renderStoryNode); // Use RenJS to reset the game
        setLives(3); // Reset lives to 3
        setGameOver(true); // Set game over to true
      }
      return newLives;
    });
  };

  // Handle correct choice and transition to the next story node
  const handleCorrectChoice = (nextNode) => {
    // Call RenJS to move to the next node
    initializeGame().goTo(nextNode, renderStoryNode);
  };

  return (
    <div className="game-container">
      {/* Game Over Message */}
      {gameOver && (
        <div className="game-over">
          <p>Game Over! Please start a new game.</p>
        </div>
      )}

      {/* Story Text and Choices */}
      <div id="gameCanvas">
        <div className="story-box">
          <p>{storyText}</p> {/* Display the story text */}
          <div className="choices">
            {choices.map((choice, index) => (
              <button
                key={index}
                onClick={() =>
                  choice.isCorrect
                    ? handleCorrectChoice(choice.nextNode)
                    : handleWrongChoice()
                }
              >
                {choice.text}
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
