// import letter.js
var Letter = require("./letter");


// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing 
// the current word the user is attempting to guess. That means the constructor should define:

function Word(word) {

    // An array of new Letter objects representing the letters of the underlying word
    const letterChar = word.split('');
    this.letters = letterChar.map(function (newLetter) {
        return new Letter(newLetter);
    });

    // A function that returns a string representing the word. This should call the function on each letter object (the first 
    // function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    Word.prototype.toString = function () {
        var foundLetter = false;
        this.letters.forEach(function (letter) {
            for (var i = 0; i < this.letters.length; i++) {
                return this.letters.join(" ");
                foundLetter = true;
            }
        })
    };


    // A function that takes a character as an argument and calls the guess function on each letter object (the second function 
    // defined in Letter.js)
    Word.prototype.guess = function (charGuess) {
        for (var i = 0; i < this.letters.length; i++) {
            return this.letters.guess(charGuess);
        }
    }

}

module.exports = Word;