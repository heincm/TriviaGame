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
    },
    {
        name: "q4",
        ques: "What is the name of Spider-man's first girlfriend?",
        ansBank: ["Mary Jane", "Your Mama", "My Mama", "Gwen Stacy"],
        answer: "Gwen Stacy",
    },
    {
        name: "q5",
        ques: "Who was the very first Marvel Comics superhero?",
        ansBank: ["Captain America", "Captain Marvel", "The Human Torch", "Iron Man"],
        answer: "The Human Torch",
    },
];  // end questions object

//keep track of which quesiton to be on
var gameCounter = 0;
var correct = 0;
var incorrect = 0;


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
            $(".submit").trigger("click")
        }
    };

    countdown();



    $(".start").remove();
    // generating responses
    for (var i = 0; i < quesBank.length; i++) {

        //generate question
        var question = $("<h2>");
        question.text(quesBank[i].ques).addClass(quesBank[i].answer).appendTo(".form");

        // add radio button for each response for each question
        for (var g = 0; g < quesBank[i].ansBank.length; g++) {

            //create a button for each possible answer
            var button = $("<input></input>");
            var label = $("<label>")
            //give each button a class
            button.addClass("buttons");

            // add attributes to each button
            button.attr("type", "radio");
            button.attr("name", quesBank[i].name);
            button.attr("value", quesBank[i].ansBank[g]);
            label.text(quesBank[i].ansBank[g]);
            button.append(label);

            // add the buttons to the page and add text to each button
            $(".form").append(button, label);
        };
    };
    var submitButton = $("<button>")
    submitButton.text("submit").addClass("submit").appendTo(".submitButton");
    checkAnswers();
});



function checkAnswers() {
    $(".submit").on("click", function () {
        console.log("working");
for (var h = 0; h < quesBank.length; h++){
        
        if (($('input:radio[name="' + quesBank[h].name + '"]:checked').val() === quesBank[h].answer)) {
            correct++;
            console.log(correct);
        } else {
            incorrect++;
            console.log(incorrect)
        }
    }
    })
};




    
      /* 
    
})*/
