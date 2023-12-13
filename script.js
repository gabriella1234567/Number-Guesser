/**
 * Sets starting values for round number and score.
 * @type {number}
 */
let humanScore = 0;
/**
 * Sets starting values for round number and score.
 * @type {number}
 */
let computerScore = 0;
/**
 * Sets starting values for round number and score.
 * @type {number}
 */
let currentRoundNumber = 1;

/**
 * Generates a random number between 0 and 9, rounding down to nearest integer.
 * @returns {number} The randomly generated target number.
 */
const generateTarget = () => Math.floor(Math.random() * 10);

/**
 * Compares the human and computer guesses to the target number and determines which guess is closest.
 * @param {number} humanGuess - The human's guess.
 * @param {number} computerGuess - The computer's guess.
 * @param {number} secretTarget - The target number.
 * @returns {boolean} True if the human's guess is closer or equal to the target number, false otherwise.
 */
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  /**
   * Calculates the absolute distance between two numbers.
   * @param {number} number1 - The first number.
   * @param {number} number2 - The second number.
   * @returns {number} The absolute distance between the two numbers.
   */
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

/**
 * Updates the score based on the winner of the round.
 * @param {string} winner - The winner of the round ("human" or "computer").
 */
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

/**
 * Advances the round number by 1.
 */
function advanceRound() {
  currentRoundNumber += 1;
}
