let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.ceil(Math.random() * 10);
}
const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    let uc = 0, cc = 0, out = false;
    uc = (secretTarget - userGuess); uc < 0 ? uc *= -1: uc = uc;
    cc = (secretTarget - computerGuess); cc < 0 ? cc *= -1: cc = cc;
    (uc < cc || uc === cc) ? out = true: out = false;
    return out;
}
const updateScore = (winner) => {
    winner.toLowerCase() === 'human' ? humanScore++ : computerScore++;
}
const advanceRound = () => {
    currentRoundNumber++;
}
