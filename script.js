const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]') 
const board = document.getElementById('board') 
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn
// variables for arry how many times won/lost set to 0
// varibales for each write to html output 
// reset automatically function

startGame()


function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
})
setboardHoverClass()
}

function handleClick(event) {
    const cell = event.target
    const currentClass = circleTurn ?  CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    }
    //placeMark
    // Check for Win
    // Check for Draw
    // Switch Turns
    swapTurns()
    setBoardHoverClass()
}

function endGame(draw) {
    if (draw) {

    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessagElement.classList.add('show')
    }


function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }

}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

// if endgame is true then end game
// also add tally counter 
// style it (simple no animation)
