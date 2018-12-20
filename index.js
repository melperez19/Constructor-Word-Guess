var inquirer = require('inquirer');

// import letter.js
var Letter = require("./letter");

// import word.js
var Word = require("./word");

// ------------------------------------------------Variables to be used---------------------------------------------------------------

// Var for user input in console
var movieGuess = process.argv.slice(2).join(" ");

// Array for all letter entries
var lettersArray = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
lettersArray = lettersArray.split(",")

// list of words to guess
var topMovies = ["the notebook", "superbad", "elf", "titanic", "frozen"]

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Guesses left
var guessesLeft = 10;
var dashes = "_";
var computerWord;
var pickNewWord;

// ----------------------------------------------Game Functions-----------------------------------------------------------------

function playGame() {
    // Array for guessed letters
    var incorrectLetters = [];
    var correctLetters = [];
    // Guesses left
    var guessesLeft = 10;
    // var dashes = computerWord.length;


}

function newWordToGuess() {
    // if (pickNewWord) {

    // Pick Random index from topMovies array
    var randomIndex = Math.floor(Math.random() * topMovies.length);
    var randomWord = topMovies[randomIndex];

    // Pass random word through Word constructor
    computerWord = new Word(randomWord);

    var pickNewWord = false;
    
}


function askForLetter() {

    if (incorrectLetters < guessesLeft) {
        inquirer.prompt([
            {
                type: "input",
                message: "Let's play Top Movies Word Guess! Guess any letter from A-Z!",
                name: "userinput"
            }

        ]).then(function (input) {

            if (!lettersArray.includes(input.userinput) || input.userinput.length > 1) {
                console.log("\nPlease try again!\n");
                // newWordToGuess();
                
            } else {
                if (!lettersArray.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
                    console.log("\nLetter was already Guessed or No Guess Made\n");
                    // newWordToGuess();
                    
                }
                
            }
        });
    }
}

playGame();
newWordToGuess();

askForLetter()




// askForLetter();
// toString();






















// Test if a letter guessed is correct
// var wordComplete = [];
// computerWord.objArray.forEach(completeCheck);

// --------------------------------------------------

// Below code is for testing purposes
// toString();
// console.log();
