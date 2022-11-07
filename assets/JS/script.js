// identify variables you need to use from the HTML id's and classes.
// You will need to create child variables that allow for list items (lesson 8) that will change for each question.
// Create a timer in top right corner (lesson10) 
//  // Create an event handler that when wrong answer is clicked, it decrements time from the timer. (lesson 12)
// Create a keyboard event that displays a value of right or wrong when the user answers (lesson16)
// Look at lesson 18 to see if it will help with the forward movement of the questions once they have been answered.
// Use localstorage to record scores of correct vs. incorrect answers and tally at the end. (lesson 22) (lesson 24)
// Create form for user to input their initials at the end of the questions and it saves it. (lesson 22) (lesson 25)
// Questions:
// // Write a loop function that will insert answers  then remove them after question moves on.
// high scores link in top left.
// Create click event on each of the answers for wrong or right.



// style:
// // create responsive buttons that change when hovered over.

var timerEl = document.getElementById('Timercontainer');

// Setting initial timer at 75 seconds
function countdown() {
    var timeleft = 75;

    var timeInterval = setInterval(function (){

    },1)
}

var questiongroups = document.querySelector(".questions");
var olTags = document.querySelector("ol");
var liTags = doument.querySelectorAll("li");
var startup= document.querySelector("#StartQuiz")
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var question1 = "Commonly used data types DO NOT Include:";
var question2 = "The condition in an if/else statement is enclosed within _____.";
var question3 = "Arrays in JavaScript can be used to store _____.";
var question4 = "String values must be enclosed within _____ when being assigned to variables.";
var question5 = "A very useful tool used during development and debugging for printing content to the debugger is:";

var answer1arr= ["strings", "quotes", "numbers and strings", "commas", "JavaScript"];
var answer2arr= ["booleans", "curly brackets", "other arrays", "curly brackets", "terminal/bash"];
var answer3arr= ["alerts", "parenthesis", "booleans", "quotes", "for loops"];
var answer4arr= ["numbers", "square brackets", "all of the above", "parenthesis", "console.log"];
// condition 1- When I click the start quiz button, 
// I want it to display Question 1 and it's answers

