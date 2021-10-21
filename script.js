//document.querySelector('.message').textContent

/* 
document.querySelector('.message').textContent = 'Numero Correto!'

document.querySelector(".number").textContent = "13"

document.querySelector('.score').textContent = "10"




document.querySelector('.guess').value = 23 */

// lida com eventos click
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Comece a advinhar...";
  document.querySelector(".score").textContent = score;
});

document.querySelector(".check").addEventListener("click", function () {
  // document.querySelector(".message").textContent = "Número Correto";

  const guess = Number(document.querySelector(".guess").value);

  if (score > 0) {
    if (!guess) {
      displayMessage("Nenhum Número");
    } else {
      if (guess === secretNumber) {
        displayMessage("Numero Correto");
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
          highscore = score;
          document.querySelector(".highscore").textContent = highscore;
        }
      } else {
        guess > secretNumber
          ? displayMessage("Muito Alto")
          : displayMessage("Muito Baixo");

        score--;
        if (score == 0) {
          document.querySelector(".message").textContent = "Voce Perdeu o Jose";
          document.querySelector(".number").textContent = secretNumber;
          document.querySelector("body").style.backgroundColor = "#FF0000";
        }
        document.querySelector(".score").textContent = score;
      }
    }
  } 
});
