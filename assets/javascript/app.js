/* psuedo-coding 

    Answer timer
        Will be a setTimeout timer as it will fire only once
        will allow 5-10 seconds to view answer before moving on

Next Question function
    after the answer is displayed, this will display all materials for the next question
*/
/*
// variables that will keep track of correct and incorrect answers

var correct = 0;
var incorrect = 0;
var totalScore = 0;

// Make object for game questions
var quesBank = [{
    name: "q1", //this will be used as the name for the radio button
    ques: "What was the original color of the hulk?",
    ansBank: ["purple", "pink", "green", "grey"],
    answer: "grey", //the correct answer for the question
},
{
    name: "q2",
    ques: "What's the name of the prolific Marvel Comic genuis who passed away in 2018?",
    ansBank: ["Stan Lee", "Your Mama", "My Mama", "Our Mama"],
    answer: "Stan Lee",
},
{
    name: "q3",
    ques: "What's year was Marvel Comics started?",
    ansBank: ["1937", "1938", "1939", "1940"],
    answer: "1939",
}, {
    name: "q4",
    ques: "What is the name of Spider-man's first girlfriend?",
    ansBank: ["Mary Jane", "Your Mama", "My Mama", "Gwen Stacy"],
    answer: "Gwen Stacy",
}];  // end questions object

function createQuestion() {
    // add question text
    var question = $("<h3>")
    question.text(quesBank[totalScore].ques)
    $(".form").append(question)
    //add a button
    var submit = $("<button>");
    submit.addClass("btn btn-primary").attr("type", "button").text("submit");
    $(".form").append(submit)

    //Creating the questions on the page
    for (var i = 0; i < quesBank[totalScore].ansBank.length; i++) {

        //create a button for each possible answer
        var button = $("<input>");

        //give each button a class
        button.addClass("buttons");

        // add attributes to each button
        button.attr("type", "radio");
        button.attr("name", quesBank[totalScore].name);
        button.attr("value", quesBank[totalScore].ansBank[i]);

        // add the buttons to the page and add text to each button
        $(".form").prepend(button, quesBank[totalScore].ansBank[i]);
    };
    startGame();
}


// create interval timer
// declaring timer variables and variable intial values
var intervalId
var counter
counter = 15;
intervalId = setInterval(function () {
    $(".timer").html("<h2>You have " + counter + " seconds left</h2>")
    counter--;
    if (counter === 0) {
        clearInterval(intervalId);
        $(".btn").trigger("click");
    }
}, 1000)

function startGame() {
    // setting the click function to check answers
    $(".btn").on("click", function () {
        var userResponse = $("input:checked").val();

        if (userResponse === quesBank[totalScore].answer) {
            correct++;
        } else {
            incorrect++;
        }
        $(".form").empty();
        showAnswer();
        counter = 15;

    })
}

var whatever
//create function to show correct answer and image after timer has run our
function showAnswer() {
    $(".form").text("The correct answer is: " + quesBank[totalScore].answer);
    var image = $("<img>")
    image.attr("src", "../TriviaGame/assets/images/" + quesBank[totalScore].answer + ".jpg").appendTo(".form")
    whatever = setTimeout(function () {
        $(".form").empty();
        createQuestion();
    }, 5000);
    clearInterval(intervalId);
    counter = 15;
    setInterval;
}
createQuestion();

*/


/* 

click a button to start the game
    this will start the timer that shows the seconds remaining
    this will create the first question and answers

Variables needed
    question bank
    correct answers
    incorrect answers
    counter for the interval timer

*/

// Make object for game questions
var quesBank = [
    {
        name: "q1", //this will be used as the name for the radio button
        ques: "What was the original color of the hulk?",
        ansBank: ["purple", "pink", "green", "grey"],
        answer: "grey", //the correct answer for the question
    },
    {
        name: "q2",
        ques: "What's the name of the prolific Marvel Comic genuis who passed away in 2018?",
        ansBank: ["Stan Lee", "Your Mama", "My Mama", "Our Mama"],
        answer: "Stan Lee",
    },
    {
        name: "q3",
        ques: "What's year was Marvel Comics started?",
        ansBank: ["1937", "1938", "1939", "1940"],
        answer: "1939",
    }, {
        name: "q4",
        ques: "What is the name of Spider-man's first girlfriend?",
        ansBank: ["Mary Jane", "Your Mama", "My Mama", "Gwen Stacy"],
        answer: "Gwen Stacy",
    }
];  // end questions object

//keep track of which quesiton to be on
var gameCounter = 0;
var wins = 0;
var losses = 0;


//This function starts the game
$(".start").on("click", function () {

    //start the interval timer
    var timer  //variable for setInterval
    var timeLeft = 5;

    function countdown() {
        timer = setInterval(timeUp, 1000);
    };

    function timeUp() {
        timeLeft--
        console.log(timeLeft)
        if (timeLeft === 0) {
            clearInterval(timer); //clear the interval timer if timeLeft hits 0
            console.log("time's up");
            gameCounter++;
        }
    };

    countdown();

    //generate question
    var question = $("<h2></h2>");
    question.text(quesBank[gameCounter].ques).appendTo(".form");

    // generating responses
    for (var i = 0; i < quesBank[gameCounter].ansBank.length; i++) {

        //create a button for each possible answer
        var button = $("<input>");

        //give each button a class
        button.addClass("buttons");

        // add attributes to each button
        button.attr("type", "radio");
        button.attr("name", quesBank[gameCounter].name);
        button.attr("value", quesBank[gameCounter].ansBank[i]);

        // add the buttons to the page and add text to each button
        $(".form").append(button, quesBank[gameCounter].ansBank[i]);
    };
})

$(document).ready(function () {
    var userResponse = $("input:checked").val();

    if (userResponse === quesBank[gameCounter].answer) {
        wins++;
        console.log(wins);
    };
});