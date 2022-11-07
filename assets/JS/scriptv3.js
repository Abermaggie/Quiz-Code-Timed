var startButton= document.getElementById('startBtn');
var divIntro= document.getElementById('intro')
var questionsEl = document.querySelector(".questions");
var titleScreen= document.querySelector(".h1intro");
var btnAnswer1= document.querySelector(".answer1");
var btnAnswer2= document.querySelector(".answer2");
var btnAnswer3= document.querySelector(".answer3");
var btnAnswer4= document.querySelector(".answer4");
var questionIndex = 
["Commonly used data types DO NOT Include:",
"The condition in an if/else statement is enclosed within _____.",
"Arrays in JavaScript can be used to store _____.",
"String values must be enclosed within _____ when being assigned to variables.",
"A very useful tool used during development and debugging for printing content to the debuggeris:"];

var answer1arr= ["strings", "quotes", "numbers and strings", "commas", "JavaScript"];
var answer2arr= ["booleans", "curly brackets", "other arrays", "curly brackets", "terminal/bash"];
var answer3arr= ["alerts", "parenthesis", "booleans", "quotes", "for loops"];
var answer4arr= ["numbers", "square brackets", "all of the above", "parenthesis", "console.log"];

startButton.addEventListener("click",startQuiz);


function startQuiz () {
    divIntro.style.display= "none";
    // Add timer start here.

    getQuestion()
}

var currentQuestionIndex= 
for (let index = 0; index < questionIndex.length; index++) {
	const currentQuestionIndex = questionIndex[index];
}
	function getQuestion() {
    questionsEl.textContent= questionIndex[currentQuestionIndex];
    btnAnswer1.textContent= answer1arr[currentQuestionIndex];
    btnAnswer2.textContent= answer2arr[currentQuestionIndex];
    btnAnswer3.textContent= answer3arr[currentQuestionIndex];
    btnAnswer4.textContent= answer4arr[currentQuestionIndex];
    }
    



function getRight() {
    console.log("I work");
}
// function startQuiz() {
//     .p.questions = question1;
// }
// function getQuestion() {
//     var currentQuestion = questions[currentQuestionIndex];
//     var titleScreen= document.getElementById("question-title");
// }
for (var i=0; i <questionIndex.length; i++) {

}