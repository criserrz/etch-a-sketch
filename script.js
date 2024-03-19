const container = document.getElementById("grid-container");
const gridContainerSize = 600;
let isMouseDown = false;
let currentColor = "white"; // Default color

// Function to create grid rows and columns
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  container.innerHTML = ""; // Clear existing grid

  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.style.width = `${gridContainerSize / cols - 2}px`; // Adjusted calculation
    cell.style.height = `${gridContainerSize / rows - 2}px`; // Adjusted calculation
    cell.classList.add("grid-item");
    container.appendChild(cell);
  }

  return rows; // Return the number of rows created
}

// Initialize grid
const initialSize = makeRows(16, 16);

// Function to handle mouse over event for coloring squares
function handleColoring(e) {
  if (isMouseDown && e.target.classList.contains('grid-item')) {
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
    e.target.style.backgroundColor = "black";
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

// Event listener for mouse move to continue coloring
document.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    handleColoring(e);
  }
});

// Event listener for mouse up to stop coloring even when outside the drawing area
document.addEventListener("mouseup", () => {
  isMouseDown = false;
});
