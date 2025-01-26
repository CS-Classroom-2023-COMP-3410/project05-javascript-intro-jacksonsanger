let currentInput = "0";
let previousInput = null;
let operator = null;
let memory = 0;

const display = document.getElementById("display");

function updateDisplay() {
  display.textContent = currentInput.length > 12 ? parseFloat(currentInput).toExponential(6) : currentInput;
}

function clear() {
  currentInput = "0";
  previousInput = null;
  operator = null;
  updateDisplay();
}

function handleNumber(value) {
  if (currentInput === "0") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function handleOperator(value) {
  if (previousInput === null) {
    previousInput = currentInput;
  } else if (operator) {
    const result = calculate();
    currentInput = result.toString();
    previousInput = result;
  }
  operator = value;
  currentInput = "0";
  updateDisplay();
}

function calculate() {
  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Error";
    default:
      return b;
  }
}

function handleEqual() {
  if (operator) {
    const result = calculate();
    currentInput = result.toString();
    previousInput = null;
    operator = null;
    updateDisplay();
  }
}

function handleSqrt() {
  const num = parseFloat(currentInput);
  if (num >= 0) {
    currentInput = Math.sqrt(num).toString();
    updateDisplay();
  }
}

function handlePercent() {
  const num = parseFloat(currentInput);
  currentInput = (num / 100).toString();
  updateDisplay();
}

function handleMemory(action) {
  switch (action) {
    case "MC":
      memory = 0;
      break;
    case "MR":
      currentInput = memory.toString();
      updateDisplay();
      break;
    case "M+":
      memory += parseFloat(currentInput);
      break;
    case "M-":
      memory -= parseFloat(currentInput);
      break;
  }
}

// Event Listeners
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.dataset.value;

    if (!value && e.target.id) {
      switch (e.target.id) {
        case "clear":
          clear();
          break;
        case "equal":
          handleEqual();
          break;
        case "sqrt":
          handleSqrt();
          break;
        case "percent":
          handlePercent();
          break;
        case "memClear":
          handleMemory("MC");
          break;
        case "memRecall":
          handleMemory("MR");
          break;
        case "memAdd":
          handleMemory("M+");
          break;
        case "memSubtract":
          handleMemory("M-");
          break;
      }
    } else if (!isNaN(value) || value === ".") {
      handleNumber(value);
    } else {
      handleOperator(value);
    }
  });
});

// Initialize display
updateDisplay();
