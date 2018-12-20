
// Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder
// (such as an underscore), depending on whether or not the user has guessed the letter.

function Letter(letter) {
    this.letter = letter;
    this.letterGuessed = false;

    // A function that returns the underlying character if the letter has been guessed, or a 
    // placeholder(like an underscore) if the letter has not been guessed

    // HINT: If you name your letter's display function toString, JavaScript will call that function 
    // automatically whenever casting that object to a string

    this.toString = function () {
        if (this.letterGuessed === false) {
            return this.letter;
        } else {
            return "_";
        }

    };

    // A function that takes a character as an argument and checks it against the underlying character, 
    // updating the stored boolean value to true if it was guessed correctly

    this.guess = function (guess) {
        if (guess.toLowerCase() === this.letter.toLowerCase()) {
            this.letterGuessed = true;
            return true;
        } else {
            return false;
            
        }
    }
}


module.exports = Letter;









