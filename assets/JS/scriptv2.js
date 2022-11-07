var startButton= document.getElementById("startBtn");
var introSection= document.getElementById("intro");
var questionText= document.body.children[1].children[1].children[0];
var answerOne = document.getElementById("1");
var answerTwo= document.getElementById("2");
var answerThree= document.getElementById("3");
var answerFour= document.getElementById("4");
var TIMER= document.getElementById("timerEl");
var finalScore= document.getElementById("finalscore");
var questionBody= document.getElementsByClassName("question-container");

var questionSet = [
    {
        question: "Commonly used data types DO NOT Include:",
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers",
        correct: 3  
    },{
        question: "The condition in an if/else statement is enclosed within _____.",
        Answer1: "quotes",
        Answer2: "curly brackets",
        Answer3: "parenthesis",
        Answer4: "square brackets",
        correct: 3
    }, {
        question: "Arrays in JavaScript can be used to store _____.",
        Answer1: "numbers and strings",
        Answer2: "other arrays",
        Answer3: "booleans",
        Answer4: "all of the above",
        correct: 1 
    }, {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        Answer1: "commas",
        Answer2: "curly brackets",
        Answer3: "quotes",
        Answer4: "parenthesis",
        correct: 3
    }, {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        Answer1: "JavaScript",
        Answer2: "terminal/bash",
        Answer3: "for loops",
        Answer4: "console.log",
        correct: 4  
    }
];
var qArray = questionSet.length;
var runningQuestion=0;


function renderQuestion(){
    var q= questionSet[runningQuestion];
    questionText.innerHTML= "<p>" + q.question + "</p>";
    answerOne.innerHTML= q.answer1;
    answerTwo.innerHTML= q.answer2;
    answerThree.innerHTML= q.answer3;
    answerFour.innerHTML= q.answer4;
}
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    introSection.style.display="none";
    // questionBody.style.display="block";
    renderQuestion();
    renderCounter();
    TIMER= setInterval(renderCounter,1000);
}
var count=75;
var questionTime= 75;
var TIMER;
function renderCounter() {
        timeContainer.innerHTML = count;
        count--
    }