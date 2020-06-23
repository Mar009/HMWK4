// Game logic 
// Variables 
    // timer 

    // score?? 
var startTime = document.querySelector('#startBtn');
var timer=document.querySelector("#timer");
var choices = document.querySelector("#choices");
var seconds= document.querySelector('#seconds');
var questions= document.querySelector("#questions");

function startQuiz(){
    // timer start
    // text content of timer on DOM 
    startTime.addEventListener("click",function(){
            alert("you have started. RIP");
            event.preventDefault();
            getQuestion();
        });

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
function getQuestion (arr){
    for (var i=0; i< arr.length;i++){
        choices.addEventListener("click",function());
    };
    
                
};