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

//let tallyWins = document.getElementById('tally');
//let tallyLosses = document.getElementById('tally-losses');

//let int = document.getElementById('number');
//let integer = 0;




//let winsDisplayElem = document.querySelector('.wins')
//let lossesDisplayElem = document.querySelector('.losses')
//let drawDisplayElem = document.querySelector('.draws') 

//const solve = (a1, a2) => {
   // let wins = 0 // tally 1st band's category wins
  //  let losses = 0 // tally 2nd band's category wins
  //  for (let i=0; i<a1.length; i++) {
      // `?` < -- conditional ternary operator
   //   a1[i] > a2[i] ? wins++ : null // if 1st band's score is higher
  //    a1[i] < a2[i] ? losses++ : null // if 2nd band's score is higher
  //  }
    // format text using 'template literals'
  //  if (wins > losses) {
  //    return `${wins}, ${losses}: Alice made "Kurt" proud!`
   // }
   
  //  else if (wins < losses) {
  //    return `${wins}, ${losses}: Bob made "Jeff" proud!`
  //  }
  //  else {
  //    return `${wins}, ${losses}: that looks like a "draw"! Rock on!`
  //  }
  //}
 //console.log(winsDisplayElem)




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




function tallyWins(a1, a2) {
    let wins = 0
    for (let i=0; i<a1.length; i++) {
        a1[i] > a2[i] ? wins++ : null
    }
    return wins
}
