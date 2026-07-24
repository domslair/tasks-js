let randomNumber = Math.floor(Math.random() * 20 + 1)
// console.log(randomNumber);

let playerChances = 5;
let playerAttempts = 0;
let playerWon = false;

for (let i = 0; i < playerChances; i++) {
    let numberGuess = +prompt(
        "Attempt " + (i + 1) + " of " + playerChances +
        "\nGuess a number between 1 and 20"
    );

    playerAttempts++;

    if (numberGuess == randomNumber) {
        alert("Congratulations! You Won.");
        playerWon = true;
        break;
    } else {
        alert("Wrong guess, try again.");
    }
}

if (!playerWon) {
    alert(
        "Better Luck Next Time." +
        "\nCorrect Number: " + randomNumber +
        "\nAttempts Used: " + playerAttempts
    );
}