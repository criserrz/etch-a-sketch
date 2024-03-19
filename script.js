const container = document.getElementById("grid-container");
const gridContainerSize = 600;
let isMouseDown = false;
let currentColor = "black"; // Default color
const sketchArea = document.querySelector("#grid-container");
sketchArea.style.width = `${gridContainerSize}px`;
sketchArea.style.height = `${gridContainerSize}px`;

// Function to create grid rows and columns
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  container.innerHTML = ""; // Clear existing grid

  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.style.width = `${gridContainerSize / makeRows(rows) - 2}px`;
    cell.style.height = `${gridContainerSize / makeRows(cols) - 2}px`;
    cell.classList.add("grid-item");
    container.appendChild(cell).className = "grid-item";
  }
}

// Initialize grid
makeRows(16, 16);

// Function to handle mouse over event for coloring squares
function handleColoring(e) {
  if (isMouseDown) {
    e.target.style.backgroundColor = currentColor;
  }
}

// Event listener for mouse down to start coloring
container.addEventListener("mousedown", () => {
  isMouseDown = true;
});

// Event listener for mouse up to stop coloring
container.addEventListener("mouseup", () => {
  isMouseDown = false;
});

// Event listener for changing color
container.addEventListener("mouseover", handleColoring);

// Event listener for click to toggle color
container.addEventListener("click", (e) => {
  if (e.target.style.backgroundColor === "white") {
    e.target.style.backgroundColor = currentColor;
  } else {
    e.target.style.backgroundColor = "white";
  }
});

// Event listener for squares selector input change
document.getElementById("squares").addEventListener("change", (e) => {
  const squares = parseInt(e.target.value);
  if (squares >= 16 && squares <= 100) {
    makeRows(squares, squares);
  }
});

// Function to change current color
function changeColor(color) {
  currentColor = color;
}

// Event listeners for color buttons
document
  .getElementById("black")
  .addEventListener("click", () => changeColor("black"));
document
  .getElementById("white")
  .addEventListener("click", () => changeColor("white"));
