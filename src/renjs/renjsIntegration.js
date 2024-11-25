//frontend/src/renjs/renjsIntegration.js

let currentBackgroundAudio = null; 
let currentSoundEffect = null

const storyData = {
  startNode: 'intro',
  nodes: {
    intro: {
      text: 'Meoowlo! My name is Mittens. ',
      background: '/assets/images/catcafebackground2.png',
      sound: '/assets/sounds/meows.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Start the story', nextNode: 'cafe' },
      ],
    },
    cafe: {
      text: 'Welcome to the Cat Café. It can be pretty chill here. But I crave the outdoors. Will you help me escape? Be careful though, if we make a wrong choice it will cost me a life. I only have 9.',
      background: '/assets/images/catcafebackground2.png',
      sound: '/assets/sounds/jazz-podcast-night-relaxing-vibes-242886.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Explore the kitchen', nextNode: 'kitchen' },
        { text: 'Explore the pantry', nextNode: 'pantry', isWrongChoice: true },
        { text: 'Inspect the door', nextNode: 'frontDoor' },
      ],
    },
    kitchen: {
      text: 'The kitchen smells like fish. What do you do?',
      background: '/assets/images/kitchen-background.png',
      sound: '/assets/sounds/meows.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Search the fridge', nextNode: 'fridge' },
        { text: 'Let`s explore the bar', nextNode: 'bar' },
        { text: 'Talk to the mysterious cat', nextNode: 'mysteryCat' },
      ],
    },
    fridge: {
      text: 'You open the fridge and find some fish! You decide to take a nibble. But it has samonella and you lose a life.',
      background: '/assets/images/fridge.png',
      sound: '/assets/sounds/life-lost.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Return to the cafe', nextNode: 'cafe', isWrongChoice: true },
      
      ],
    },
    pantry: {
      text: 'The pantry is filled with dry food. One of the bags starts to rip and spills. You lose a life.',
      background: '/assets/images/pantry.png',
      sound: '/assets/sounds/life-lost.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Return to the cafe', nextNode: 'cafe' },
      ],
    },
    mysteryCat: {
      text: 'The cat offers a cryptic clue: "Not all exits are doors."',
      background: '/assets/images/mysteryCat.png',
      sound: '/assets/sounds/meows.mp3',
      choices: [
        { text: 'Follow the clue', nextNode: 'storageRoom' },
        { text: 'Ignore and head to the hallway', nextNode: 'hauntedHallway' },
        { text: 'Ask the cat for more details', nextNode: 'catRiddle' },
      ],
    },
    catRiddle: {
      text: 'The cat purrs and gives you another riddle: "The way out may not be what you expect."',
      background: '/assets/images/catRiddle.png',
      sound: '/assets/sounds/cat-riddle.mp3',
      choices: [
        { text: 'Head to the library', nextNode: 'library' },
        { text: 'Explore the hallway', nextNode: 'hauntedHallway' },
      ],
    },
    storageRoom: {
      text: 'You enter the storage room. A window glows faintly in the dark.',
      background: '/assets/images/storageRoom.png',
      sound: '/assets/sounds/storage-room.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Inspect the window', nextNode: 'window' },
        { text: 'Look around for other exits', nextNode: 'hiddenPassage' },
        { text: 'Leave the room', nextNode: 'intro' },
      ],
    },
    window: {
      text: 'You find the window locked. But you see a river in the distance.',
      background: '/assets/images/window.png',
      sound: '/assets/sounds/window.mp3',
      choices: [
        { text: 'Return to the storage room', nextNode: 'storageRoom' },
        { text: 'Head to the library', nextNode: 'library' },
      ],
    },
    frontDoor: {
      text: 'The front door is locked. You notice a strange keypad next to it.',
      background: '/assets/images/frontDoor.png',
      sound: '/assets/sounds/front-door.mp3',
      character: '/assets/images/mainCat-flipped.png',
      choices: [
        { text: 'Try the keypad', nextNode: 'keypad', isWrongChoice: true },
        { text: 'Go back to the kitchen', nextNode: 'kitchen' },
        { text: 'Talk to the cat again', nextNode: 'mysteryCat' },
      ],
    },
    keypad: {
      text: 'You try to input a code, but it’s a bit tricky with your paws and you lose a life.',
      background: '/assets/images/keypad.png',
      sound: '/assets/sounds/keypad.mp3',
      choices: [
        { text: 'Return to the cafe', nextNode: 'cafe' },
      ],
    },
    backDoor: {
      text: 'You find the back door, but it’s locked too. Something is strange about this place.',
      background: '/assets/images/backDoor.png',
      sound: '/assets/sounds/back-door.mp3',
      character: '/assets/images/mainCat.png',  
      choices: [
        { text: 'Knock on the door', nextNode: 'mysteryCat' },
        { text: 'Look for a key', nextNode: 'keySearch' },
        { text: 'Leave to the library', nextNode: 'library' },
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
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Enter the passage', nextNode: 'undergroundCave' },
        { text: 'Leave and go back to the kitchen', nextNode: 'kitchen' },
      ],
    },
    undergroundCave: {
      text: 'The passage leads to an underground cave. You hear the faint sound of running water.',
      background: '/assets/images/undergroundCave.png',
      sound: '/assets/sounds/river.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Follow the water', nextNode: 'waterExit' },
        { text: 'Turn back', nextNode: 'hiddenPassage' },
      ],
    },
    waterExit: {
      text: 'The water leads you to an exit! Congratulations! You escape the Cat Café!',
      background: '/assets/images/waterExit.png',
      sound: '/assets/sounds/win-game.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Play again', nextNode: 'intro' },
      ],
    },
    hauntedHallway: {
      text: 'You enter a spooky hallway filled with strange shadows.',
      background: '/assets/images/hauntedHallway.png',
      sound: '/assets/sounds/haunted.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Walk down the hallway', nextNode: 'ghost', isWrongChoice: true },
        {text: 'Walk to the left', nextNode: 'finalChoice'},
        { text: 'Return to the storage room', nextNode: 'storageRoom' },
      ],
    },
    ghost: {
      text: 'A ghost appears and you lose a life from the scare!',
      background: '/assets/images/ghost.png',
      sound: '/assets/sounds/life-lost.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Return to the cafe', nextNode: 'cafe' },
      ],
    },
    library: {
      text: 'You stumble upon a library filled with books about escape. Should you read?',
      background: '/assets/images/library.png',
      sound: '/assets/sounds/library.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Read a book on escaping', nextNode: 'escapeBook' },
        { text: 'Check out the hallway', nextNode: 'hauntedHallway' },
        { text: 'Ignore the books and leave', nextNode: 'intro' },
      ],
    },
    escapeBook: {
      text: 'The book gives you an idea! A secret code to unlock a door.',
      background: '/assets/images/escapeBook.png',
      sound: '/assets/sounds/escape-book.mp3',
      choices: [
        { text: 'Try the code', nextNode: 'frontDoor' },
        {text: 'Look for other exits', nextNode: 'hauntedHallway'},
        { text: 'Return to the kitchen', nextNode: 'kitchen' },
      ],
    },
    finalChoice: {
      text: 'You have reached the final door, but it requires a code. The question is, do you know it?',
      background: '/assets/images/finalDoor.png',
      sound: '/assets/sounds/final-choice.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Enter the code you found', nextNode: 'escapeComplete' },
        { text: 'Try to find the code', nextNode: 'library' },
        { text: 'Try something random', nextNode: 'lostLife' },
      ],
    },
    escapeComplete: {
      text: 'You cracked the code and escaped the Cat Café!',
      background: '/assets/images/escapeComplete.png',
      sound: '/assets/sounds/win-game.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Play again', nextNode: 'intro' },
      ],
    },
    lostLife: {
      text: 'The wrong code caused a trap to activate, and you lose a life!',
      background: '/assets/images/lostLife.png',
      sound: '/assets/sounds/life-lost.mp3',
      choices: [
        { text: 'Return to the cafe', nextNode: 'cafe', isWrongChoice: true },
      ],
    },
    bar: {
      text: 'You find a bar with a strange drink. Will you try it?',
      background: '/assets/images/strange-drink.png',
      sound: '/assets/sounds/strange-drink.mp3',
      choices: [
        { text: 'Try the drink', nextNode: 'barDrink' },
        { text: 'Talk to the Barista instead', nextNode: 'barista' },
        { text: 'Go back to the kitchen', nextNode: 'kitchen' },
      ],
    },
    barista: {
      text: 'The Barista is a friendly person. Will you ask for a drink?',
      background: '/assets/images/barista.png',
      sound: '/assets/sounds/barista.mp3',
      character: '/assets/images/mainCat.png',
      choices: [
        { text: 'Ask for a drink', nextNode: 'barDrink' },
        { text: 'Go back to the kitchen', nextNode: 'kitchen' },
      ],
    },
    barDrink: {
      text: 'You try the drink, but it has a strange taste. You lose a life.',
      background: '/assets/images/barDrink.png',
      sound: '/assets/sounds/drink.mp3',
      choices: [
        { text: 'Try again', nextNode: 'cafe', isWrongChoice: true },
      ],
    },
  },
};

