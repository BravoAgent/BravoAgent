let player = 1
playerXPlays = []
playerOPlays = []
var oWins = 0
var xWins = 0
var tieCount = 0
const winnerT = document.createElement("p");
winnerT.id = "winnerT"
winnerT.innerHTML = ""
var winner = ""
const winnerH = document.getElementById("winnerHere")
gameMode = Number(prompt("Enter 1 if you're playing on the same device 2 for ai and 3 for different device"))
var turn = 0
var myPeer;

if(gameMode == 3){
  const remStart = document.getElementById("startButton")
  remStart.style.opacity = "0";
  remStart.style.border = "none";
  remStart.innerHTML = "";
  myPeer = new Peer([prompt("enter an ID")]);
}

else if(gameMode != 3){
  document.getElementById("idP").remove();
  document.getElementById("connButn").remove();
  myPeer = new Peer; 
  
}


function gameStart() {
  
  winner = ""
  document.getElementById("winnerHere").appendChild(winnerT)
  const board = document.createElement("div")
  board.id = "board";
  board.className = "board";
  document.body.appendChild(board)
  const removed = document.getElementById("startButton")
  removed.remove()

  for (i = 1; i <= 9; i++) {
    const playerButton = document.createElement("button");
    playerButton.id = i;
    playerButton.addEventListener("click", clicked);
    playerButton.className = "clickable";
    document.getElementById("board").appendChild(playerButton);

  }


  for (i = 1; i <= 9; i++) {
    const display = document.createElement("p");
    display.id = "box" + i;
    display.className = "display";
    display.innerHTML = ""
    document.getElementById(i).appendChild(display);
  }
}

var boxesClicked = 0
// for some reason, every function with "this.remove()" might be seen as a class "declaration"
function clicked() {
  boxesClicked++
  //alert('hi')

  click = Number(this.id)
  this.disabled = true;

  if (gameMode == 3) {
    sendMessage(click)
  }

  const xOrO = document.getElementById('box' + click)

  if (player % 2 == 1) {
    xOrO.innerHTML = "X"
    player++
    playerXPlays += String(click);
    //alert(playerXPlays)
    checkwin()
  }

  else {
    xOrO.innerHTML = "O"
    player++
    playerOPlays += String(click);
    //alert(playerOPlays)
    checkwin()
  }
  if (gameMode == 2) {
    ai()
  }
}

function checkwin() {

  // hadle x wins

  if (
    playerXPlays.includes("1") && playerXPlays.includes("2") && playerXPlays.includes("3") ||
    playerXPlays.includes("4") && playerXPlays.includes("5") && playerXPlays.includes("6") ||
    playerXPlays.includes("7") && playerXPlays.includes("8") && playerXPlays.includes("9") ||
    playerXPlays.includes("1") && playerXPlays.includes("5") && playerXPlays.includes("9") ||
    playerXPlays.includes("3") && playerXPlays.includes("5") && playerXPlays.includes("7") ||
    playerXPlays.includes("1") && playerXPlays.includes("4") && playerXPlays.includes("7") ||
    playerXPlays.includes("2") && playerXPlays.includes("5") && playerXPlays.includes("8") ||
    playerXPlays.includes("3") && playerXPlays.includes("6") && playerXPlays.includes("9")) {
    winnerT.innerHTML = "X WINS";
    for (i = 1; i <= 9; i++) {
      const remove1 = document.getElementById(i)
      const remove2 = document.getElementById("box" + i)
      remove2.remove()
      remove1.remove()
    }
    document.getElementById("board").remove()
    const playAgain = document.createElement("button");
    playAgain.id = "startButton";
    playAgain.addEventListener("click", gameStart)
    playAgain.innerHTML = "Click to Play Again"
    playAgain.addEventListener("click", multiTest)
    document.getElementById("center").appendChild(playAgain);
    playerXPlays = []
    playerOPlays = []
    player = 1
    winner = "X"
    boxesClicked = 0
    xWins++
    turn = 0
    winnerH.style.height = "8vh";
    winnerH.style.width =  "10vw";
    winnerH.style.overflow = "hidden";
    winnerH.style.opacity = "100"
  }

  // handles O wins
  else if (
    playerOPlays.includes("1") && playerOPlays.includes("2") && playerOPlays.includes("3") ||
    playerOPlays.includes("4") && playerOPlays.includes("5") && playerOPlays.includes("6") ||
    playerOPlays.includes("7") && playerOPlays.includes("8") && playerOPlays.includes("9") ||
    playerOPlays.includes("1") && playerOPlays.includes("5") && playerOPlays.includes("9") ||
    playerOPlays.includes("3") && playerOPlays.includes("5") && playerOPlays.includes("7") ||
    playerOPlays.includes("1") && playerOPlays.includes("4") && playerOPlays.includes("7") ||
    playerOPlays.includes("2") && playerOPlays.includes("5") && playerOPlays.includes("8") ||
    playerOPlays.includes("3") && playerOPlays.includes("6") && playerOPlays.includes("9")) {
    winnerT.innerHTML = "O WINS";
    for (i = 1; i <= 9; i++) {
      const remove1 = document.getElementById(i)
      const remove2 = document.getElementById("box" + i)
      remove2.remove()
      remove1.remove()
    }
    document.getElementById("board").remove()
    const playAgain = document.createElement("button");
    playAgain.id = "startButton";
    playAgain.addEventListener("click", gameStart);
    playAgain.innerHTML = "Click to Play Again"
    playAgain.addEventListener("click", multiTest)
    document.getElementById("center").appendChild(playAgain);
    playerXPlays = []
    playerOPlays = []
    player = 1
    winner = "O"
    boxesClicked = 0
    oWins++
    turn = 0
    winnerH.style.height = "8vh";
    winnerH.style.width =  "10vw";
    winnerH.style.overflow = "hidden";
    winnerH.style.opacity = "100"
    
  }

  // handles ties
  else if (boxesClicked == 9 && winner == "") {
    winner == "tie"
    document.getElementById("board").remove()
    const playAgain = document.createElement("button");
    playAgain.id = "startButton";
    playAgain.addEventListener("click", gameStart);
    playAgain.innerHTML = "Click to Play Again"
    playAgain.addEventListener("click", multiTest)
    document.getElementById("center").appendChild(playAgain);
    playerXPlays = []
    playerOPlays = []
    player = 1
    winnerT.innerHTML = "It's a tie";
    boxesClicked = 0
    tieCount++
    turn = 0
    winnerH.style.height = "8vh";
    winnerH.style.width =  "10vw";
    winnerH.style.overflow = "hidden";
    winnerH.style.opacity = "100"
    
}
}

