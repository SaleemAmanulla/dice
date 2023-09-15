// Dice 1

var randomnum1 = Math.floor(Math.random() * 6) +1;

var randomDice1 = "dice"+ randomnum1 + ".png";

var randomDiceImage1 = "./asserts/images/" + randomDice1;

var image1 = document.querySelectorAll("img")[0];


image1.setAttribute("src",randomDiceImage1);

// Dice 2

var randomnum2 = Math.floor(Math.random()*6)+1;

var randomDice2 = "dice" + randomnum2 + ".png";

var randomDiceImage2 = "./asserts/images/" + randomDice2;

var image2 = document.querySelectorAll("img")[1];


image2.setAttribute("src",randomDiceImage2);

// Player1 Won

if (randomnum1>randomnum2){
    document.querySelector("h1").innerHTML= "Player 1 Wins"
}
// Player2 won
else if (randomnum2>randomnum1){
    document.querySelector("h1").innerHTML="Player 2 Wins"
}
else{
    document.querySelector("h1").innerHTML ="Draw"
}
