//For player1
var n = Math.random();
var randomNumber1 = 1 + Math.floor(n * 6);
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImgSrc1 = "images/" + randomImage1;
var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSrc1);

// For player2

var m = Math.random();
var randomNumber2 = 1 + Math.floor(m * 6);
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImgSrc2 = "images/" + randomImage2;
var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImgSrc2);

// winner title

if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "Player1 Wins🏆";
} else if (randomNumber1 < randomNumber2) {
	document.querySelector("h1").innerHTML = "Player2 Wins🏆";
} else {
	document.querySelector("h1").innerHTML = "Its a TIE❗️";
}
