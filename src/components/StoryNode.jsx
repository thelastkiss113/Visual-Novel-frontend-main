//frontend/src/components/StoryNode.jsx
import React from 'react';
import './styles/StoryNode.css';

const StoryNode = ({ text, choices, onChoice }) => (
  <div className="story-node">
    <p>{text}</p>
    <div className="choices">
      {choices.map((choice, index) => (
        <button key={index} onClick={() => onChoice(choice.nextNode)}>
          {choice.text}
        </button>
      ))}
    </div>
  </div>
);

export default StoryNode;
