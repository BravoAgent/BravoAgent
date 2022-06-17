//alert("hi")
var loseCount, winCount, playerScore, tieCount;


playerScore = 0;
winCount = 0;
loseCount = 0;
tieCount = 0;



const posibleAnswer = ["rock", "paper", "sci"];
let robotAnswer = posibleAnswer[Math.floor(Math.random()*posibleAnswer.length)]

//alert(robotAnswer)


// /* create results box here
const resultBox = document.createElement("p");
resultBox.id = "result";
resultBox.className = "results";
document.body.appendChild(resultBox)

const winBox = document.createElement("p");
winBox.id = "winBox";
winBox.className = "results";
document.body.appendChild(winBox);

const lostBox = document.createElement("p");
lostBox.id = "lostBox";
lostBox.className = "results";
document.body.appendChild(lostBox);

const tieBox = document.createElement("p");
tieBox.id = "tieBox";
tieBox.className = "results";
document.body.appendChild(tieBox);

const scoreBox = document.createElement("p");
scoreBox.id = "scoreBox";
scoreBox.className = "results";
document.body.appendChild(scoreBox);

const winLose = document.createElement("p");
winLose.id = "winLose";
winLose.className = "results";
document.body.appendChild(winLose)



// */ finished making boxes for results 


// making buttons for game on game start

function playButton(){
const rockButton = document.createElement("BUTTON")
rockButton.id = "rockButton";
rockButton.innerHTML = "Click for Rock";
rockButton.className = "playerButton";
document.getElementById("buttonPlace").appendChild(rockButton);
rockButton.addEventListener("click", playedRock);
  
const paperButton = document.createElement("BUTTON")
paperButton.id = "paperButton";
paperButton.innerHTML = "Click for Paper";
paperButton.className = "playerButton";
document.getElementById("buttonPlace").appendChild(paperButton);
paperButton.addEventListener("click", playedPaper);
  
const sciButton = document.createElement("BUTTON")
sciButton.id = "sciButton"
sciButton.innerHTML = "Click for Scissors"
sciButton.className = "playerButton"
document.getElementById("buttonPlace").appendChild(sciButton);
sciButton.addEventListener("click", playedSci);

const playBu = document.getElementById("playBu");
playBu.remove()}
// buttons for game done 




function playedRock(){
  //alert("hi Rok")

  if (robotAnswer == "rock"){resultBox.innerHTML = "Bot played Rock, it's a Tie"
                            playerScore += 0
                            tieCount++}
  else if (robotAnswer == "paper"){resultBox.innerHTML = "Robot played Paper, it's your Loss";
                                  loseCount++
                                  playerScore -= 90}
  else if (robotAnswer == "sci"){resultBox.innerHTML = "Bot player Scissors, it's your Win";
                                winCount++;
                                playerScore += 100};
  if(playerScore <= 0){playerScore = 0}
scoreBox.innerHTML = playerScore + " points";
lostBox.innerHTML = loseCount + " Loses";
winBox.innerHTML = winCount + " wins";
tieBox.innerHTML = tieCount + " ties"


  
robotAnswer = posibleAnswer[Math.floor(Math.random()*posibleAnswer.length)]
 // alert(robotAnswer)
};


function playedPaper(){
 // alert("hi Paper")
if (robotAnswer == "paper"){resultBox.innerHTML = "Bot played Paper, it's Tie"
                            playerScore += 0
                           tieCount++ }
  else if (robotAnswer == "sci"){resultBox.innerHTML = "Bot played Scissord, its your Loss";
                                  loseCount++
                                  playerScore -= 90}
  else if (robotAnswer == "rock"){resultBox.innerHTML = "Bot played Rock, you Win";
                                winCount++;
                                playerScore += 100};
  
if(playerScore <= 0){playerScore = 0}
scoreBox.innerHTML = playerScore + " points";
lostBox.innerHTML = loseCount + " Loses";
winBox.innerHTML = winCount + " wins";
tieBox.innerHTML = tieCount + " ties ";

  
robotAnswer = posibleAnswer[Math.floor(Math.random()*posibleAnswer.length)]
//alert(robotAnswer)
};


function playedSci(){
  //alert("hi Sci")
if (robotAnswer == "sci"){resultBox.innerHTML = "Bot Played Scissors it's a Tie"
                            playerScore += 0
                          tieCount++ }
  else if (robotAnswer == "rock"){resultBox.innerHTML = "Bot played ROCK, your Loss";
                                  loseCount++
                                  playerScore -= 90}
  else if (robotAnswer == "paper"){resultBox.innerHTML = "Bot played Paper, you Win";
                                winCount++;
                                playerScore += 100};
if(playerScore <= 0){playerScore = 0}
scoreBox.innerHTML = playerScore + " points";
lostBox.innerHTML = loseCount + " Loses";
winBox.innerHTML = winCount + " wins";
  tieBox.innerHTML = tieCount + " ties"

 
  
robotAnswer = posibleAnswer[Math.floor(Math.random()*posibleAnswer.length)]
//alert(robotAnswer)
};



/* const playAgain = document.createElement("button")
playAgain.id = "playAgain"
playAgain.innerHTML = "Play Again?"
//document.body.appendChild(playAgain)
playAgain.addEventListener("click", playButton())*/



