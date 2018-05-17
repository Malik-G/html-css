	
//global variables
var p1Score = 0;
var p2Score = 0;
var winningScore = 6;
var gameOver = false;

//element selections
var p1ScoreText = document.getElementById("player1Score");
var p2ScoreText = document.getElementById("player2Score");
var newMaxScoreText = document.getElementById("maxScore");
var newMaxScore = document.querySelector("input"); //used querySelector since there is only 1 input
var p1Button = document.getElementsByTagName("button")[0];
var p2Button = document.getElementsByTagName("button")[1];
var resetButton = document.getElementsByTagName("button")[2];

//event listeners
p1Button.addEventListener("click", player1Count);
p2Button.addEventListener("click", player2Count);
resetButton.addEventListener("click", resetScore);
newMaxScore.addEventListener("change", changeMaxScore);

//functions
function player1Count(){
	if (!gameOver){
		p1Score += 1;
		if (p1Score === winningScore){
			p1ScoreText.classList.add("turnGreen")
			gameOver = true;
		}
	}
	p1ScoreText.innerHTML = p1Score;
	
}
function player2Count(){
	if (!gameOver){
		p2Score += 1;
		if (p2Score === winningScore){
			p2ScoreText.classList.add("turnGreen")
			gameOver = true;
		}
	}
	p2ScoreText.innerHTML = p2Score;
}
function resetScore(){
	p1Score = 0;
	p1ScoreText.innerHTML = "0";
	p1ScoreText.classList.remove("turnGreen")
	p2Score = 0;
	p2ScoreText.innerHTML = "0";
	p2ScoreText.classList.remove("turnGreen")
	gameOver = false;
}
function changeMaxScore(){
	var strToNum = Number(this.value); //use .value to retrieve an input's string value
	winningScore = strToNum;
	newMaxScoreText.textContent = winningScore;
	resetScore();
}