let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("homescore-el")
let guestEl = document.getElementById("guesscore-el")

function one() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function two() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function three() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function oneG() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function twoG() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function threeG() {
    guestScore += 3
    guestEl.textContent = guestScore
}
