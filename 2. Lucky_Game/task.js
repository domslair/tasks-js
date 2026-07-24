let randomNumber = Math.floor(Math.random() * 20 + 1) 
// console.log(randomNumber);

let playerChances = 5;
let playerAttempts = 0;
let playerWon = false;
for (let i = 0; i < playerChances; i++) {
    let numberGuess = +prompt("Attempt" + playerAttempts + "of 5 Guess a number between 1 and 20")
    if(numberGuess == randomNumber) {
        alert("Congratulations! You Won.")
        playerAttempts++
        playerWon = true;
        break;
    } else {
        alert("Wrong guess, try again")
        playerAttempts++
    }
}
if(playerWon == false) {
    alert("Better Luck Next Time. \nCorrect Number: " + randomNumber + "\nAttempts Used: " + playerAttempts)
}