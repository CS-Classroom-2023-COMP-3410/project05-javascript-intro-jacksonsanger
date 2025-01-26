// Story data
const storyNodes = {
  start: {
    text: "You wake up in a dark cave with two exits. One leads left, and the other leads right. What do you do?",
    choices: [
      { text: "Take the left exit", next: "left" },
      { text: "Take the right exit", next: "right" },
    ],
  },
  left: {
    text: "You find yourself in a damp tunnel. You hear faint noises ahead. What do you do?",
    choices: [
      { text: "Move forward cautiously", next: "checkpoint1" },
      { text: "Turn back", next: "start" },
    ],
  },
  right: {
    text: "You find a lit room with a table. There's a map on the table. What do you do?",
    choices: [
      { text: "Pick up the map", next: "checkpoint1" },
      { text: "Ignore the map and continue forward", next: "trap" },
    ],
  },
  checkpoint1: {
    text: "You reached a clearing with a strange marking on the ground. It's quiet here. A path lies ahead.",
    choices: [
      { text: "Follow the path", next: "checkpoint2" },
      { text: "Explore the surrounding area", next: "death1" },
    ],
    checkpoint: true,
  },
  checkpoint2: {
    text: "You find a small village. The villagers offer you food and shelter. There's a forest ahead.",
    choices: [
      { text: "Rest in the village", next: "death2" },
      { text: "Enter the forest", next: "checkpoint3" },
    ],
    checkpoint: true,
  },
  checkpoint3: {
    text: "You discover an abandoned hut in the forest. Inside, you find tools and supplies.",
    choices: [
      { text: "Use the tools to build a raft", next: "checkpoint4" },
      { text: "Search the forest for more supplies", next: "death3" },
    ],
    checkpoint: true,
  },
  checkpoint4: {
    text: "You build a raft and follow a river downstream. You see a castle in the distance.",
    choices: [
      { text: "Head to the castle", next: "end" },
      { text: "Stay on the river", next: "death4" },
    ],
    checkpoint: true,
  },
  trap: {
    text: "You fell into a trap and were never seen again. Game Over.",
    gameOver: true,
  },
  death1: {
    text: "You were attacked by a wild animal while exploring. Game Over.",
    gameOver: true,
  },
  death2: {
    text: "The villagers turned out to be hostile. Game Over.",
    gameOver: true,
  },
  death3: {
    text: "You got lost in the forest and starved. Game Over.",
    gameOver: true,
  },
  death4: {
    text: "The river carried you to dangerous rapids. Game Over.",
    gameOver: true,
  },
  end: {
    text: "Congratulations! You reached the castle and completed your journey. You win!",
    win: true,
  },
};

// Variables
let currentNode = "start";
let progress = 0;
const totalCheckpoints = 4;

// DOM elements
const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");
const progressBar = document.getElementById("progressBar");

// Update the story display
function updateStory() {
  const node = storyNodes[currentNode];
  storyElement.textContent = node.text;
  choicesElement.innerHTML = "";

  // Show choices
  if (!node.gameOver && !node.win) {
    node.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.addEventListener("click", () => handleChoice(choice.next));
      choicesElement.appendChild(button);
    });
  }

  // Show game over or win messages
  if (node.gameOver) {
    choicesElement.innerHTML = `<p class="game-over">Game Over: ${node.text}</p>`;
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", resetGame);
    choicesElement.appendChild(restartButton);
  }

  if (node.win) {
    choicesElement.innerHTML = `<p class="win">Congratulations! ${node.text}</p>`;
    progressBar.style.width = "100%"; // Ensure progress bar fills completely on win
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", resetGame);
    choicesElement.appendChild(restartButton);
  }

  updateProgress(node);
}

// Handle choices
function handleChoice(nextNode) {
  const node = storyNodes[nextNode];

  // Update progress only for checkpoints
  if (node?.checkpoint) {
    progress = Math.min(progress + (100 / (totalCheckpoints + 1)), 100);
  }

  currentNode = nextNode;
  updateStory();
}

// Update progress bar
function updateProgress(node) {
  if (node.win) {
    progressBar.style.width = "100%"; // Explicitly fill progress bar on win
  } else {
    progressBar.style.width = `${progress}%`;
  }
}

// Save game state to localStorage
function saveGame() {
  const gameState = { currentNode, progress };
  localStorage.setItem("storyGame", JSON.stringify(gameState));
  alert("Game saved successfully!");
}

// Load game state from localStorage
function loadGame() {
  const savedGame = localStorage.getItem("storyGame");
  if (savedGame) {
    const { currentNode: savedNode, progress: savedProgress } = JSON.parse(
      savedGame
    );
    currentNode = savedNode;
    progress = savedProgress;
    updateStory();
    alert("Game loaded successfully!");
  } else {
    alert("No saved game found!");
  }
}

// Reset game
function resetGame() {
  currentNode = "start";
  progress = 0;
  updateStory();
}

// Event listeners
document.getElementById("saveGame").addEventListener("click", saveGame);
document.getElementById("loadGame").addEventListener("click", loadGame);
document.getElementById("resetGame").addEventListener("click", resetGame);

// Initialize game
updateStory();