// Function to initialize the game with the first story node
export function initializeGame(renderNodeCallback) {
  const startNode = storyData.nodes[storyData.startNode];
  if (!startNode) {
    console.error('Error: Start node not found.');
    return;
  }
  renderNodeCallback(startNode);
}

// Function to stop all audio (used by NavBar and global NavBar)
export function stopAllAudio() {
  if (currentBackgroundAudio) {
    currentBackgroundAudio.pause();
    currentBackgroundAudio = null;
  }
  if (currentSoundEffect) {
    currentSoundEffect.pause();
    currentSoundEffect = null;
  }
}

// Function to render a specific story node
export function renderNode(nodeKey, renderNodeCallback) {
  const node = storyData.nodes[nodeKey];
  if (!node) {
    console.error(`Error: Node with key "${nodeKey}" not found.`);
    return;
  }

  const gameContainer = document.querySelector('.game-container');
  if (gameContainer) {
    gameContainer.style.backgroundImage = `url(${node.background})`;
    gameContainer.style.backgroundSize = 'cover';
    gameContainer.style.backgroundPosition = 'center';
  }

  const characterContainer = document.querySelector('.character-container');
  if (characterContainer) {
    characterContainer.innerHTML = '';
    if (node.character) {
      const characterImage = document.createElement('img');
      characterImage.src = node.character;
      characterImage.alt = 'Character';
      characterImage.className = 'character-image';
      characterContainer.appendChild(characterImage);
    }
  }

  // Handle background music
  if (nodeKey === 'cafe' && !currentBackgroundAudio) {
    currentBackgroundAudio = new Audio('/assets/sounds/jazz-podcast-night-relaxing-vibes-242886.mp3');
    currentBackgroundAudio.loop = true;
    currentBackgroundAudio.volume = 0.2;
    currentBackgroundAudio.play().catch((error) => console.error('Failed to play background music:', error));
  }

  // Handle node-specific sound effects
  if (node.sound) {
    if (currentSoundEffect) {
      currentSoundEffect.pause(); // Stop previous sound effect
    }
    if (nodeKey !== 'cafe') {
      currentSoundEffect = new Audio(node.sound);
      currentSoundEffect.play().catch((error) => console.error('Failed to play sound effect:', error));
    }
  }

  renderNodeCallback(node);
}

export default storyData;