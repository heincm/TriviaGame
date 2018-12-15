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
    Allow user to submit answer before time is up
    will reset interval timer
    will trigger 
 
Grade function
    will check for correct answer
    if answer is correct, correct++
    else wrong++

Next Question function
    after the answer is displayed, this will display all materials for the next question

Will use radio buttons for this as only one radio button can be selected at a time

*/

// Make object for game questions

var quesBank = [{
    name: "q1", //this will be used as the name for the radio button
    ques: "What was the original color of the hulk?",
    ansBank: ["purple", "pink", "green", "grey"],
    correct: "grey", //the correct answer for the question
},
{
    name: "q2",
    ques: "What's the name of the prolific Marvel Comic genuis who passed away in 2018?",
    ansBank: ["Stan Lee", "Your Mama", "My Mama", "Our Mama"],
    correct: "Stan Lee",
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

    // add text for each button


    // add the buttons to the page
    $(".form").append(button);
}