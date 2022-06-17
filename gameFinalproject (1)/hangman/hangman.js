var wordList = ["bedroom", "grace", "tumble", "thrust", "jaw", "coat", "myth", "compliance", "response", "desert", "few", "cousin", "miscarriage", "trench", "snap", "cower", "mutter", "side", "mutter", "move", "reproduction", "prison", "thirsty", "arena", "map", "cemetery", "drawing", "trend", "restaurant", "grand", "declaration", "fund", "provision", "sympathetic", "harass", "accurate", "reception", "frozen", "chord", "gem", "square", "shortage", "fan", "dressing", "banana", "mobile", "election", "screw", "interrupt", "trouble", "dragon", "exhibition", "please", "intervention", "aviation", "ancestor", "revoke", "continental", "tower", "direction", "reliance", "interrupt", "liberty", "silence", "fantasy", "wheat", "weight", "perfect", "beach", "criminal", "fly", "defendant", "domination", "publication", "curl", "stun", "drink", "pepper", "tiger", "basketball"]


// upperCase for less bugs and simpler and smother game experince


// makes testing easier

document.addEventListener("click", onGameStart)

var wordLower = wordList[Math.floor(Math.random() * wordList.length)];
var word = wordLower.toUpperCase()
//alert(word);

const guessNoti = document.createElement("p");
guessNoti.innerHTML = "You have 10 wrong guesses";
guessNoti.id = "guessNoti";

function onGameStart() {
  keyboardAble();
  document.getElementById("guessesLeft").appendChild(guessNoti);
  lineCreator();

  for (i = 1; i <= 26; i++) {
    var butn = document.createElement("BUTTON");
    var br = document.createElement("br");
    var letter = String.fromCharCode(i + 64);
    //var t = document.createTextNode(letter);
    butn.innerHTML = letter;
    butn.id = letter;
    butn.addEventListener("click", letterClicked);
    butn.addEventListener("click", disableButn)
    document.getElementById("alpahabetHere").appendChild(butn);
    butn.className = "letterButton";

    //if (i % 10 == 0) { document.getElementById("alpahabetHere").appendChild(br); }
    if (word.includes(butn.id)) { butn.className = "inWord" }

  }
  const playButton = document.getElementById("playBtn");
  // removed the playButton to stop infinte alphabets from spawning
  playButton.remove();
  document.removeEventListener("click", onGameStart)
};

// creates the guess variable, not all that useful, could be removed
function letterClicked() {
  //alert (this.id)
  guess = this.id;
  guessChecker();
};

  //creates lines explained in guessChecker (line 88)
function lineCreator() {

  for (i = 0; i <= (word.length - 1); i++) {
    var line = document.createElement("TH"); // TH is used to create them on the same horizontal line;
    line.id = "line" + i;
    line.innerHTML = " _ ";
    document.getElementById("linesHere").appendChild(line);
    console.log(line.id);

  }
};


// all theses variables and constants are used for game play. Created now because they shouldnt be needed before;
var guessedWordL = 0;
var numberOfGuess = 0;

const playAgain = document.createElement("button");
playAgain.addEventListener("click", playAgainF);
playAgain.innerHTML = "Click to play Again";
playAgain.id = "playAgainButton";

const manImage = document.createElement("img");
manImage.id = "manImgz";
manImage.src = "hangmanImg/Hangman1.png";

const wordWas = document.createElement("p");
wordWas.id = "theWordIs";




// game deciding function --- not to be messed up
function guessChecker() {

  document.getElementById("hangmanImages").appendChild(manImage);

  // it goes through the whole word and checks for every occurences. 
  for (i = 0; i <= word.length; i++) {

    if (word.charAt(i) == guess) {
      // guessWordL is used to validate if all letters have been guessed
      guessedWordL++;
      //lineToChange changes the "line/(TH) created in the on game start, probably a more efficent way
      var lineToChange = document.getElementById("line" + i);
      lineToChange.innerHTML = guess;

    }

  };

  // to check if guessed letter isn't in the word

  if (word.includes(guess) == false) {

    numberOfGuess++
    guessNoti.innerHTML = "You have " + (10 - numberOfGuess) + " wrong guesses left";
    manImage.src = "hangmanImg/Hangman" + (numberOfGuess + 1) + ".png";
  }

  // given 10 chances. 
  if (numberOfGuess >= 10) {
    // alert("you Lost")
    disableAll();
    wordWas.innerHTML = "The word was.. " + word;
    document.getElementById("playAgainHere").appendChild(playAgain);
    guessNoti.innerHTML = " You Lost";
    document.getElementById("theWordWas").appendChild(wordWas);
    document.addEventListener("click", playAgainF)
  }

  //Here I used guessedWordL to check for win
  else if (guessedWordL == word.length) {
     document.addEventListener("click", playAgainF)
    //  alert("you Won")
    document.getElementById("playAgainHere").appendChild(playAgain)
    disableAll()
    guessNoti.innerHTML = " You Won"
  }

};

// disable button once clicked
function disableButn() {
  this.disabled = true;
}

// this function disables all buttons, it's called when you lose (line 116)
function disableAll() {
  for (i = 1; i <= 26; i++) {
    var button = document.getElementById(String.fromCharCode(i + 64))
    button.disabled = true
  };
};
// thius function allows the game to restart without refreshing the page.
function playAgainF() {
  document.removeEventListener("click", playAgainF);
  guessedWordL = 0;
  numberOfGuess = 0;

  guessNoti.innerHTML = " You Have 10 guesses";
  manImage.src = "hangmanImg/Hangman1.png";
  wordWas.innerHTML = "";
  

  // remove the empty lines -- recreated in line 173 (same function)
  for (i = 0; i <= word.length - 1; i++) {
    var toElim = document.getElementById("line" + i)
    toElim.remove();
    //alert(toElim.id)
  };

  //alert(word)

  // creates new word;
  wordLower = wordList[Math.floor(Math.random() * wordList.length)];
  word = wordLower.toUpperCase()
  //lineCreator();
  //alert(word)

  var plyAgButton =document.getElementById("playAgainButton");
  plyAgButton.remove();
  //keyboardAble();

  usedLetters = []

      for (i = 1; i <= 26; i++){
      var toDeleted = document.getElementById(String.fromCharCode(i + 64));
      toDeleted.remove();
    }

  onGameStart()
};

var usedLetters = [];
function keyboardAble() {


  document.addEventListener("keypress", function(event) {

    if (/[abcdefghijklmnopqrstuvwxyz]/.test(event.key) && event.key.length == 1 && usedLetters.includes(event.key) == false) {
      usedLetters += event.key
      var butKey = event.key.toUpperCase()
      var butToDisable = document.getElementById(butKey)
      butToDisable.disabled = true;
      guess = butKey;
      guessChecker();
    }
  });
}
