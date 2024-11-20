/// frontend/src/renjs/renjsIntegration.js

const storyData = {
  startNode: 'intro',
  nodes: {
    intro: {
      text: 'Welcome to the Cat Café. Will you escape?',
      background: '/assets/images/catcafebackground2.png', // Background for intro
      sound: '/assets/sounds/intro.mp3', // Background music
      choices: [
        { text: 'Explore the kitchen', nextNode: 'kitchen' },
        { text: 'Talk to the mysterious cat', nextNode: 'mysteryCat' },
      ],
    },
    kitchen: {
      text: 'The kitchen smells like fish. What do you do?',
      background: '/assets/images/kitchen.png',
      sound: '/assets/sounds/kitchen.mp3',
      choices: [
        { text: 'Search the fridge', nextNode: 'fridge' },
        { text: 'Leave the kitchen', nextNode: 'intro' },
      ],
    },
    fridge: {
      text: 'You open the fridge and find some fish! But it’s cold and you lose a life.',
      background: '/assets/images/fridge.png',
      sound: '/assets/sounds/life-lost.mp3',
      choices: [
        { text: 'Return to the kitchen', nextNode: 'kitchen', isWrongChoice: true },
      ],
    },
    mysteryCat: {
      text: 'The cat offers a cryptic clue: "Not all exits are doors."',
      background: '/assets/images/mysteryCat.png',
      sound: '/assets/sounds/clue.mp3',
      choices: [
        { text: 'Follow the clue', nextNode: 'storageRoom' },
        { text: 'Ignore the cat', nextNode: 'intro' },
      ],
    },
    storageRoom: {
      text: 'You enter the storage room. A window glows faintly in the dark.',
      background: '/assets/images/storageRoom.png',
      sound: '/assets/sounds/storage-room.mp3',
      choices: [
        { text: 'Inspect the window', nextNode: 'window' },
        { text: 'Look around', nextNode: 'intro' },
      ],
    },
    window: {
      text: 'You find the window unlocked. You escape the Cat Café!',
      background: '/assets/images/window.png',
      sound: '/assets/sounds/escape.mp3',
      choices: [
        { text: 'Play again', nextNode: 'intro' },
      ],
    },
  },
};

// Function to initialize the game
export function initializeGame() {
  const gameCanvas = document.getElementById('gameCanvas');

  if (!gameCanvas) {
    console.error('Game canvas element not found!');
    return;
  }

  // Function to render a story node
  const renderNode = (nodeKey) => {
    const node = storyData.nodes[nodeKey];

    if (!node) {
      gameCanvas.innerHTML = '<p>Error: Story node not found!</p>';
      return;
    }

    // Update background image
    document.body.style.backgroundImage = `url(${node.background})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    // Play sound
    if (node.sound) {
      playSound(node.sound);
    }

    // Display the node text
    gameCanvas.innerHTML = `<p>${node.text}</p>`;

    // Render the choices as buttons
    const choicesContainer = document.createElement('div');
    choicesContainer.className = 'choices-container'; // Add styling class for choices
    node.choices.forEach((choice) => {
      const button = document.createElement('button');
      button.textContent = choice.text;
      button.onclick = () => {
        if (choice.isWrongChoice) {
          // Handle wrong choices (reduce lives, reset if necessary)
          handleWrongChoice();
        } else {
          renderNode(choice.nextNode);
        }
      };
      choicesContainer.appendChild(button);
    });

    gameCanvas.appendChild(choicesContainer);
  };

  // Start the game at the start node
  renderNode(storyData.startNode);
}

// Function to reset the game to the start node
export function resetGame() {
  const gameCanvas = document.getElementById('gameCanvas');

  if (!gameCanvas) {
    console.error('Game canvas element not found!');
    return;
  }

  // Reset the game by re-rendering the start node
  gameCanvas.innerHTML = ''; // Clear the game canvas
  initializeGame(); // Reinitialize the game at the start node
}

// Utility to play sound
function playSound(soundPath) {
  const audio = new Audio(soundPath);
  audio.play();
}

// Handle wrong choice
function handleWrongChoice() {
  alert('Wrong choice! You’ve lost a life.');
  // Implement additional logic here for reducing lives or resetting the game
}

export default storyData;
