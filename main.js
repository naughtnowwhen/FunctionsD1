'use strict';

//Welcome message
var userName = prompt('Hi, welcome to my About Nikki site, what\s your name?');
alert('Welcome to my page ' + userName +'!');
console.log('welcome to my page ' + userName);

//Bulldog question
var bullDog = prompt('Does Nikki want a French Bulldog?');
bullDog = bullDog.toLowerCase();
console.log('Does Nikki want a French Bulldog?' + bullDog);

if(bullDog === 'yes' || bullDog === 'y') {
    alert('Way to go! I really want a french bulldog!');
}

else if (bullDog === 'no' || bullDog === 'n') {
    alert('Oh no! I love frenchies!')
}

else {
    alert('Please respond using y or n, or yes or no.');
}

//Pets Question
var pets = prompt('Does Nikki have any pets?');
pets = pets.toLowerCase();
console.log('Does Nikki have any pets?' + pets);

if(pets === 'yes' || pets === 'y') {
    alert('You are correct! She as 2 cats: Waldo and Nala!');
}

else if(pets ==='no' || pets === 'n') {
    alert('You are incorrect, minus 5 points for Slytherin!');
}

else {
    alert('Please respond using y or n, or yes or no.');
}

//Snowman question
var snowman = prompt('Does Nikki want to build a snowman?');
snowman = snowman.toLowerCase();
console.log('Does Nikki want to build a snowman?' + snowman)

if(snowman === 'yes' || snowman === 'y') {
    alert('I always want to build a snowman!');
}

else if (snowman === 'no' || snowman === 'n') {
    alert('Who doesn\'t want to build a snowman?');
}

else {
    alert('Please respond using y or n, or yes or no.');
}

//Mangoes question
var mangoes = prompt('Does Nikki love mangoes?');
mangoes = mangoes.toLowerCase();
console.log('Does Nikki love mangoes?' + mangoes);

if(mangoes === 'yes' || mangoes === 'y') {
    alert('I looooove mangoes!');
}

else if (mangoes === 'NO' || mangoes === 'N') {
    alert('Mangoes are life!');
}

else {
    alert('Please respond using y or n, or yes or no.');
}

 //FairyTail question
var fairyTail = prompt('Is Nikki\'s favorite anime FairyTail?');
fairyTail = fairyTail.toLowerCase();
console.log('Is Nikki\'s favorite anime FairyTail?' + fairyTail);

if(fairyTail === 'yes' || fairyTail === 'y') {
    alert('Who is your favorite character?');
}

else if (fairyTail === 'no' || fairyTail === 'n') {
    alert('You are the weakest link! Goodbye!');
}
else {
    alert('Please respond using y or n, or yes or no.');
}

//Guess number
var guess= prompt('Can you guess my favorite number? It is between 1-20.');
console.log('Can you guess my favorite number?' + guess);

var number = 16;
var guesses = parseInt(guess);
for(var i = 0; i < 4; i++) { 
 if(guesses === number){
    alert('Homerun! You guessed my number!');
    console.log('homerun' + guesses)
    break;
 } else if(guesses < number) {
     guess = prompt('Your guess was too low. There are no low riders here so please try again!');
     guesses = parseInt(guess);
     console.log('too low' + guess);
} else (guesses > number) 
    guess = prompt('Whoa! That\'s too high. Guess again.');
    guesses = parseInt(guess);
    console.log('Whoa! That\'s too high.' + number);
}

//multiple answers
//global variables
var answeredCorrectly;
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
} while(guessedCounter > 0 && !answeredCorrectly);