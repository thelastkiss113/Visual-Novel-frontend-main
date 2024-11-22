const storyData = {
  startNode: 'intro',
  nodes: {
    intro: {
      text: 'Meoowlo! Welcome to the Cat Café. It can be pretty chill here. But I crave the outdoors. Will you help me escape? Be careful though, if we make a wrong choice it will cost me a life. I only have 9.',
      background: '/assets/images/catcafebackground2.png',
      sound: '/assets/sounds/meows.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Explore the kitchen', nextNode: 'kitchen' },
        { text: 'Talk to the mysterious cat', nextNode: 'mysteryCat' },
        { text: 'Inspect the door', nextNode: 'frontDoor' },
      ],
    },
    kitchen: {
      text: 'The kitchen smells like fish. What do you do?',
      background: '/assets/images/kitchen-background.png',
      sound: '/assets/sounds/jazz-podcast-night-relaxing-vibes-242886.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Search the fridge', nextNode: 'fridge' },
        { text: 'Leave the kitchen', nextNode: 'intro' },
        { text: 'Open the pantry', nextNode: 'pantry' },
      ],
    },
    fridge: {
      text: 'You open the fridge and find some fish! But it’s cold and you lose a life.',
      background: '/assets/images/fridge.png',
      sound: '/assets/sounds/life-lost.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Return to the kitchen', nextNode: 'kitchen', isWrongChoice: true },
        { text: 'Go back to the front door', nextNode: 'frontDoor' },
      ],
    },
    pantry: {
      text: 'The pantry is filled with dry food. One of the bags starts to rip and spills. You lose a life.',
      background: '/assets/images/pantry.png',
      sound: '/assets/sounds/life-lost.mp3',
      choices: [
        { text: 'Return to the kitchen', nextNode: 'kitchen' },
        { text: 'Inspect the back door', nextNode: 'backDoor' },
      ],
    },
    mysteryCat: {
      text: 'The cat offers a cryptic clue: "Not all exits are doors."',
      background: '/assets/images/mysteryCat.png',
      sound: '/assets/sounds/clue.mp3',
      choices: [
        { text: 'Follow the clue', nextNode: 'storageRoom' },
        { text: 'Ignore the cat', nextNode: 'intro' },
        { text: 'Ask the cat for more details', nextNode: 'catRiddle' },
      ],
    },
    catRiddle: {
      text: 'The cat purrs and gives you another riddle: "The way out may not be what you expect."',
      background: '/assets/images/catRiddle.png',
      sound: '/assets/sounds/cat-riddle.mp3',
      choices: [
        { text: 'Follow the riddle', nextNode: 'hiddenPassage' },
        { text: 'Go back to the intro', nextNode: 'intro' },
      ],
    },
    storageRoom: {
      text: 'You enter the storage room. A window glows faintly in the dark.',
      background: '/assets/images/storageRoom.png',
      sound: '/assets/sounds/storage-room.mp3',
      choices: [
        { text: 'Inspect the window', nextNode: 'window' },
        { text: 'Look around for other exits', nextNode: 'hiddenPassage' },
        { text: 'Leave the room', nextNode: 'intro' },
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
    frontDoor: {
      text: 'The front door is locked. You notice a strange keypad next to it.',
      background: '/assets/images/frontDoor.png',
      sound: '/assets/sounds/front-door.mp3',
      choices: [
        { text: 'Try the keypad', nextNode: 'keypad' },
        { text: 'Go back to the kitchen', nextNode: 'kitchen' },
        { text: 'Talk to the cat again', nextNode: 'mysteryCat' },
      ],
    },
    keypad: {
      text: 'You try to input a code, but it’s a bit tricky and you lose a life.',
      background: '/assets/images/keypad.png',
      sound: '/assets/sounds/keypad.mp3',
      choices: [
        { text: 'Try again', nextNode: 'keypad' },
        { text: 'Leave the door', nextNode: 'intro' },
      ],
    },
    backDoor: {
      text: 'You find the back door, but it’s locked too. Something is strange about this place.',
      background: '/assets/images/backDoor.png',
      sound: '/assets/sounds/back-door.mp3',
      choices: [
        { text: 'Knock on the door', nextNode: 'mysteryCat' },
        { text: 'Look for a key', nextNode: 'keySearch' },
        { text: 'Leave', nextNode: 'intro' },
      ],
    },
    keySearch: {
      text: 'You find a small key in the corner! Will it open the back door?',
      background: '/assets/images/keySearch.png',
      sound: '/assets/sounds/key-search.mp3',
      choices: [
        { text: 'Try the key on the back door', nextNode: 'backDoorUnlocked' },
        { text: 'Return to the kitchen', nextNode: 'kitchen' },
      ],
    },
    backDoorUnlocked: {
      text: 'The key worked! You escape through the back door!',
      background: '/assets/images/backDoorUnlocked.png',
      sound: '/assets/sounds/escape.mp3',
      choices: [
        { text: 'Play again', nextNode: 'intro' },
      ],
    },
    hiddenPassage: {
      text: 'You find a hidden passage behind a bookshelf! It’s dark and creepy.',
      background: '/assets/images/hiddenPassage.png',
      sound: '/assets/sounds/creepy-passage.mp3',
      choices: [
        { text: 'Enter the passage', nextNode: 'undergroundCave' },
        { text: 'Leave and go back to the kitchen', nextNode: 'kitchen' },
      ],
    },
    undergroundCave: {
      text: 'The passage leads to an underground cave. You hear the faint sound of running water.',
      background: '/assets/images/undergroundCave.png',
      sound: '/assets/sounds/underground-cave.mp3',
      choices: [
        { text: 'Follow the water', nextNode: 'waterExit' },
        { text: 'Turn back', nextNode: 'intro' },
      ],
    },
    waterExit: {
      text: 'The water leads you to an exit! You escape the Cat Café!',
      background: '/assets/images/waterExit.png',
      sound: '/assets/sounds/escape.mp3',
      choices: [
        { text: 'Play again', nextNode: 'intro' },
      ],
    },
    hauntedHallway: {
      text: 'You enter a spooky hallway filled with strange shadows.',
      background: '/assets/images/hauntedHallway.png',
      sound: '/assets/sounds/haunted.mp3',
      choices: [
        { text: 'Walk down the hallway', nextNode: 'ghost' },
        { text: 'Return to the storage room', nextNode: 'storageRoom' },
      ],
    },
    ghost: {
      text: 'A ghost appears and you lose a life from the scare!',
      background: '/assets/images/ghost.png',
      sound: '/assets/sounds/ghost-scare.mp3',
      choices: [
        { text: 'Run back to the storage room', nextNode: 'storageRoom' },
        { text: 'Keep walking forward', nextNode: 'mysteryCat' },
      ],
    },
    library: {
      text: 'You stumble upon a library filled with books about escape. Should you read?',
      background: '/assets/images/library.png',
      sound: '/assets/sounds/library.mp3',
      choices: [
        { text: 'Read a book on escaping', nextNode: 'escapeBook' },
        { text: 'Ignore the books and leave', nextNode: 'intro' },
      ],
    },
    escapeBook: {
      text: 'The book gives you an idea! A secret code to unlock a door.',
      background: '/assets/images/escapeBook.png',
      sound: '/assets/sounds/escape-book.mp3',
      choices: [
        { text: 'Try the code', nextNode: 'frontDoor' },
        { text: 'Return to the kitchen', nextNode: 'kitchen' },
      ],
    },
    finalChoice: {
      text: 'You have reached the final door, but it requires a code. The question is, do you know it?',
      background: '/assets/images/finalDoor.png',
      sound: '/assets/sounds/final-choice.mp3',
      choices: [
        { text: 'Enter the code you found', nextNode: 'escapeComplete' },
        { text: 'Try something random', nextNode: 'lostLife' },
      ],
    },
    escapeComplete: {
      text: 'You cracked the code and escaped the Cat Café!',
      background: '/assets/images/escapeComplete.png',
      sound: '/assets/sounds/escape.mp3',
      choices: [
        { text: 'Play again', nextNode: 'intro' },
      ],
    },
    lostLife: {
      text: 'The wrong code caused a trap to activate, and you lose a life!',
      background: '/assets/images/lostLife.png',
      sound: '/assets/sounds/life-lost.mp3',
      choices: [
        { text: 'Try again', nextNode: 'finalChoice' },
        { text: 'Return to the intro', nextNode: 'intro' },
      ],
    },
  },
};
// Initialize the game with the first story node
export function initializeGame(renderNodeCallback) {
  const startNode = storyData.nodes[storyData.startNode];
  if (!startNode) {
    console.error('Error: Start node not found.');
    return;
  }
  renderNodeCallback(startNode);
}

export function renderNode(nodeKey, renderNodeCallback) {
  const node = storyData.nodes[nodeKey];
  if (!node) {
    console.error(`Error: Node with key "${nodeKey}" not found.`);
    return;
  }

  const gameContainer = document.querySelector('.game-container');
  if (gameContainer) {
    // Update the background image of the game container
    gameContainer.style.backgroundImage = `url(${node.background})`;
    gameContainer.style.backgroundSize = 'cover';
    gameContainer.style.backgroundPosition = 'center';
  }

  // Set character image if present
  const characterContainer = document.querySelector('.character-container');
  if (characterContainer) {
    // Remove any existing character image if there is one
    characterContainer.innerHTML = '';
    if (node.character) {
      const characterImage = document.createElement('img');
      characterImage.src = node.character;
      characterImage.alt = 'Character';
      characterImage.className = 'character-image';
      characterContainer.appendChild(characterImage);
    }
  }

  // Play sound if available
  if (node.sound) {
    const audio = new Audio(node.sound);
    audio.play().catch((error) => console.error('Failed to play sound:', error));
  }

  renderNodeCallback(node);
}

export default storyData;