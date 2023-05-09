const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const cellElements = document.querySelectorAll('[data-cell]') 
let circleTurn


cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })

})

function handleClick(event) {
    const cell = event.target
    const currentClass = circleTurn ?  CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)

    //placeMark
    // Check for Win
    // Check for Draw
    // Switch Turns
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}