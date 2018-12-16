/* psuedo-coding 

Create objects for trivia questions
objects will need
    question
    array of answers
    correct answer
    A name?

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

Will use radio buttons for this as only one radio button can be selected at a time

*/

// variables that will keep track of correct and incorrect answers
var correct = 0;
var incorrect = 0;

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
for (var i = 0; i < quesBank[0].ansBank.length; i++) {
    
    //create a button for each possible answer
    var button = $("<input>");

    //give each button a class
    button.addClass("buttons");

    // add attributes to each button
    button.attr("type", "radio");
    button.attr("name", quesBank[0].name);
    button.attr("value", quesBank[0].ansBank[i]);

    // add the buttons to the page and add text to each button
    $(".form").prepend(button, quesBank[0].ansBank[i]);
}

// setting the click function to check answers
$(".btn").on("click", function () {
    var userResponse = $("input:checked").val();

    if (userResponse === quesBank[0].answer) {
        correct++;
    } else {
        incorrect++;
    }
})
