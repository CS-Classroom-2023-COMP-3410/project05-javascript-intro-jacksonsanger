// Global variables
let array = [];
let animationSpeed = 500;
let sorting = false;
let paused = false;
let pauseResolve;

// DOM elements
const arrayContainer = document.getElementById("arrayContainer");
const algorithmSelector = document.getElementById("algorithmSelector");
const speedSlider = document.getElementById("speedSlider");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const pauseButton = document.createElement("button");
const explanation = document.getElementById("explanation");

// Pause Button Setup
pauseButton.textContent = "Pause";
pauseButton.style.marginLeft = "10px";
document.querySelector(".controls").appendChild(pauseButton);

// Generate a random array
function generateArray(size = 20) {
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  renderArray();
}

// Render the array as bars
function renderArray() {
  arrayContainer.innerHTML = "";
  array.forEach((value) => {
    const bar = document.createElement("div");
    bar.style.height = `${value * 3}px`;
    bar.style.width = `${100 / array.length - 1}%`;
    bar.classList.add("bar");
    bar.innerHTML = `<span>${value}</span>`;
    arrayContainer.appendChild(bar);
  });
}

// Sleep function for animations
async function sleep(ms) {
  if (paused) {
    await new Promise((resolve) => (pauseResolve = resolve));
  }
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Bubble Sort algorithm
async function bubbleSort() {
  const bars = document.querySelectorAll(".bar");
  explanation.textContent = "Bubble Sort: Repeatedly compare adjacent elements and swap if needed.";

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].classList.add("active");
      bars[j + 1].classList.add("active");

      if (array[j] > array[j + 1]) {
        explanation.textContent = `Swapping ${array[j]} and ${array[j + 1]}`;
        await swap(bars[j], bars[j + 1], j, j + 1);
      } else {
        explanation.textContent = `No swap needed for ${array[j]} and ${array[j + 1]}`;
      }

      bars[j].classList.remove("active");
      bars[j + 1].classList.remove("active");
      await sleep(animationSpeed);
    }
    bars[array.length - i - 1].classList.add("sorted");
  }
  bars[0].classList.add("sorted");
  explanation.textContent = "Bubble Sort complete!";
}

// Insertion Sort algorithm
async function insertionSort() {
  const bars = document.querySelectorAll(".bar");
  explanation.textContent = "Insertion Sort: Build a sorted portion of the array one element at a time.";

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    bars[i].classList.add("active");
    explanation.textContent = `Inserting ${key} into the sorted portion of the array.`;

    while (j >= 0 && array[j] > key) {
      bars[j].classList.add("active");
      explanation.textContent = `${array[j]} > ${key}, shifting ${array[j]} right.`;
      array[j + 1] = array[j];
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].innerHTML = `<span>${array[j]}</span>`;
      bars[j].classList.remove("active");
      j--;
      await sleep(animationSpeed);
    }
    array[j + 1] = key;
    bars[j + 1].style.height = `${key * 3}px`;
    bars[j + 1].innerHTML = `<span>${key}</span>`;
    bars[i].classList.remove("active");
    await sleep(animationSpeed);
  }

  explanation.textContent = "Insertion Sort complete!";
  document.querySelectorAll(".bar").forEach((bar) => bar.classList.add("sorted"));
}

// Swap function
async function swap(bar1, bar2, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];

  const height1 = bar1.style.height;
  const text1 = bar1.innerHTML;

  bar1.style.height = bar2.style.height;
  bar1.innerHTML = bar2.innerHTML;

  bar2.style.height = height1;
  bar2.innerHTML = text1;

  await sleep(animationSpeed);
}

// Pause function
function togglePause() {
  paused = !paused;
  pauseButton.textContent = paused ? "Resume" : "Pause";
  if (!paused && pauseResolve) {
    pauseResolve();
  }
}

// Event listeners
startButton.addEventListener("click", async () => {
  if (sorting) return;
  sorting = true;

  const algorithm = algorithmSelector.value;
  if (algorithm === "bubbleSort") {
    await bubbleSort();
  } else if (algorithm === "insertionSort") {
    await insertionSort();
  }

  sorting = false;
});

resetButton.addEventListener("click", () => {
  paused = false; // Reset paused state
  sorting = false; // Reset sorting state
  pauseButton.textContent = "Pause"; // Reset pause button text
  generateArray();
  explanation.textContent = "";
});

pauseButton.addEventListener("click", togglePause);

speedSlider.addEventListener("input", (e) => {
  animationSpeed = 1010 - e.target.value; // Fixed slider functionality
});

// Initialize
generateArray();
