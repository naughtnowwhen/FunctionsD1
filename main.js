'use strict';

//Welcome message
// var userName = prompt('Hi, welcome to my About Nikki site, what\s your name?');
// alert('Welcome to my page ' + userName +'!');

var rightAnswers = [];
var wrongAnswers = [];




//Bulldog question
var functionBulldog = function(){
  var bullDog = prompt('Does Nikki want a French Bulldog?');
  bullDog = bullDog.toLowerCase();
//   bullDog = bullDog.toLowerCase();

  if(bullDog === 'yes' || bullDog === 'y') {
    rightAnswers.push(bullDog);
    alert('Way to go! I really want a french bulldog!');
  }

  else if (bullDog === 'no' || bullDog === 'n') {
    wrongAnswers.push(bullDog);
    alert('Oh no! I love frenchies!');
  }

  else {
    var bullDog = prompt('Please respond using y or n, or yes or no.');
  }
};

functionBulldog();



//Pets Question

var functionPets = function(){
  var pets = prompt('Does Nikki have any pets?');
  pets = pets.toLowerCase();

  if(pets === 'yes' || pets === 'y') {
    alert('You are correct! She as 2 cats: Waldo and Nala!');
    rightAnswers.push(pets);
  }

  else if(pets ==='no' || pets === 'n') {
    alert('You are incorrect, minus 5 points for Slytherin!');
    wrongAnswers.push(pets);
  }

  else {
    var pets = prompt('Please respond using y or n, or yes or no.');
  }

};

functionPets();



//Snowman question

var functionSnowman = function(){

  var snowman = prompt('Does Nikki want to build a snowman?');
  snowman = snowman.toLowerCase();
  console.log('Does Nikki want to build a snowman?' + snowman);

  if(snowman === 'yes' || snowman === 'y') {
    alert('I always want to build a snowman!');
    rightAnswers.push(snowman);

  }

  else if (snowman === 'no' || snowman === 'n') {
    alert('Who doesn\'t want to build a snowman?');
    wrongAnswers.push(snowman);

  }

  else {
    var snowman = prompt('Please respond using y or n, or yes or no.');
  }
};

functionSnowman();


var functionMangoes = function() {
//Mangoes question
  var mangoes = prompt('Does Nikki love mangoes?');
  mangoes = mangoes.toLowerCase();

  if(mangoes === 'yes' || mangoes === 'y') {
    alert('I looooove mangoes!');
    rightAnswers.push(mangoes);
  }

  else if (mangoes === 'NO' || mangoes === 'N') {
    alert('Mangoes are life!');
    wrongAnswers.push(mangoes);
  }

  else {
    var mangoes = prompt('Please respond using y or n, or yes or no.');
  }

};
functionMangoes();




//FairyTail question

var functionFairyTail = function() {

  var fairyTail = prompt('Is Nikki\'s favorite anime FairyTail?');
  fairyTail = fairyTail.toLowerCase();

  if(fairyTail === 'yes' || fairyTail === 'y') {
    rightAnswers.push(fairyTail);
    alert('Who is your favorite character?');
  }

  else if (fairyTail === 'no' || fairyTail === 'n') {
    wrongAnswers.push(fairyTail);
    alert('You are the weakest link! Goodbye!');
  }
  else {
    var fairyTail = prompt('Please respond using y or n, or yes or no.');
  }
};

functionFairyTail();





Guess number




var functionNumberGame = function () {
  var guess= prompt('Can you guess my favorite number? It is between 1-20.');
  var guessCorrect = false;
  var turnsLeft = 4;
  do {
    var number = 16;
    var guesses = parseInt(guess);
    for(var i = 0; i < 4; i++) {
    //   turnsLeft --;
      console.log(turnsLeft, 'this is turns left is it running?');
    }
    if(guesses === number){
      alert('Homerun! You guessed my number!');
      console.log('homerun' + guesses);
      guessCorrect = true;
      rightAnswers.push();
      break;
      console.log(guessCorrect);
    } else if(guesses < number) {
      guess = prompt('Your guess was too low. There are no low riders here so please try again!');
      console.log(turnsLeft);
      turnsLeft --;
      guesses = parseInt(guess);
      console.log('too low' + guess);
    } else if(guesses > number){
      guess = prompt('Whoa! That\'s too high. Guess again.');
      guesses = parseInt(guess);
      console.log('Whoa! That\'s too high.' + number);
    }
    // guessCorrect === false && turnsLeft >0
  } while(guessCorrect === false && turnsLeft >0);
};

functionNumberGame();


// multiple answers
// global variables
var answeredCorrectly = false;
var correctGuess = 0;
var guessCounter = 6;
var countries = ['Germany', 'Czech Republic', 'Poland', 'Lithuania', 'Japan'];

do{
   var countryAnswer = prompt('Name a country you think I have visited.');

for(var i = 0; i < countries.length; i++) {
    if(countries[i] === countryAnswer) {
       answeredCorrectly = true;
       break;
    }
}

if(answeredCorrectly) {
    alert(countries[i]);
    alert('nice job! I have visited all of them.')
    correctGuesses++;
} else {
    alert('Nice try but guess again.');
}
    guessCounter--;
} while(guessedCounter > 0 && answeredCorrectly);