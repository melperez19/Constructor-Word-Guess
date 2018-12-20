// import letter.js
var Letter = require("./letter");


// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing 
// the current word the user is attempting to guess. That means the constructor should define:

function Word(answer) {
    // An array of new Letter objects representing the letters of the underlying word
    this.letterObjectsArray = [];


    // A function that returns a string representing the word. This should call the function on each letter object (the first 
    // function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.letterObjectsArray.push(letter);
        

    }
    this.answerDisplay = function () {
        answerLog = "";
        for (var i = 0; i < letterObjectsArray.length; i++) {
            answerLog += this.letterObjectsArray[i] + " ";

        }
        console.log(answerLog + "\n");
    }


    // A function that takes a character as an argument and calls the guess function on each letter object (the second function 
    // defined in Letter.js)
    this.userGuess = function (input) {
        for (var i = 0; i < this.letterObjectsArray.length; i++) {
            this.letterObjectsArray[i].guess(input);
        }
    }

}





module.exports = Word;