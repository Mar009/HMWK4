// Game logic 
// ideal: upon CLICKING startBtn, timer starts & questions are pulled up.
    // questions are in a loop & are in a array in a seperate js file

// Variables 
var startTime = document.querySelector('.startBtn');
var timer=document.querySelector("#timer");
var choices = document.querySelector("#choices");
var countdown= document.querySelector('#seconds');
var questions= document.querySelector("#questions");


function startQuiz(){
    startTime.addEventListener("click",function(){
        event.preventDefault();
        console.log("you have started. RIP");
        startTimer();
        getQuestion();
    });
};

// get the question/answer object from your questions array based on the current question index
	
			// for loop that goes through the answer choices
				// creates a button

				// set text content of button to be choice
                // append button to the DOM 
function getQuestion(){
    // pull from questionAnswer js 
        //is this pulling?
    <script type="text/javascript" src="questionAnswer.js"></script>
    // ***make buttons*** for choices & set values for them
    for (let i = 0; i < questionAnswers.length; i++) {
        document.getElementById("A").textContent="  ";
        document.getElementById("B").textContent="  ";
        document.getElementById("B").textContent="  ";
        document.getElementById("B").textContent="  ";
        
    }
};

function startTimer(){
    seconds= setInterval(function(){
    seconds --;
    countdown.textContent= seconds;
    if(seconds =0){
        clearInterval(seconds);
        seconds =0
        countdown.textContent="0"
    }

    })
}