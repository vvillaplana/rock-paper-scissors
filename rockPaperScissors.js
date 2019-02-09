const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' 
        || userInput === 'paper' 
        || userInput === 'scissors'
            || userInput === 'bomb') {
              return userInput
                    } else {
      console.log("Error! It's not a valid input" );
    }
  }
  
  function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else {
      return 'scissors'
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game was a tie';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins';
      } else if (computerChoice === 'scissors') {
        return 'User wins!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins';
      } else if (computerChoice === 'rock') {
        return 'User wins!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins';
      } else if (computerChoice === 'paper') {
        return 'User wins!';
      }
    }
    if (userChoice === 'bomb') {
      return 'User wins! ;-)'
    }
  }
  
  function playGame() {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`User has ${userChoice} and the computer has ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();