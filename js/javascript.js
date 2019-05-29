const words = ["mario", "pikachu", "link", "fox"]

// Random Word Generator
var randomNumber = Math.floor(Math.random()*words.length);
var pickedWord = words[randomNumber];
var underScore = [];
var rightGuess = [];
var wrongGuess = [];
var docUnderScore = document.getElementsByClassName("underscores");
console.log(pickedWord);



// Underscore Generator Loop

let generateUnderscore = () => {
    for (i=0; i<pickedWord.length; i++){
        underScore.push("_");
    }
    return underScore;
}

console.log(generateUnderscore());

// Player Guess ??
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    if (pickedWord.indexOf(keyword) > -1){
        rightGuess.push(keyword);
        ///
        console.log(rightGuess);
        underScore[pickedWord.indexOf(keyword)] = keyword;
            docUnderScore[0].innerHTML = underScore.join("");
        if (underScore.join("") == pickedWord){
            alert("YOU GOT IT!");
        }
    }
    else{
        wrongGuess.push(keyword);
        console.log(wrongGuess);
        wrongGuess[pickedWord.indexOf(keyword)] != keyword;
            wrongGuess[0].innerHTML = wrongGuess.join("");

    }
    
});