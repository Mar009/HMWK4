// Ideal: depending on choice of answer, wrong or not, points are added or time is reduced
	//all of which accumulates on the highscore pg which displays the information
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
		// yes then end game
		// no then move onto the next next question
}

// All questions are answered and/or the timer reaches 0 = game over 

//  save my initials and score 