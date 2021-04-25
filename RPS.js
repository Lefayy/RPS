const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  
  switch(userInput) {
    case 'rock':
      return userInput;
      break;
    case 'paper':
      return userInput;
      break;
    case 'scissors':
      return userInput;
      break;
    default:
      console.log("ERROR: User hasn't picked any of the choices.");    
  }
}

const getComputerChoice = function() {
  const gNumber = Math.floor(Math.random() * 3);
  
  switch(gNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log("COMPUTER ERROR: Computer made a wrong choice?");  
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice == computerChoice) {
    return console.log("It was a tie!");
  }
  
  if(userChoice == 'rock' && computerChoice == 'paper') {
    return console.log("The computer won!");
  }

  if(userChoice == 'paper' && computerChoice == 'scissors') {
    return console.log("The computer won!");
  }

  if(userChoice == 'scissors' && computerChoice == 'rock') {
    return console.log("The computer won!");
  }

  console.log("You won!");
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice}`);
  console.log(`The computer threw ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();


