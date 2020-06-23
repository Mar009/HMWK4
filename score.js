
// variables 
	var score= [];
	var scoreScreen = [];

localStorage.setItem("score",JSON.stringify(score));

var retrieveScores = JSON.parse(localStorage.getItem("score"));
retrieveScores.sort(function(a,b){
	return b.score - a.score;
});

for(var i=0;i<retrieveScores.length;i++){
	var scoreDiv = document.createElement("div");
	scoreDiv.textContent=retrieveScores[i]+" - "+retrieveScores[i].score
}


function checkAnswer() {
	// if choice value is incorrect
	
		// subtract seconds from the timer
		// display new time to page
		// let player know they are incorrect


	// else 
		// let the player know they're correct

	// check if we've run out of questions
		// yes - end game
		// no - get next question
}

// Whell all questions are answered and/or the timer reaches 0 it is game over 

// Then can save my initials and score 