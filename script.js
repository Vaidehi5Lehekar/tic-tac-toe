const board = document.getElementById("board");
const cells = [];
let currentPlayer = "X";
let gameActive = true;

// Create Tic-Tac-Toe board
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", handleCellClick);
    board.appendChild(cell);
    cells.push(cell);
}

function handleCellClick(event) {
    if (!gameActive) return;
    
    const cell = event.target;
    const index = cell.dataset.index;

    if (cell.textContent === "" && playerSymbol === currentPlayer) {
        updateGame(index);
    } else {
        alert("Wait for your turn!");
    }
}

// Check for a winner
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        );
    });
}

// Redirect to Valentine's page
function goToValentinePage() {
    window.location.href = "valentine.html";
}
