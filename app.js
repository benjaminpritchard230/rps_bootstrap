const choices = ["rock", "paper", "scissors"];
const gameGrid = document.getElementById("game");
const buttonGrid = document.getElementById("buttons");

const userChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");

userChoiceDisplay.innerHTML = "userChoice";
computerChoiceDisplay.innerHTML = "computerChoice";
resultDisplay.innerHTML = "resultDisplay";

resultDisplay.className = "text-bg-info p-3";
userChoiceDisplay.className = "text-bg-info p-3";
computerChoiceDisplay.className = "text-bg-info p-3";

gameGrid.append(userChoiceDisplay);
gameGrid.append(computerChoiceDisplay);
gameGrid.append(resultDisplay);

let computerChoice;
let userChoice;

const handleClick = (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
  changePlayerImage();
  changeComputerImage()
};

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = computerChoice;
};

const changePlayerImage = () => {
  switch (userChoice) {
    case "rock":
      document.getElementById("playerimage").src = "rock.jpg";
      break;
    case "paper":
      document.getElementById("playerimage").src = "paper.jpg";
      break;
    case "scissors":
      document.getElementById("playerimage").src = "skissors.jpg";
      break;
  }
};

const changeComputerImage = () => {
  switch (computerChoice) {
    case "rock":
      document.getElementById("computerimage").src = "rock.jpg";
      break;
    case "paper":
      document.getElementById("computerimage").src = "paper.jpg";
      break;
    case "scissors":
      document.getElementById("computerimage").src = "skissors.jpg";
      break;
  }
}

const getResult = () => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      resultDisplay.innerHTML = "You win!";
      resultDisplay.className = "text-bg-success p-3 justify-content-center";

      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.innerHTML = "You lose!";
      resultDisplay.className = "text-bg-danger p-3 justify-content-center";

      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      resultDisplay.innerHTML = "Draw!";
      resultDisplay.className = "text-bg-warning p-3 justify-content-center";

      break;
  }
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.innerHTML = choices[i];
  button.className = "btn btn-primary border";
  buttonGrid.append(button);
  button.id = choices[i];
  button.addEventListener("click", handleClick);
}
