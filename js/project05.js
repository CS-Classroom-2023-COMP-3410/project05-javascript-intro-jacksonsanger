const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

const brushSizeInput = document.getElementById("brushSize");
const brushColorInput = document.getElementById("brushColor");
const bgColorInput = document.getElementById("bgColor");

const undoBtn = document.getElementById("undoBtn");
const clearBtn = document.getElementById("clearBtn");
const saveBtn = document.getElementById("saveBtn");

let drawing = false;
let brushSize = 5; // Default brush size
let brushColor = "#000000"; // Default brush color
let backgroundColor = "#ffffff"; // Default canvas background

let strokes = [];
let currentStroke = [];

canvas.width = 800;
canvas.height = 500;

// Set initial canvas background color
function initializeCanvas() {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Update brush settings
brushSizeInput.addEventListener("input", () => {
  brushSize = parseInt(brushSizeInput.value);
});

brushColorInput.addEventListener("input", () => {
  brushColor = brushColorInput.value;
});

bgColorInput.addEventListener("input", () => {
  backgroundColor = bgColorInput.value;
  redrawCanvas(); // Ensure all strokes are visible after changing the background
});

// Start drawing
canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  currentStroke = [];
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;
  ctx.lineWidth = brushSize;
  ctx.strokeStyle = brushColor;
  ctx.lineCap = "round";
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  currentStroke.push({ x: e.offsetX, y: e.offsetY, size: brushSize, color: brushColor });
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
  if (drawing) {
    strokes.push([...currentStroke]);
    drawing = false;
  }
});

// Undo last stroke
undoBtn.addEventListener("click", () => {
  strokes.pop();
  redrawCanvas();
});

// Clear canvas and reset everything
clearBtn.addEventListener("click", () => {
  strokes = [];
  brushSize = 5; // Reset brush size
  brushColor = "#000000"; // Reset brush color
  backgroundColor = "#ffffff"; // Reset canvas background

  // Reset UI inputs to defaults
  brushSizeInput.value = 5;
  brushColorInput.value = "#000000";
  bgColorInput.value = "#ffffff";

  // Clear canvas
  initializeCanvas();
});

// Save canvas as an image
saveBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "canvas-drawing.png";
  link.href = canvas.toDataURL();
  link.click();
});

// Clear the canvas and redraw strokes
function redrawCanvas() {
  // Fill the background
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Redraw all strokes
  strokes.forEach((stroke) => {
    ctx.beginPath();
    stroke.forEach((point, index) => {
      ctx.lineWidth = point.size;
      ctx.strokeStyle = point.color;
      ctx.lineCap = "round";

      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
      }
    });
  });
}

// Initialize the canvas on load
initializeCanvas();
