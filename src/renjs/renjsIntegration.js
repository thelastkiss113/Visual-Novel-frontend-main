const storyData = {
  startNode: 'intro',
  nodes: {
    intro: {
      text: 'Welcome to the Cat Café. Will you escape?',
      background: '/assets/images/catcafebackground2.png',
      sound: '/assets/sounds/intro.mp3',
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

export function initializeGame(renderNodeCallback) {
  const startNode = storyData.nodes[storyData.startNode];
  if (!startNode) {
    console.error('Error: Start node not found.');
    return;
  }
  renderNodeCallback(startNode);
}

export function resetGame(renderNodeCallback) {
  const startNode = storyData.nodes[storyData.startNode];
  if (!startNode) {
    console.error('Error: Start node not found.');
    return;
  }
  renderNodeCallback(startNode);
}

function playSound(soundPath) {
  const audio = new Audio(soundPath);
  audio.play().catch((error) => {
    console.error('Failed to play sound:', error);
  });
}

export function renderNode(nodeKey, renderNodeCallback) {
  const node = storyData.nodes[nodeKey];
  if (!node) {
    console.error(`Error: Node with key "${nodeKey}" not found.`);
    return;
  }
  document.body.style.backgroundImage = `url(${node.background})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';

  if (node.sound) {
    playSound(node.sound);
  }

  renderNodeCallback(node);
}

export function handleWrongChoice(onLivesDecrement, resetCallback) {
  onLivesDecrement((currentLives) => {
    const updatedLives = currentLives - 1;
    if (updatedLives <= 0) {
      resetCallback();
      return 3; // Reset lives to 3
    }
    return updatedLives;
  });
}

export default storyData;
