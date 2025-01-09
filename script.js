const inputGridSize = document.querySelector("#input-grid-size");
const inputButton = document.querySelector("#input-button");
const resetButton = document.querySelector("#reset-button");
const gridContainer = document.querySelector(".grid-container");

let gridSize = 16;

// Function that inputs and stors the new grid size; (default is 16)
inputButton.addEventListener("click", () => {
    gridSize = inputGridSize.value;
    if (!(gridSize >= 1 && gridSize <= 100)) {
        inputGridSize.value = "";
        inputGridSize.placeholder = "Invalid value (1-100)";
        inputGridSize.focus();
        return;
    }
    console.log("Input grid size: " + gridSize);
    inputGridSize.value = "";
    inputGridSize.placeholder = "1-100";
    addSquares();
});

resetButton.addEventListener("click", () => {
    gridSize = 16;
    console.log("Reset grid size:" + gridSize);
    addSquares();
});

let opacity = 0;

function getRandomColor() {
    opacity = Math.min(opacity + 0.1, 1);
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function addRow(squareColumn) {
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = getRandomColor();
        });
        squareColumn.appendChild(square);
    }
}

function addColumn() {
    gridContainer.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
        const squareColumn = document.createElement("div");
        squareColumn.classList.add("column");
        gridContainer.appendChild(squareColumn);
        addRow(squareColumn);
    }
}

function addSquares() {
    addColumn();
}

document.addEventListener("DOMContentLoaded", addSquares);
