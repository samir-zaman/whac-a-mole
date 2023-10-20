const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let targetPosition
let currentTime = 60

/* function randomSquare adds and removes mole from a random square. Called on in the 
moveMole function below, moving the mole at an interval of 500 milliseconds*/
function randomSquare() {                      
    squares.forEach(square => {             
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    targetPosition = randomSquare.id
}

/* adds click functionality and increments score */
squares.forEach(square => {
    square.addEventListener('mousedown', () => { /*'mousedown' instead of 'click' b/c mousedown fires as soon as button is pressed, while click only fires after a full press and release */
        if (square.id == targetPosition) {
            result++
            score.textContent = result
            targetPosition = null /* resets targetPos to null after 1 click so player can't accrue multiple points from clicking on 1 mole multiple times */
        }
    })
})

/* function moveMole calls on the earlier randomSquare function at an interval of 500 milliseconds */
function moveMole(){
    let timerId = setInterval(randomSquare, 500) 
}

moveMole()

/*countDown function decrements time and issues a pop-up when time's up. This function is called on in a setInterval function in the final line of code */
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerID)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerID = setInterval(countDown, 1000)
