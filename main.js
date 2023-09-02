imagesList = ["bottle.jpeg", "coffee.jpg", "teddy.jpg", "key.png", "test tube.jpeg", "dice.png"];
objectsList = ["bottle", "coffee", "teddy", "key", "test tube", "dice"];
randomNumber = Math.floor((Math.random()*imagesList.length));
document.getElementById("guessImg").src = imagesList[randomNumber];

randomColor = Math.floor(Math.random()*16777215).toString(16);
document.getElementById("results").style.backgroundColor = "#" + randomColor;
document.getElementById("objectName").innerHTML = "It is a " + objectsList[randomNumber];

console.log("Refresh to see a new study!");
