// Game logic 
// Variables 
var startTime = document.querySelector('.startBtn');
var timer=document.querySelector("#timer");
var choices = document.querySelector("#choices");
var seconds= document.querySelector('#seconds');
var questions= document.querySelector("#questions");


function startQuiz(){
    startTime.addEventListener("click",function(){
        event.preventDefault();
        console.log("you have started. RIP");
        startTimer();
        getQuestion();
    });
};

// When answer a questions then move on to another question
// get the question/answer object from your questions array based on the current question index
	// update the DOM with the current question
    // clear out any old question choices  
    // update the DOM with the current answer choices
			// for loop that goes through the answer choices
				// creates a button
				// set a class attribute of "choice"
				// set a value attribute of choice
				// set text content of button to be choice
                // append button to the DOM 
function getQuestion(){
    <script type="text/javascript" src="questionAnswer.js"></script>
    for (let i = 0; i < questionAnswers.length; i++) {
        
        const element = questionAnswers[index];
        
    }
};

function startTimer(){
    seconds= setInterval(function(){
       seconds 
    })
}