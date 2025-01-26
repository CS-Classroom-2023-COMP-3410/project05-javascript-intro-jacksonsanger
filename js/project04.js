const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: 3,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "George Orwell", "Mark Twain"],
    correct: 0,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Pb", "Pt"],
    correct: 1,
  },
  {
    question: "In what year did the Titanic sink?",
    options: ["1912", "1905", "1920", "1918"],
    correct: 0,
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correct: 2,
  },
  {
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correct: 1,
  },
  {
    question: "Which gas do plants primarily use for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: 1,
  },
  {
    question: "Which country is the origin of the Olympic Games?",
    options: ["Italy", "Greece", "Egypt", "France"],
    correct: 1,
  },
];
  
  let currentQuestionIndex = 0;
  let userAnswers = [];
  let correctAnswers = 0;
  
  const quizContainer = document.getElementById("quiz");
  const nextBtn = document.getElementById("nextBtn");
  const restartBtn = document.getElementById("restartBtn");
  const quizFooter = document.getElementById("quiz-footer");
  const summaryContainer = document.getElementById("summary");
  const scoreDisplay = document.getElementById("score");
  
  function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex] ?? null;
  
    quizContainer.innerHTML = `
      <div class="question">${question.question}</div>
      <ul class="options">
        ${question.options
          .map(
            (option, index) =>
              `<li>
                <label>
                  <input type="radio" name="option" value="${index}" ${
                    userAnswer === index ? "checked" : ""
                  }>
                  ${option}
                </label>
              </li>`
          )
          .join("")}
      </ul>
      <p id="feedback" class="hidden"></p>
      <p id="scoreTracker">Score: ${correctAnswers}/${currentQuestionIndex} correct</p>
    `;
  }
  
  function getSelectedAnswer() {
    const selected = document.querySelector("input[name='option']:checked");
    return selected ? parseInt(selected.value) : null;
  }
  
  function giveFeedback(isCorrect) {
    const feedback = document.getElementById("feedback");
    feedback.classList.remove("hidden");
    feedback.textContent = isCorrect ? "Correct!" : "Wrong!";
    feedback.style.color = isCorrect ? "green" : "red";
  }
  
  function loadReviewScreen() {
    quizContainer.innerHTML = `
      <h2>Review Your Answers</h2>
      ${questions
        .map((question, index) => {
          const userAnswer = userAnswers[index];
          const isCorrect = userAnswer === question.correct;
  
          return `
            <div class="question">
              ${index + 1}. ${question.question}
            </div>
            <ul class="options">
              ${question.options
                .map(
                  (option, i) =>
                    `<li>
                      <label>
                        <input type="radio" name="question${index}" value="${i}" ${
                      userAnswer === i ? "checked" : ""
                    }>
                        ${option}
                      </label>
                      ${
                        i === question.correct
                          ? " <span class='correct'>(Correct)</span>"
                          : ""
                      }
                    </li>`
                )
                .join("")}
            </ul>
          `;
        })
        .join("")}
      <button id="finalizeBtn">Finalize Answers</button>
    `;
  
    document.getElementById("finalizeBtn").addEventListener("click", finalizeQuiz);
  }
  
  function finalizeQuiz() {
    correctAnswers = 0;
  
    // Recalculate score based on updated answers
    questions.forEach((question, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      const newAnswer = selected ? parseInt(selected.value) : null;
      userAnswers[index] = newAnswer;
  
      if (newAnswer === question.correct) {
        correctAnswers++;
      }
    });
  
    showSummary();
  }
  
  function showSummary() {
    quizContainer.classList.add("hidden");
    quizFooter.classList.add("hidden");
    summaryContainer.classList.remove("hidden");
  
    scoreDisplay.innerHTML = `
      <h2>Quiz Summary</h2>
      <p>You scored ${correctAnswers} out of ${questions.length}.</p>
      <div>
        ${questions
          .map((question, index) => {
            const userAnswer =
              userAnswers[index] !== null
                ? questions[index].options[userAnswers[index]]
                : "No Answer";
            const correctAnswer = questions[index].options[questions[index].correct];
  
            return `
              <div>
                <strong>${index + 1}. ${question.question}</strong>
                <p>Your Answer: ${userAnswer}</p>
                <p>Correct Answer: ${correctAnswer}</p>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }
  
  function restartQuiz() {
    // Reset all quiz data
    currentQuestionIndex = 0;
    userAnswers = [];
    correctAnswers = 0;
  
    // Reset UI
    quizContainer.classList.remove("hidden");
    quizFooter.classList.remove("hidden");
    summaryContainer.classList.add("hidden");
    summaryContainer.innerHTML = ""; // Clear the summary container content
    quizContainer.innerHTML = "";
    nextBtn.classList.remove("hidden");
  
    loadQuestion();
  }
  
  nextBtn.addEventListener("click", () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer === null) {
      alert("Please select an answer.");
      return;
    }
  
    // Store user answer and give feedback
    userAnswers[currentQuestionIndex] = selectedAnswer;
    const isCorrect = selectedAnswer === questions[currentQuestionIndex].correct;
    if (isCorrect) correctAnswers++;
    giveFeedback(isCorrect);
  
    // Wait 1 second before proceeding
    setTimeout(() => {
      currentQuestionIndex++;
  
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        nextBtn.classList.add("hidden");
        loadReviewScreen();
      }
    }, 1000);
  });
  
  restartBtn.addEventListener("click", restartQuiz);
  
  // Initialize Quiz
  loadQuestion();
  