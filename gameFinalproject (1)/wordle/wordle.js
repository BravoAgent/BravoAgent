// was too lazy to put all the words in an array
const dictionary = ['train', 'plane', 'brain', 'audio', 'house', 'phone', 'steel', 'hello'];

// made a "state" for the game
// bassically seperate the game data from the ui

const state = {
    secret: dictionary[Math.floor(Math.random() * dictionary.length)],
    grid: Array(6)
        .fill()
        .map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
};

// function to draw grid

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            drawBox(grid, i, j);
        }
    }

    container.appendChild(grid);
}

// function to display game state in the acc grid
// bassicaly syncrhonize thegame state and ui
// 

function updateGrid() {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        }
    }
}

// function to draw box

function drawBox(container, row, col, letter) {
    const box = document.createElement('div');
    box.className = 'box';
    letter = '';
    box.textContent = letter;
    box.id = `box${row}${col}`;

    container.appendChild(box);
    return box;
}

// function for you to be able to use ur keyboard
// didn't make an on-screen keyboard bc i didn't feel like it and ig it makes it different from the acc wordle

function registerKeyboardEvents() {
    document.body.onkeydown = (e) => {
        const key = e.key;
        if (key === 'Enter') {
            if (state.currentCol === 5) {
                const word = getCurrentWord();
                if (isWordValid(word)) {
                    revealWord(word);
                    state.currentRow++;
                    state.currentCol = 0;
                } else {
                    alert('Not a valid word.');
                }
            }
        }
        if (key === 'Backspace') {
            removeLetter();
        }
        if (isLetter(key)) {
            addLetter(key);
        }

        updateGrid();
    };
}

// function that gets the word that is typed out in the row

function getCurrentWord() {
    return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
}

// function that checks if word is valid or not

function isWordValid(word) {
    return dictionary.includes(word);
}

// checks for all the letter sint he word and displays if they are in the right place or not

function revealWord(guess) {
    const row = state.currentRow;

    for (let i = 0; i < 5; i++) {
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;
      
        if (letter === state.secret[i]) {
            box.classList.add('right');
        } else if (state.secret.includes(letter)) {
            box.classList.add('wrong');
        } else {
            box.classList.add('empty');
        }
    }
    const isWinner = state.secret === guess;
    const isGameOver = state.currentRow === 5;

    if (isWinner) {
        alert('Congratulations!');
    } else if (isGameOver) {
        alert(`Better luck next time! The word was ${state.secret}.`);
    }
}

// determines if pressed key is letter or not

function isLetter(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

// function that adds letter to the grid

function addLetter(letter) {
    if (state.currentCol === 5) return;
    state.grid[state.currentRow][state.currentCol] = letter;
    state.currentCol++;
}

// functoin to remove letter from grid

function removeLetter() {
    if (state.currentCol === 0) return;
    state.grid[state.currentRow][state.currentCol - 1] = '';
    state.currentCol--;
}

// function to start game 

function startup() {
    const game = document.getElementById('game');
    drawGrid(game);

    registerKeyboardEvents();
}

startup();