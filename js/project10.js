const sourceText = document.getElementById("sourceText");
const userInput = document.getElementById("userInput");
const difficultySelector = document.getElementById("difficulty");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const restartButton = document.getElementById("restartButton");
const timerDisplay = document.getElementById("timer");

let generatedText, timerInterval, timeRemaining, startTime;
let typingStarted = false;

// Generate random text based on difficulty
function generateText(difficulty) {
  const easyWords = "The quick brown fox jumps over the lazy dog".split(" ");
  const mediumWords = "Sphinx of black quartz judge my vow".split(" ");
  const hardWords = "Grumpy wizards make toxic brew for the evil queen and jack".split(" ");

  let words;
  if (difficulty === "easy") {
    words = easyWords;
  } else if (difficulty === "medium") {
    words = mediumWords;
  } else {
    words = hardWords;
  }

  // Generate sufficient text for 30 seconds of typing
  const wordCount = difficulty === "easy" ? 100 : difficulty === "medium" ? 150 : 200;
  const randomWords = Array.from({ length: wordCount }, () =>
    words[Math.floor(Math.random() * words.length)]
  );

  return randomWords.join(" ");
}

// Render source text with letter-by-letter highlighting
function renderSourceText(inputValue) {
  const characters = Array.from(generatedText);
  const inputCharacters = Array.from(inputValue);
  sourceText.innerHTML = characters
    .map((char, index) => {
      if (index < inputCharacters.length) {
        if (char === inputCharacters[index]) {
          return `<span class="correct">${char}</span>`;
        } else {
          return `<span class="error">${char}</span>`;
        }
      } else {
        return char;
      }
    })
    .join("");
}

// Start typing activity
function startTyping() {
  if (!typingStarted) {
    typingStarted = true;
    startTime = Date.now();
    timeRemaining = 30; // Start with 30 seconds
    timerDisplay.textContent = `Time Remaining: ${timeRemaining}s`;

    timerInterval = setInterval(() => {
      const elapsedTime = (Date.now() - startTime) / 1000; // Time in seconds
      timeRemaining = Math.max(30 - Math.floor(elapsedTime), 0);

      if (timeRemaining === 0) {
        endTypingTest();
      }

      timerDisplay.textContent = `Time Remaining: ${timeRemaining}s`;
      updateResults(); // Keep updating WPM and accuracy even if typing stops
    }, 1000);
  }
}

// Update WPM and accuracy
function updateResults() {
  const elapsedTime = (Date.now() - startTime) / 60000; // Time in minutes
  const wordsTyped = userInput.value.trim().split(/\s+/).filter((word) => word.length > 0).length;

  // WPM calculation: words typed divided by elapsed time in minutes
  const wpm = elapsedTime > 0 ? Math.round(wordsTyped / elapsedTime) : 0;

  // Accuracy calculation: correct characters / total characters typed so far
  const correctChars = Array.from(userInput.value).filter((char, index) =>
    generatedText[index] === char
  ).length;
  const totalTypedChars = userInput.value.length;
  const accuracy = totalTypedChars > 0 ? Math.round((correctChars / totalTypedChars) * 100) : 100;

  wpmDisplay.textContent = wpm;
  accuracyDisplay.textContent = accuracy;
}

// End typing test
function endTypingTest() {
  clearInterval(timerInterval);
  userInput.disabled = true;
  typingStarted = false;
  updateResults(); // Ensure final WPM and accuracy are updated
  timerDisplay.textContent = "Time's up! Test complete.";
}

// Handle user input
function handleInput() {
  if (!typingStarted) {
    startTyping(); // Start the timer and activity on first keystroke
  }
  const inputValue = userInput.value;
  renderSourceText(inputValue);
  updateResults();
}

// Restart activity
function restartActivity() {
  clearInterval(timerInterval);
  typingStarted = false;
  generatedText = generateText(difficultySelector.value);
  sourceText.textContent = generatedText;
  renderSourceText("");
  wpmDisplay.textContent = "0";
  accuracyDisplay.textContent = "0";
  userInput.value = "";
  userInput.disabled = false;
  timerDisplay.textContent = "Time Remaining: 30s";
  userInput.focus();
}

// Event listeners
difficultySelector.addEventListener("change", restartActivity);
userInput.addEventListener("input", handleInput);
restartButton.addEventListener("click", restartActivity);

// Initialize
restartActivity();
