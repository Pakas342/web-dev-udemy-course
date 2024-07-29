prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

console.log(loveScore);

if (loveScore === 100) {
    console.log("Perfect score!")
} else {
    console.log("Not a perfect score :(")
}