const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let targetPosition
let currentTime = 60

function randomSquare() {
    squares.forEach(square => {             //not sure why this foreach function exists
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    targetPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == targetPosition) {
            result++
            score.textContent = result
            targetPosition = null           //not sure why this line exists
        }
    })
})

function moveMole(){
    let timerId = null //wondering if I can combine this line with the next
    timerId = setInterval(randomSquare, 500) 
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerID)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerID = setInterval(countDown, 1000)
