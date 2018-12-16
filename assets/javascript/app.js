/* psuedo-coding 

Will need to create two timer functions
    Question timer
        Will allow 15 seconds per question
        Needs to be setInterval timer to display the amount of time left
    Answer timer
        Will be a setTimeout timer as it will fire only once
        will allow 5-10 seconds to view answer before moving on

Submit Function
    will reset interval timer
    will trigger 

Next Question function
    after the answer is displayed, this will display all materials for the next question
*/

// variables that will keep track of correct and incorrect answers
var correct = 0;
var incorrect = 0;
var totalScore = correct + incorrect;

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
}];  // end questions object


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


// create interval timer
// declaring timer variables and variable intial values
var intervalId
var counter
counter = 15;
intervalId = setInterval(function () {
    counter--;
    $(".jumbotron").html("<h1>" + counter + "</h1>")
    if (counter === 0) {
        clearInterval(intervalId);
        $(".btn").trigger("click");
    }
}, 1000)

// setting the click function to check answers
$(".btn").on("click", function () {
    var userResponse = $("input:checked").val();

    if (userResponse === quesBank[totalScore].answer) {
        correct++;
    } else {
        incorrect++;
    }
})

