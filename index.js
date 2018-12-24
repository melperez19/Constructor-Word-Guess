var inquirer = require('inquirer');

// import word.js
var Word = require("./word");

// ------------------------------------------------Variables to be used---------------------------------------------------------------

// Var for user input in console
var movieGuess = process.argv.slice(2).join(" ");

// Array for all letter entries
var lettersArray = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
lettersArray = lettersArray.split(",")

// list of starter words to guess
var topMovies = ["the notebook", "superbad", "elf", "titanic", "frozen"]

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Guesses left
var guessesLeft = 10;

var dashes = ["_"];

var computerWord;
var pickNewWord;

// ----------------------------------------------Game Functions-----------------------------------------------------------------

function playGame() {
    // Array for guessed letters
    var incorrectLetters = [];
    var correctLetters = [];
    // Guesses left
    var guessesLeft = 10;
   


}

function newWordToGuess() {

    // Pick Random index from topMovies array
    var randomIndex = Math.floor(Math.random() * topMovies.length);
    var randomWord = topMovies[randomIndex];

    // Pass random word through Word constructor
    computerWord = new Word(randomWord);
    // console.log(randomWord.toString());

    var pickNewWord = false;

}


function askForLetter() {

    inquirer.prompt([
        {
            type: "input",
            message: "Let's play Top Movies Word Guess! Guess any letter from A-Z!",
            name: "userinput"
        }

    ]).then(function (input) {
        // If the letter is already guessed
        //  - display an error
        // Else If the letter is NOT correct (doesn't exist in the current word)
        //  - display an error
        //  - decrease the # of guesses remaining
        // Else If the letter IS correct (does exist in the current word)
        //  - display the word, with this letter revealed

        // If the word is fully revealed
        //  - Display success
        //  - Pick a new word
        // If the word is NOT fully revealed
        //  - ask for a new letter

        console.log(guessesLeft--);
        if (!lettersArray.includes(input.userinput) || input.userinput.length > 1) {
            guessesLeft--;
            pickNewWord = true;

            console.log("\nPlease try again!\n");
            // newWordToGuess();

        } else {
            if (!lettersArray.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
                guessesLeft--;
                console.log("\nLetter was already Guessed or No Guess Made\n");
                // newWordToGuess();

            }

        }
        askForLetter();
    });
}


playGame();
newWordToGuess();
askForLetter();
























// Test if a letter guessed is correct
// var wordComplete = [];
// computerWord.objArray.forEach(completeCheck);

// --------------------------------------------------

// Below code is for testing purposes
// toString();
// console.log();
