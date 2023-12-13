// Sets starting values for round number and score.
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates a random number between 0 and 9, rounding down to nearest integer.
const generateTarget = () => Math.floor(Math.random() * 10);

// Defines an outer function for comparing which guess is closest to the target number. Returns true if humanDifference is smaller than or equal to computerDifference. Returns false otherwise. Inner function returns the absolute value between the human/computer guess and the target number.
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  const getAbsoluteDistance = (number1, number2) => Math.abs(number1 - number2);
  // Alerts the user when their guess is out of range
  if (humanGuess < 0 || humanGuess > 9) {
    alert("Please enter a number between 0 and 9");
    return false;
  }
  const humanDifference = getAbsoluteDistance(secretTarget - humanGuess);
  const computerDifference = getAbsoluteDistance(secretTarget - computerGuess);
  return humanDifference <= computerDifference;
};

// Determines the winner and returns a string indicating the winner.
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

// Adds 1 to the round every time a round is completed.
function advanceRound() {
  currentRoundNumber += 1;
}
