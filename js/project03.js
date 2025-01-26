const gameGrid = document.getElementById("gameGrid");
const moveCounter = document.getElementById("moveCounter");
const timer = document.getElementById("timer");
const restartBtn = document.getElementById("restartBtn");

let cards = [];
let flippedCards = [];
let moves = 0;
let timerInterval = null;
let timeElapsed = 0;

// Generate card pairs and shuffle
function initializeGame() {
  const symbols = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const cardPairs = [...symbols, ...symbols];
  cards = shuffleArray(cardPairs);
  createGrid();
  resetGameInfo();
}

// Shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Create card grid
function createGrid() {
  gameGrid.innerHTML = "";
  cards.forEach((symbol, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.symbol = symbol;

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front"></div>
        <div class="card-back">${symbol}</div>
      </div>
    `;

    card.addEventListener("click", handleCardClick);
    gameGrid.appendChild(card);
  });
}

// Handle card click
function handleCardClick(e) {
  const clickedCard = e.currentTarget;

  if (
    clickedCard.classList.contains("flipped") ||
    clickedCard.classList.contains("matched") ||
    flippedCards.length === 2
  ) {
    return;
  }

  flippedCards.push(clickedCard);
  clickedCard.classList.add("flipped");

  if (flippedCards.length === 2) {
    moves++;
    moveCounter.textContent = moves;
    checkForMatch();
  }
}

// Check for match
function checkForMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.symbol === card2.dataset.symbol) {
    setTimeout(() => {
      card1.classList.add("matched");
      card2.classList.add("matched");
      flippedCards = [];
      if (document.querySelectorAll(".card.matched").length === cards.length) {
        clearInterval(timerInterval);
        alert(`Game completed in ${moves} moves and ${formatTime(timeElapsed)}!`);
      }
    }, 500); // Delay to allow flip animation to finish
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCards = [];
    }, 1000); // Flip back after 1 second
  }
}

// Start timer
function startTimer() {
  timeElapsed = 0;
  timerInterval = setInterval(() => {
    timeElapsed++;
    timer.textContent = formatTime(timeElapsed);
  }, 1000);
}

// Format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(
    2,
    "0"
  )}`;
}

// Reset game info
function resetGameInfo() {
  moves = 0;
  moveCounter.textContent = moves;
  clearInterval(timerInterval);
  timer.textContent = "00:00";
  startTimer();
}

// Restart game
restartBtn.addEventListener("click", () => {
  initializeGame();
});

// Initialize on load
initializeGame();
