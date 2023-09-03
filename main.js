imagesList = ["bottle.jpeg", "coffee.jpg", "teddy.jpg", "key.png", "test tube.jpeg", "dice.png"];
objectsList = ["bottle", "coffee", "teddy", "key", "tube", "dice"];
mobileNetPredictionList = ["bottle", "smiley face", "smiley face", "stitches", "line", "rain"];
googleLensPredictionList = ["bottle", "coffee", "teddy", "key", "tube", "dice"];

randomNumber = Math.floor((Math.random()*imagesList.length));
document.getElementById("objectName").innerHTML = "It is a " + objectsList[randomNumber];
document.getElementById("guessImg").src = imagesList[randomNumber];
document.getElementById("mobileNetResults").innerHTML = "Mobile Net says it's a " + mobileNetPredictionList[randomNumber];
document.getElementById("googleLensResults").innerHTML = "Google Lens says it's a " + googleLensPredictionList[randomNumber];
if ((googleLensPredictionList[randomNumber] == objectsList[randomNumber]) && (mobileNetPredictionList[randomNumber] !== objectsList[randomNumber])) {
    document.getElementById("testResult").innerHTML = "Google Lens wins!";
} else {
    document.getElementById("testResult").innerHTML = "Its a tie!";
}


randomColor = Math.floor(Math.random()*16777215).toString(16);
document.getElementById("results").style.backgroundColor = "#" + randomColor;


console.log("Refresh to see a new study!");
