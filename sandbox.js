//console.log(guess);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

function displayMessage(msg) {
  document.querySelector(".message").textContent = msg;
}

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = 20;
  document.querySelector("#highscore").textContent = highscore;
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.getElementById("ques").style.backgroundColor = "#FFFFFF";
  document.querySelector("header").style.borderBottomColor = "#FFFFFF";
  displayMessage("Start playing");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  if (guess < 1 || guess > 20) {
    document.getElementById("ques").style.backgroundColor = "#FFFF00";
    document.querySelector("header").style.borderBottomColor = "#FFFF00";
    displayMessage("Invalid Input");
  } else if (guess == secretNumber) {
    displayMessage("Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.getElementById("ques").style.backgroundColor = "#228B22";
    document.querySelector("header").style.borderBottomColor = "#228B22";
    if (score > highscore) {
      highscore = score;
      document.querySelector("#highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    document.getElementById("ques").style.backgroundColor = "#FF0000";
    document.querySelector("header").style.borderBottomColor = "#FF0000";
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
