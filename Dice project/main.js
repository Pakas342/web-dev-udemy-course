var URLs = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

function rollDice() {
    var result = (Math.round(Math.random() * 5));
    console.log(result)
    return result
}

function defineWinner(player1Roll, player2Roll) {
    if (player1Roll > player2Roll) {
        return "player 1 Won!";
    } else if (player1Roll < player2Roll) {
        return "player 2 Won!";
    } else return "Draw";
}

function setDiceImage(playerDiceSelector, playerDiceValue) {
    document.querySelector(playerDiceSelector).setAttribute("src", URLs[playerDiceValue]);
}

function startGame() {
    var player1Dice = rollDice();
    var player2Dice = rollDice();
    var result = defineWinner(player1Dice, player2Dice);
    document.querySelector(".title").textContent = result;
    setDiceImage("#player1Dice", player1Dice)
    setDiceImage("#player2Dice", player2Dice)
}

document.addEventListener('DOMContentLoaded', startGame)