function ai() {
  var unplayablePositions = []
  var playsByX = []
  chosenPlay = ""
  //alert("hi");
  for (i = 1; i <= 9; i++) {
    let box = "box" + i
    let idToCheck = document.getElementById(box)

    if (idToCheck.innerHTML != "" && winner == "") {
      unplayablePositions += box
    }
  }

  //alert(unplayablePositions)


  do {
    plays = Math.floor(Math.random() * 9) + 1;
    //console.log(plays)
    chosenPlay = "1"
  } while (unplayablePositions.includes(plays))


  //if(){}




  var boxTest1 = document.getElementById("box" + (click - 2))
  //console.log(boxTest1)
  var boxTest2 = document.getElementById(click - 2)
  var boxTest3 = document.getElementById("box" + (click + 2))
  var boxTest4 = document.getElementById(click + 1)
  //console.log(boxTest2)
  //console.log(boxTest3)
  //console.log(boxTest4)
  var alternate2 = false;
  var alternate3 = false;
  var alternate4 = false;




  if (click >= 5 && alternate2 == false && alternate4 == false) {
    let botPlays = document.getElementById(click - 4)
    if (botPlays.disabled === false) {
      plays = botPlays.id
      //console.log(plays)
      alternate2 = true;
      chosenPlay = "2"
    }
  }

  if (click >= 3 && alternate3 == false && alternate4 == false && boxTest1.innerHTML == "X") {
    let botPlays = document.getElementById(click - 1)
    if (botPlays.disabled === false) {
      plays = botPlays.id
      //console.log(plays)
      alternate3 = true;
      chosenPlay = "3;"
    }
  }


  if (click <= 3 && alternate3 == false && alternate4 == false && boxTest3.innerHTML == "X") {
    let botPlays = document.getElementById(click + 1)
    if (botPlays.disabled === false) {
      plays = botPlays.id
      //console.log(plays)
      alternate4 = true;
      chosenPlay = "4"
    }
  }






  while (player % 2 == 0) {
    var played = document.getElementById(plays)
    console.log(plays)
    console.log(chosenPlay)
    played.click()

  }
}


let isConnected = false;
let myConn = undefined;

myPeer.on('open', function(id) {
  let idSpan = document.getElementById('my-id');
  idSpan.appendChild(document.createTextNode(id));
});

// When my peer receives a message
myPeer.on('connection', function(conn) {
  setUpConnection(conn);
});


function addMessageToChat(data) {
  console.log(data);
  const enClicked = document.getElementById(data);
  console.log(enClicked)
  enClicked.click();
  
}

function setUpConnection(conn) {
  isConnected = true;
  myConn = conn;

  conn.on('open', function() {
    conn.send("startButton");

    conn.on('data', function(data) {
      addMessageToChat(data);
    });
  });
}

var destinationID;
// When "Connect" button is clicked
function startGame() {
  destinationID = window.prompt("Enter peer ID: ");
  let conn = myPeer.connect(destinationID);
  setUpConnection(conn);
  turn = 1
}

// When "Send Message" button is clicked
function sendMessage(enemyClicked) {
  let message = enemyClicked;
  addMessageToChat(message);
  myConn.send(message);
}


function multiTest() {
  if(gameMode == 3){
    startGame()
  }
}


if(gameMode == 3 && turn%2 == 1 /*&& turn !=0*/){
   for (i = 1; i <= 9; i++) {
    let disableb = document.getElementById(i);
    disableb.disabled = true; 
  }
}
/*
else if(gameMode == 3 && turn%2 != 1 && turn !=0){
   for (i = 1; i <= 9; i++) {
    let disableb = document.getElementById(i);
    disableb.disabled = true; 
  }
}*/

function counter(){
  turn++
}

